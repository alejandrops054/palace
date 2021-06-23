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

const PrintDailyNational = () =>{

    return(
        <>
            <div className="container">
                <div className="row">
                    <label htmlFor="" col={12}>National or foreingers</label>
                    <div className="col-md-4">
                        <Select
                            label="."
                            option="All"
                            col={12}
                        />
                        <Select
                            label="Report selection"
                            option="All"
                            col={12}
                        />
                        <Select
                            label="Only CNX date"
                            option="YES"
                            col={12}
                        />
                        <Select
                            label="Generate Accounting records"
                            option="YES"
                            col={12}
                        />
                    </div>
                    <div className="col-md-4">
                        <Select
                            label="Company"
                            option="0 Todos"
                            col={12}
                        />
                        <Select
                            label="Include web Transactions"
                            option="Yes"
                            col={12}
                        />
                        <br/>
                        <label htmlFor="" col={12}>Applications</label>
                        <Input
                            type="text"
                            label="From"
                            placeholder=""
                            col={12}
                        />
                        <Input
                            type="text"
                            label="To"
                            placeholder=""
                            col={12}
                        />
                        <Checkbox name="checkRow3" label="All" col={12}/>
                    </div>

                    <div className="col-md-4">
                        <Select
                            label="PorFolio"
                            option="All"
                            col={12}
                        />
                        <Select
                            label="Tax Rate"
                            option="Todos"
                            col={12}
                        />
                        <Select
                            label="Deposit sale"
                            option="Akk"
                            col={12}
                        />
                        <Select
                            label="Procesable"
                            option="All"
                            col={12}
                        />
                        <Checkbox name="checkRow3" label="Open rreport after generate" col={12}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrintDailyNational