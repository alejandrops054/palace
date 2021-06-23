/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from "react";
import { Spinner } from "../index";


const Loading = () => {
  return (
    <>
      <div className="modal-dialog p-5 mt-5">
        <div className="modal-dialog modal-dialog-centered text-center p-5">
          <div className="container mx-auto">
            <img className="mb-4 mx-auto" style={{width: '10%'}} src='/images/brand/systems-iso/intelligence-20.svg' alt='inteligence 2.0'/>
            <Spinner />
            <h6 className="mt-4 text-dark">Cargando</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
