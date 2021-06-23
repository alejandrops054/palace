/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from "rc-table"
import {Button} from '../index'

/*Datos  de tablas*/ 
import { data1, columns1 } from './DataOneSelectPriceLevel'
import { data2, columns2 } from './DataTwoSelectPriceLevel'

const SelectPriceLevel = () => {
    return (
        <div >
            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                        <h3>Select Price Level</h3>
                    </div>
                </div>
                <div className="card-body table">
                    <Table id="resume-table" columns={columns1} data={data1} />
                        <hr></hr>
                    <Table id="resume-table" columns={columns2} data={data2} />
                </div>
                <div className="row d-flex justify-content-end">
                    <Button title='Ok' col={2}  typebootstrap='primary'  type='button'/>
                    <Button title='Cancel' col={2}  typebootstrap='secondary ' type='button'/>
                </div>
            </div>
        </div>
    )
}



export default SelectPriceLevel
