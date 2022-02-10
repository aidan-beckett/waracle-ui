import React, { FunctionComponent, useState, useCallback, useEffect } from "react";
import CakeService from "../../services/cakes";
import { CakeResponse } from "shared/types/cakes";
import {Image, Button, ButtonGroup} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../shared/Header";
import { toast } from "react-toastify";

const cakeService = new CakeService();

const CakesList: FunctionComponent = () => {

  const [cakes, setCakes] = useState<CakeResponse[]>([]);
  const navigate = useNavigate();

  const fetchCakes = useCallback(async () => {
    let cakesResponse = await cakeService.getCakes();
    if(cakesResponse && cakesResponse.data) setCakes(cakesResponse.data);
  }, [])
  
  useEffect(() => {
    fetchCakes();
  }, [fetchCakes])

  const deleteCake = async (cakeId: number) => {
    let deleteResponse = await cakeService.deleteCake(`${cakeId}`);
    if(deleteResponse) {
      toast("Cake Deleted");
      fetchCakes();
    }
  }

  const buildContent = () => {
    return cakes.map(c => (
      <div className="cake" key={c.id}>
        <h3 className="cake-title">{c.name}</h3>
        <Image rounded className="cake-image" alt={c.name} src={c.imageUrl}/>
        <p className="cake-comment">{c.comment}</p>
        <p>Yum Factor: {c.yumFactor}</p>
        <ButtonGroup>
          <Button className="cake-button" size="sm" type="button" variant="primary" onClick={() => navigate(`/cakes/${c.id}/edit`)}>Edit</Button>
          <Button className="cake-button" size="sm" type="button" variant="danger" onClick={() => deleteCake(c.id)}>Delete</Button>
        </ButtonGroup>
      </div>
    ))
  }
  return (
    <div className="cakes-list-component">
      <Header title="Cakes List" cta={<Button type="button" variant="primary" size="sm" onClick={() => navigate(`/cakes/create`)}>Create Cake</Button>}/>
      <div className="cakes-grid">
        {buildContent()}
      </div>
    </div>
  )
}

export default CakesList;