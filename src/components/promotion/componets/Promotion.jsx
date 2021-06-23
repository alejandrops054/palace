/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import {Input, Select, Checkbox} from "../../index";

export default function ValoresPromotion(){
    return (
        <>
        <from>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Input type="text" col={12} label="ID"/>
                        <Checkbox col={12} label="Closed Date"/>
                        <Checkbox col={12} label="Unlimited"/>
                        <Checkbox col={12} label="Trasfenble"/>
                    </div>
                    <div className="col-md-4">
                        <Select option="Alta" col={12} label="Status"/>
                    </div>
                    <div className="col-md-4">
                        <Select option="Promotion Type" col={12} label="Referrals Plus"/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <Input type="text" col={12} label="Spanish Description"/>
                        
                    </div>
                    <div className="col-md-4">
                        <Input type="text" col={12} label="Short Description MX"/>
                    </div>
                    <div className="col-md-4">  
                        <br/>
                        <Checkbox col={12} label="Retricted"/>
                       
                    </div>
                    <div className="col-md-4">
                        <Input type="text" col={12} label="English Description"/>
                        <Input type="text" col={12} label="Benefeit Type"/>
                    </div>
                    <div className="col-md-4">
                        <Input type="text" col={12} label="Short Description US"/>
                        <Input label="Date from" type="date" placeholder="" col={12}/>
                    </div>
                    <div className="col-md-4">
                        <Select option="0" type="text" col={12} label="Max Use"/><br/>
                        <Input label="Date To" type="date" placeholder="" col={12}/>
                    </div>
                    <div className="col-md-2">
                        <Select option="0" type="text" col={12} label="Order"/>
                    </div>
                    <div className="col-md-2">
                        <Select option="0" type="text" col={12} label="Validity"/>
                    </div>
                    <div className="col-md-2">
                        <Select option="0" type="text" col={12} label="Year from"/>
                    </div>
                    <div className="col-md-2">
                        <Select option="0" type="text" col={12} label="Year To"/>
                    </div>
                    <div className="col-md-2">
                        <Select option="0" type="text" col={12} label="Couples"/>
                    </div>
                    <div className="col-md-2">
                        <Select option="0" type="text" col={12} label="Weeks"/>
                    </div>
                </div>
                <br/>
            </div>
        </from>
        </>
    )
}