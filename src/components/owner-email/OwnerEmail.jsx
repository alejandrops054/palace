/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react'
import Table from 'rc-table';
import {data, columns} from './DataOwnerEmail';

import {Button} from '../index'


const OwnerEmail = () => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Owner emails</h3>
                            <p>List of emails from Owner</p>
                        </div>
                        <div className="col-md-12 d-flex justify-content-end tables">
                            <Button title='Set Principal Owner' col='1.5' icon='fas fa-paper-plane' typebootstrap='link main' type='button'/>
                            <Button title='Set Principal' col='1.5' icon='fas fa-paper-plane' typebootstrap='link' type='button'/>
                            <Button title='Delete' col='1.5' icon='fas fa-trash' typebootstrap='link' type='button'/>
                            <Button title='Add' col='1.5' icon='fas fa-plus' typebootstrap='link' type='button'/>
                            <Button title='Close' col='1.5' icon='fas fa-times' typebootstrap='link ' type='button'/>
                            <Button title='Log' col='1.5' icon='fas fa-clipboard-list' typebootstrap='link ' type='button'/>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <Table className="table" id="resume-table"
                        columns={columns}
                        data={data}/>
                </div>
            </div>

        </div>
    )
}


export default OwnerEmail

