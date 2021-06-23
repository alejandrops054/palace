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

const PrintDailyLocation = () =>{

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Select
                            label="Location code"
                            option="Process Satus"
                            col={12}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor=""col={12}>Enter Date</label>
                        <Input label="Date From" type="date" placeholder="" col={12}/>    
                        <Input label="Date to" type="date" placeholder="" col={12}/>    
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="" col={12}>Sale Date</label>
                        <Input label="Date" type="date" placeholder="" col={12}/>    
                        <Input label="Date" type="date" placeholder="" col={12}/>    
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrintDailyLocation
