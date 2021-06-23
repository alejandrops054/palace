/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react'

import { Card, Select, Checkbox, Input, TextArea, Button} from '../index'


const AddNote = () =>{

    return(
        <div className='card form-group'>
            <div className='card-body'>
                <h1>New note on Jhon Doe</h1>
                <form>
                    <div className='row'>
                        <div className="col-md-6">
                            <Select
                                label='Code'
                            />  
                        </div>
                        <div className='col-md-6'>
                            <Select
                                className='form-control'
                                label='Priority'
                            />
                        </div>
                        <div className='row' style={{width:'100%'}}>
                            <div className='col-md-6'>
                                <label style={{padding:'0 0 0 1%'}}>Authorization leve</label>
                                <Checkbox
                                    name='low'
                                    value=''
                                    label='Low'
                                />
                                <Checkbox
                                    name='normal'
                                    value=''
                                    label='Normal'
                                />
                                <Checkbox
                                    name='interval'
                                    value=''
                                    label='Interval-reinscription'
                                />
                                <Checkbox
                                    name='high'
                                    value=''
                                    label='High'
                                />
                            </div>
                            <div className='col'>
                                <Input
                                    label='Entry date'
                                    placeholder='MM/DD/YYYY'
                                    type='text'
                                />
                            </div>
                        </div>
                        <div className='row' style={{width:'100%', margin:'0 auto', padding:'0 1% 0 1%'}}>
                            <div className='col'>
                                <TextArea
                                    label='Note'
                                    value='text'
                                    placeholder='Add note'
                                />
                            </div>
                        </div>
                        <div className='row' style={{padding:'2% 1% 0 1%'}}>
                            <div className='col'>
                                <Checkbox
                                    label='Is this guest special?'
                                    name='guest'
                                    value=''
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <div className='row'>
                    <div className='col-10'>
                        <button id="add-note" className="btn btn-secondary btn-lg d-block ml-auto" alt="" title=""><i className="fas fa-times mr-1"></i></button> 
                    </div>
                    <div className='col-2'>
                        <button id="add-note" className="btn btn-default btn-primary btn-lg d-block m-auto" alt="" title=""><i className="fas fa-check mr-1"></i></button>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default AddNote