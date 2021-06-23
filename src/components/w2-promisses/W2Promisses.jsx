import React from "react";
import FormFinancingPromises from './components/FormFinancingPromises'
import FinancingPromisesInfo from './components/FinancingPromisesInfo'

const tamaño = {
  width: "700px",
  margin: "0 auto",
};

const W2Promisses = () => {
  return (
    <div className="card" style={tamaño}>
      <div className="card-body">
        <h2 className="card-title">Financing promisses</h2>
        <div className="row align-items-center">
          <FinancingPromisesInfo/>
        </div>
          <FormFinancingPromises/>
      </div>
    </div>
  );
};

export default W2Promisses;
