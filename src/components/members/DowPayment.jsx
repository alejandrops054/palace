/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { Select } from "../index";

const DowPayment = () =>{
    return(
        <>
        <div className="container">
            <div className="card">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Dow Payment Other</h3>
                    </div>
                    <div className="col-md-6">
                        <h3>Cash out</h3>
                    </div>
                </div>
                   <div className="row">
                        <div className="col-md-6">
                            <Select
                                type="text"
                                label="City paid"
                                placeholder="$0.00"
                                col={12}
                            />
                        </div>
                        <div className="col-md-6">
                            <Select
                                type="text"
                                label="Cash options"
                                placeholder="$0.00"
                                col={12}
                            />
                        </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default DowPayment;