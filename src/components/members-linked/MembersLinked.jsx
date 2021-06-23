/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react'
import Table from 'rc-table'
import {
    Input,
    Select,
    Button,
    InfoMembers
} from '../index'

import {data, columns} from './DataMembersLinked'


const MembersLinked = () => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                        <h3>Members Linked</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <InfoMembers color='#fff' title="Company" text="9"/>
                            <InfoMembers color='#fff' title="Application " text="70007336"/>
                            <InfoMembers color='#fff' title="Name " text="Dionne Casona Foster"/>
                        </div>
                        <div className="col-lg-4 ">
                            <Input type="text" label="Virtual program" col={12}/>
                            <InfoMembers color='#fff' title="Virtual amount " text="$4,100 00"/>
                        </div>
                        <div className="col-lg-4">
                            <Select label="Virtual price level" option="Option" col={12}/>
                            <Button title='Search' col='9' icon='fas fa-search' typebootstrap='primary' type='button'/>
                        </div>
                    </div>
                </div>

                <div className="card-body table">
                    <Table id="resume-table"
                        columns={columns}
                        data={data}/>
                </div>
            </div>

        </div>
    )
}


export default MembersLinked

