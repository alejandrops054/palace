import React from "react";

import { Button, Input } from "../index";

/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

const GetExistingF = () => {
  return (
    <div>
      <h1>Get Existing Financing</h1>
      <div className="d-flex justify-content-between">
        <h3 className="p-6 bd-highlight">
          <Input
            label="Number"
            type="number"
            placeholder="Down Payment"
            col={12}
          />
        </h3>
        <h3 className=" p-6 bd-highlight">
          <Input label="Date" type="date" placeholder="Down Payment" col={12} />
        </h3>
        <Button
          typebootstrap=" btn btn-secondary"
          icon="fas fa-search"
          col={4}
         />
      </div>
    </div>
  );
};

export default GetExistingF;
