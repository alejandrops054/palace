/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { Button, Input } from "../index";

const MembersLikend = () =>{
    return(
        <>
        <div className="container">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Trade in</h3>
                            </div>
                            
                            <div className="col-lg-6 d-flex justify-content-end tables">
                                <Button col='0.2' icon='fas fa-users' title='Members Linkend' typebootstrap='link' type='button' />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <Input
                                type="text"
                                label="Equity Total"
                                placeholder="$0.00"
                                col={12}
                            />
                        </div>
                        <div className="col-md-2">
                            <Button className="btn btn-primary" title="Edit" style={{width:'20%'}}/>
                        </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default MembersLikend;