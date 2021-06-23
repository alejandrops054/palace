/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react'

import {Select, Button, InfoMembers, TextArea} from '../index'


const AddNote = () => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                        <h3>Add Notes</h3>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <Select label="Category" option="Contratos"
                                col={12}
                                colIcon={0}/>
                        </div>
                        <div className="col-md-6">
                            <InfoMembers color='#fff' title="User " text="WTORRES"/>
                        </div>
                    </div>
                    <TextArea label='Notes' placeholder=''
                        col={12}/>
                </div>
                <div className="card-footer  d-flex justify-content-end">
                    <Button icon='fa fa-check' title='Ok' typebootstrap='primary' type='button'/>
                    <Button icon='fa fa-times' title='Cancel' typebootstrap='secondary' type='button'/>
                </div>
            </div>
        </div>
    )
}


export default AddNote
