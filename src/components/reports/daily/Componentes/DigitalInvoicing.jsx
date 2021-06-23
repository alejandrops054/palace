/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React, useState} from 'react';
import {Input, Select, Checkbox} from "../../../index";
import TextField from '@material-ui/core/TextField';
import ModalSelectBacnkAccount from '../ModalSelectBacnkAccount'

const DigitalInvoicing = () =>{

    return(
        <>
            <div className="container">
                <div className="row">
                    <h5>Digital Invoicing</h5>
                    <div className="col-md-6">
                        <Input
                            type="text"
                            label="Provider"
                            placeholder=""
                            col={12}
                        />
                        <Input
                            type="text"
                            label="Serie"
                            placeholder=""
                            col={12}
                        />
                        <br/>
                        <Input label="FD Date" type="date" placeholder="" col={12}/>    
                        <Input
                            type="text"
                            label="FD UID Parent"
                            placeholder=""
                            col={12}
                        />
                        <Checkbox name="checkRow3" label="Facturacion por cambio de importe" />
                        <Checkbox name="checkRow3" label="Facturacion por susitucion" />
                    </div>
                    <div className="col-md-6">
                        <Input
                            type="text"
                            label="FD Matriz"
                            placeholder=""
                            col={12}
                        />
                        <Input
                            type="text"
                            label="Folio"
                            placeholder=""
                            col={12}
                        />
                        <Input
                            type="text"
                            label="UID"
                            placeholder=""
                            col={12}
                        />
                        <Input
                            type="text"
                            label="Amount"
                            placeholder=""
                            col={12}
                        />
                        <Checkbox name="checkRow3" label="Facturacion por portfolio" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DigitalInvoicing
