/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from 'rc-table';
import {data, columns} from './DataAsm';

import {Input, Button} from '../index'


const Asm = () => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>ASM</h3>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                        <Input type="text" label="Search" col={12} />
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <Table scroll={{x:'auto'}} className="table" id="resume-table"
                        columns={columns}
                        data={data}/>
                </div>
                <div className="card-footer  d-flex justify-content-end">
                <Button icon='fa fa-check'  title='Select' typebootstrap='primary' type='button'/>
                <Button icon='fa fa-times'  title='Cancel' typebootstrap='secondary' type='button'/>
                        </div>
            </div>
        </div>
    )
}



export default Asm
