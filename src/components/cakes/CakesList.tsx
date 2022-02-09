import React, { FunctionComponent, useState, useCallback } from "react";
import CakeService, {CakeResponse} from "../../services/cakes";

const cakeService = new CakeService();

const CakesList: FunctionComponent = () => {

  const [cakes, setCakes] = useState<CakeResponse[]>([]);

  
  
  return (
    <div className="cakes-list-component">

    </div>
  )
}

export default CakesList;