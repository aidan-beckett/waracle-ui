import React, { FunctionComponent, useState, useEffect } from "react";
import CakeService from "../../services/cakes";
import { CreateCakeRequest } from "shared/types/cakes";
import CakesDetailForm from "./CakesDetailForm";
import { Form, ButtonGroup, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useValidation from "../../hooks/useValidation";
import { isValue, isValidUrl } from "../../utils/validators";
import Header from "../shared/Header";


const cakeService = new CakeService();

const CakesCreate: FunctionComponent = () => {

  const [cakeRequest, setCakeRequest] = useState<CreateCakeRequest>({
    name: "",
    comment: "",
    imageUrl: "",
    yumFactor: 1
  });
  const [errors, hasErrors, validate] = useValidation({
    name: [(v: string) => v.length <= 30? "": "Name is too long", isValue],
    comment: [(v: string) => v.length <= 200? "": "Comment is too long", isValue],
    imageUrl: [isValidUrl, isValue],
    yumFactor: [(v) => v > 0 && v < 6 ? "": "Yum Factor must be between 1 and 5", (v) => isNaN(v)? "Must be a number": ""]
  }, cakeRequest);

  useEffect(() => {
    validate();
  }, [cakeRequest])

  const navigate = useNavigate();

  const submitCake = async (e: any) => {
    e.preventDefault();
    let res = await cakeService.createCake(cakeRequest);
    if(res) {
      toast("Cake Created");
      navigate("/cakes");
    }
  }

  return (
    <div className="cakes-create-component">
      <Header title="Create Cake" />
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

export default CakesCreate;