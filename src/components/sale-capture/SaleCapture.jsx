/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import React from "react";

import FinancingDetail from './modules/FinancingDetail';
import SaleDetail from './modules/SaleDetail';
import StayDetail from './modules/StayDetail';


const SaleCapture = () => {
  return (
    <>
      <div className="m-1 mb-4">
        <div className="card">
          <div className="card-body">
            <SaleDetail />
          </div>
        </div>
      </div>
      <div className="m-1 mb-4">
        <div className="card">
          <div className="card-body">
            <FinancingDetail />
          </div>
        </div>
      </div>
      <div className="m-1 mb-4">
        <div className="card">
          <div className="card-body">
            <StayDetail />
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleCapture;
