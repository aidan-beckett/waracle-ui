import React, { FunctionComponent, useState, useCallback } from "react";
import CakeService, {CakeResponse} from "../../services/cakes";

const cakeService = new CakeService();

const CakesDetail: FunctionComponent = () => {

  const [cake, setCake] = useState<CakeResponse>();

  
  
  return (
    <div className="cakes-create-component">

    </div>
  )
}

export default CakesDetail;