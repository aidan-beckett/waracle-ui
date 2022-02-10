import React, { FunctionComponent, useState, useEffect, useCallback } from "react";
import CakeService from "../../services/cakes";
import { UpdateCakeRequest} from "shared/types/cakes";
import { useNavigate, useParams } from "react-router-dom";
import CakesDetailForm from "./CakesDetailForm";
import { Form, ButtonGroup, Button, Image } from "react-bootstrap";
import Header from "../shared/Header";
import { toast } from 'react-toastify';
import useValidation from "../../hooks/useValidation";
import { isValue, isValidUrl } from "../../utils/validators";


const cakeService = new CakeService();

const CakesEdit: FunctionComponent = () => {

  const [cakeRequest, setCakeRequest] = useState<UpdateCakeRequest>({
    yumFactor: 1
  });
  const params = useParams<{id: string}>();
  const navigate = useNavigate();
  const [errors, hasErrors, validate] = useValidation({
    name: [(v: string) => v.length <= 30? "": "Name is too long", isValue],
    comment: [(v: string) => v.length <= 200? "": "Comment is too long", isValue],
    imageUrl: [isValidUrl, isValue],
    yumFactor: [(v) => v > 0 && v < 6 ? "": "Yum Factor must be between 1 and 5", (v) => isNaN(v)? "Must be a number": ""]
  }, cakeRequest);

  useEffect(() => {
    validate();
  }, [cakeRequest])

  useEffect(() => {
  }, [errors])

  const fetchCake = useCallback(async () => {
    if(params.id){
      let cakeResponse = await cakeService.getCake(params.id);
      if(cakeResponse && cakeResponse.data) 
        setCakeRequest({
          name: cakeResponse.data.name,
          comment: cakeResponse.data.comment,
          imageUrl: cakeResponse.data.imageUrl,
          yumFactor: cakeResponse.data.yumFactor
        });   
    }
  }, [params.id]);

  useEffect(() => {
    fetchCake();
  }, [fetchCake])

  const submitCake = async (e: any) => {
    e.preventDefault();
    if(params.id){
      let res = await cakeService.patchCake(params.id, cakeRequest);
      if(res){
        toast("Cake Updated");
        navigate("/cakes");
      }
    }
  }

  return (
    <div className="cakes-update-component">
      <Header title="Edit Cake" />
      <div className="form-container">
        <Form className="cakes-detail-form" onSubmit={submitCake}>
          <CakesDetailForm request={cakeRequest} setRequestCallback={setCakeRequest} errors={errors}/>
          <div className="buttons-container">
            <ButtonGroup>
              <Button size="sm" type="submit" variant="primary" disabled={hasErrors}>Save</Button>
              <Button size="sm" type="button" variant="secondary" onClick={() => navigate("/cakes")}>Cancel</Button>
            </ButtonGroup>
          </div>
        </Form>
        <div className="cake-image-preview">
          {cakeRequest.imageUrl && (!errors.imageUrl) && 
            <Image rounded className="cake-image" src={cakeRequest.imageUrl} alt={cakeRequest.name}/>
          }
        </div>
      </div>
    </div>
  )
}

export default CakesEdit;