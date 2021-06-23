/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react"

function PaymentWay({ title, colOther = 2 }) {
    const data = [{ item: 'Credit Card', currency: 'US Dollar', initialDown: true, romissoryDown: false, monthlyPayment: true }
        , { item: 'Credit Card', currency: 'US Dollar', initialDown: true, romissoryDown: false, monthlyPayment: true }
        , { item: 'Cash', currency: 'US Dollar', initialDown: true, romissoryDown: false, monthlyPayment: true }
        , { item: 'Bank Transfer', currency: 'US Dollar', initialDown: true, romissoryDown: false, monthlyPayment: true }
        , { item: 'Web Payment', currency: 'US Dollar', initialDown: true, romissoryDown: false, monthlyPayment: true }
    ]
    return (
        <>
            <h4>{title}</h4>

            <div className="row table-line">
                <h6 className={`col-lg-3 text-left`}>Item</h6>
                <h6 className={`col-lg-3 text-left`}>Currency</h6>
                <h6 className={`col-lg-2 text-left`}>Initial down p.</h6>
                <h6 className={`col-lg-2 text-left`}>Promissory  down p.</h6>
                <h6 className={`col-lg-2 text-left`}>Monthly payment</h6>
            </div>

            {data.map(e =>
                <div className="row table-line" key={e.key}>
                    <div className={`col-lg-3 text-left`}>{e.item}</div>
                    <div className={`col-lg-3 text-left`}>{e.currency}</div>
                    <div className={`col-lg-2 text-left`}><div className="checkbox_input"><input type="checkbox" name="checkRow1" /><span className="checkmark" /></div></div>
                    <div className={`col-lg-2 text-left`}><div className="checkbox_input"><input type="checkbox" name="checkRow2" /><span className="checkmark" /></div></div>
                    <div className={`col-lg-2 text-left`}><div className="checkbox_input"><input type="checkbox" name="checkRow3" /><span className="checkmark" /></div></div>
                </div>
            )}
        </>
    );
};

export default PaymentWay;