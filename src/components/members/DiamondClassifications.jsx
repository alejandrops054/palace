/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { Select} from "../index";

const DiamondClassifications = () =>{
    return(
        <>
        <div className="container">
            <div className="card">
                <h3>Diamond Classifications</h3>
                
                   <div className="row">
                        <div className="col-md-6">
                            <Select
                                type="text"
                                label="Classification"
                                placeholder=""
                                col={12}
                            />
                        </div>
                        <div className="col-md-6">
                            <Select
                                type="text"
                                label="Invesment Type"
                                placeholder=""
                                col={12}
                            />
                        </div>
                   </div>
                </div>
            </div>
        
        </>
    )
}

export default DiamondClassifications;