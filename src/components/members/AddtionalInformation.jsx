/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { Button, Input, Select, Checkbox } from "../index";
import TextField from '@material-ui/core/TextField';
   
const AddtionalInformation = () =>{


    return(
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Additional information</h3>
                            </div>
                            
                            <div className="col-lg-6 d-flex justify-content-end tables">
                                <Button col='0.2' icon='fas fa-times' title='Cancel affiliation' typebootstrap='link' type='button' />
                                <Button col='0.2' icon='fas fa-times' title='Cancel log' typebootstrap='link' type='button' />
                                <Button col='0.2' icon='fas fa-times' title='Asm home assign' typebootstrap='link' type='button' />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Input label="Purchase" type="date" placeholder="" col={12}/>
                        </div>
                    <div className="col-md-6">
                        <Input label="Reinstate" type="date" placeholder="" col={12}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <Input label="Cancel" type="date" placeholder="" col={12}/>
                    </div>
                    <div className="col-md-6">
                        <Input label="Cancel code" type="date" placeholder="" col={12}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <Input label="Deposit" type="date" placeholder="" col={12}/>
                    </div>
                    <div className="col-md-6">
                        <Input label="Previous cancel" type="date" placeholder="" col={12}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <Select
                            label="Program goup"
                            placeholder="EXIT"
                        />
                    </div>
                    <div className="col-md-6">
                        <Input
                            type="text"
                            label="Exchange rate"
                            placeholder="$0.00"
                            col={12}
                        />
                    </div>
                    <div className="col-md-6">
                    <Select
                        label="Program goup"
                        placeholder="EXIT"
                    />
                    <Checkbox name="checkRow3" label="Pack sale" />
                    <Checkbox name="checkRow3" label="Pend welcome kit" />
                </div>
                <div className="col-md-6">
                    <Checkbox name="checkRow3" label="Receive Authorized" />
                    <Checkbox name="checkRow3" label="Scanned contract has been received" />
                    <Checkbox name="checkRow3" label="Cancel cluse" />
                    <Checkbox name="checkRow3" label="Sale by phone" />
                    <Checkbox name="checkRow3" label="Sed statement" />
                </div>
            </div>
        </div>
    </div>
    </>
        )
}

export default AddtionalInformation;