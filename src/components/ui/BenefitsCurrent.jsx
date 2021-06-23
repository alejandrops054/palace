import React from "react";

//title: string
//price: int
//totalprice: int

const BenefitsCurrent = ({ title="", price, totalprice }) => {
    return (
        <h3> {title} <span id="current-amount">${price}</span>/<span id="total-amount">${totalprice}</span></h3>
    );
};

export default BenefitsCurrent;