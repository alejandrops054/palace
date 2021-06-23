import React from "react";

//title: string
//price: int

const Payment = ({ label='', price, col  }) => {
    return (
        <div className={`col-lg-${ col } mb-3`} >
        <label>{label}</label>
            <h3>        
                ${price}.00
            </h3>
       </div>
 
    );
};

export default Payment;