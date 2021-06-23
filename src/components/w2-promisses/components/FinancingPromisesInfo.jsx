import React from "react";

const item1 =[
  {label:'Down payment remaining'},
  {h4: '$8,250.00'}
]

const item2=[
  {label:'Principal payments'},
  {h4: '$38,500.00'}
]

const FinancingPromesisInfo = () => {
  return (
    <>
      <div className="col">
        <label>{item1.label}</label>
        <h4>{item1.h4}</h4>
      </div>
      <div className="col">
        <label>{item2.label}</label>
        <h4>{item2.h4}</h4>
      </div>
    </>
  );
};

export default FinancingPromesisInfo;
