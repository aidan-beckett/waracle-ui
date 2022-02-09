import React, { FunctionComponent, useState, useCallback } from "react";
import CakeService, {CakeResponse, CreateCakeRequest} from "../../services/cakes";

const cakeService = new CakeService();

const CakesCreate: FunctionComponent = () => {

  const [cakeRequest, setCakeRequest] = useState<CreateCakeRequest>({
    name: "",
    comment: "",
    imageUrl: "",
    yumFactor: 0
  });
  
  return (
    <div className="cakes-create-component">

    </div>
  )
}

export default CakesCreate;