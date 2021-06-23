/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react"
import {Select, Search, Checkbox, QuantyProvisions} from '../../components/index'

const NewProvision = () =>{

    return(
    <>
    <div className="row">
        <div className="card form-group">
            <h3>New Provision</h3>

            <div className="row">
                <div className="col-lg-4">
                    <Search label="Seach Provision"/>
                </div>
                <div className="col-lg-4">
                    <Select label="Provision ID"/>
                </div>
                <div className="col-lg-4">
                    <Select label="Quatity"/>
                    <Checkbox name={'Replacement'} label={'Replacement cost by const'}/>
                </div>
            </div>
        </div>
        <br/>
        <div className="card form-group">
            <h3>Unlimited golf</h3>
            <div className="row">
                <div className="col-lg-4">
                    <Select label="Payment admout"/>
                    <Checkbox name={'Pay'} label={'Pay'}/>
                </div>
                <div className="col-lg-4">
                    <Select label="Quatity"/>
                    <Checkbox name={'ReplacementCost'} label={'Replacement cost by const'}/>
                </div>
            </div>
        </div>
        <br/>
        <div className="card form-group">
            <h3>Unlimited golf</h3>
            <div className="row">
                <div className="col-lg-4">
                    <Select label="Payment admout"/>
                    <Checkbox name={'Pay'} label={'Pay'}/>
                </div>
                <div className="col-lg-4">
                    <Select label="Quatity"/>
                    <Checkbox name={'ReplacementCost'} label={'Replacement cost by const'}/>
                </div>
            </div>
        </div>
        <br/>
            <div className="container">
                <h3>Quantity provisions</h3>
                    <div className="row">
                        <QuantyProvisions/>
                    </div>
            </div>
        <br/>
    </div>
    </>
    )
}

export default NewProvision;