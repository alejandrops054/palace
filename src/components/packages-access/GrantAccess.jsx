/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {Select, TextArea, ToggleCheck, Button, Input} from '../index'
import ModalPrueba from '../member-typeaccess/ModalPrueba'

const handleClick = () => {
    history.push('/RoomTypesAccess');
  }

const GrantAccess = () => {
    return (
        <form className="card">
            <h3>Grant Access</h3>
            <div className="input-group input-group-sm mb-3">
                <Select  label='Access hotel' option='SS1' col={12} colIcon={12}/>
            </div>
            <div className="row m-3">
                <div className="col-md-2">
                    <ToggleCheck label='Family category' numToggle={1}/>   
                </div>
                <div className="col-md-2">
                    <ToggleCheck label='Governor' numToggle={2}/>
                </div> 
                <div className="col-md-5">
                    <ToggleCheck label='Lock Off' numToggle={3}/>
                </div>
            </div>
            <div className="row mt-3">
                <TextArea className='p-5' label='Description' placeholder='Standar suite - PR, TG, LBC, JM, LBCB and PC' col={12} />
                <TextArea className='p-2' label='Standar suite' placeholder=' ' col='12'/>
                <TextArea className='p-2' label='Presidential suite' placeholder=' ' col='12' />
            </div>
            <div className="col-6 input-group input-group-sm mb-3">
                {/* <Select col={9} label='Access' option='Hotel'/> */}
                {/* <Input
                    icon="fas fa-bed"
                    type="select"
                    label="Access"
                    placeholder=""
                    col={9}
                    name="profileid"
                  /> */}
                <ModalPrueba/>
            </div>
        </form>
    )
}

export default GrantAccess;