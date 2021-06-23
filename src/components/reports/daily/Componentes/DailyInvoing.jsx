/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React, useState} from 'react';
import {Input, Select, Checkbox} from "../../../index";
import TextField from '@material-ui/core/TextField';

const FormDailyInvoing = () =>{

    return (
        <>
        <form action="">
            <div className="conatine">
                <div className="row">
                    <div className="col md-12">
                        <Select
                            label="Company"
                            option="5- PALACE ELITE, S.A DE C.V"
                            col={12}
                        />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <Input
                            type="text"
                            label="Application"
                            placeholder=""
                            col={12}
                        />
                        <Input
                            type="text"
                            label="Code/Sale Type"
                            placeholder=""
                            col={12}
                        />
                        <Input
                            type="text"
                            label="Sale Room"
                            placeholder=""
                            col={12}
                        />
                        <Select
                            label="Type Movement"
                            option="Sale"
                            col={12}
                        />
                        <Input
                            type="text"
                            label="Where"
                            placeholder=""
                            col={12}
                        />
                        <Input
                            type="text"
                            label="Discount"
                            placeholder=""
                            col={12}
                        />
                        <Input
                            type="text"
                            label="Exchange Rate"
                            placeholder=""
                            col={12}
                        />
                        <Select
                            label="Currency"
                            option="Process Satus"
                            col={12}
                        />
                    </div>
                    <div className="col-md-6">
                        <Input label="Date" type="date" placeholder="" col={12}/>
                        <Input
                            type="text"
                            label="Inv"
                            placeholder=""
                            col={12}
                        />
                        <Input
                            type="text"
                            label="Classif affiliation"
                            placeholder=""
                            col={12}
                        />
                         <Select
                            label="Document Type"
                            option="Invoice"
                            col={12}
                        />
                        <Input
                            type="text"
                            label="Amount"
                            placeholder=""
                            col={12}
                        />
                        <Select
                            label="Currency"
                            option="Dolar U.S.A"
                            col={12}
                        />
                        <Input
                            type="text"
                            label="VAT rate"
                            placeholder=""
                            col={12}
                        />
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}

export default FormDailyInvoing;