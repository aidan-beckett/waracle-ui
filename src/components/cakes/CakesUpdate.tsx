import React, { FunctionComponent, useState, useCallback } from "react";
import CakeService, {CakeResponse, UpdateCakeRequest} from "../../services/cakes";

const cakeService = new CakeService();

const CakesUpdate: FunctionComponent = () => {

  const [cakeRequest, setCakeRequest] = useState<UpdateCakeRequest>({});
  

  return (
    <div className="cakes-update-component">

    </div>
  )
}

export default CakesUpdate;