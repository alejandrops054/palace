/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { Button, Input } from "../index";

   
const MembersPrevious = () =>{
    return(
        <>
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Members Previous</h3>
                        </div>
            
                        <div className="col-lg-6 d-flex justify-content-end tables">
                            <Button col='0.2' icon='fas fa-users' title='Members Related' typebootstrap='link' type='button' />
                            <Button col='0.2' icon='fas fa-user' title='Members previous' typebootstrap='link' type='button' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Input
                                type="text"
                                label="Equity (Palace Elite)"
                                placeholder="$0.00"
                                col={12}
                            />
                        </div>
                        <div className="col-md-6">
                            <Input
                                type="text"
                                label="Equity (Palace Premier)"
                                placeholder="$0.00"
                                col={12}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
}

export default MembersPrevious;