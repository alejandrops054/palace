/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from 'rc-table'
import {Button as ReactButton} from 'reactstrap'
import {Input, Select, Button, InfoMembers} from '../index'

const BitacoraSmart = () => {
    const columns = [
        { title: 'Company', dataIndex: 'Company', key: '1', width: 100},
        { title: 'Application', dataIndex: 'Application', key: '2', width: 100 },
        { title: 'User Name', dataIndex: 'User_Name', key: '3', width: 100 },
        { title: 'Usr Pruser', dataIndex: 'User_Pruser', key: '4', width: 100 },
        { title: 'Terminal', dataIndex: 'Terminal', key: '5', width: 100 },
        { title: 'Fecha', dataIndex: 'Fecha', key: '6', width: 100 },
        { title: 'Hora', dataIndex: 'Hora', key: '7', width: 100 },
        { title: 'Programa', dataIndex: 'Programa', key: '8', width: 100 },
        { title: 'Origen', dataIndex: 'Origen', key: '8', width: 100 },
      ]
      const data = [
          {Company:'3', Application: '',User_Name:'',User_Pruser:'',Terminal:'', Fecha:'', Hora:'', Programa:'', Origen:'' },
          {Company:'3', Application: '',User_Name:'',User_Pruser:'',Terminal:'', Fecha:'', Hora:'', Programa:'', Origen:'' },
          {Company:'3', Application: '',User_Name:'',User_Pruser:'',Terminal:'', Fecha:'', Hora:'', Programa:'', Origen:'' },
          {Company:'3', Application: '',User_Name:'',User_Pruser:'',Terminal:'', Fecha:'', Hora:'', Programa:'', Origen:'' },

      ]
return (<div className="container">
    <div className="card">
        <div className="card-header">
            <div className="card-title">
                <h3>Bitacora Smart</h3>
            </div>
        </div>
        <div className="card-body">
            <div className=" d-flex justify-content-end tables">
                <Button title='Apply Filter' icon="fas fa-filter" col='1.5' typebootstrap='link main' type='button'/>
                <Button title='Clean Filter' icon="fas fa-filter" col='1.5' typebootstrap='link' type='button'/>
            </div>
            <div className="row ">
                <div className="col-lg-4">
                    <Select label="Company" option="0 - All"
                        col={12}
                        colIcon={0}/>

                    <Input type="text" label="Application"
                        col={12}/>
                    <Input type="text" label="User Name"
                        col={12}/>
                </div>
                <div className="col-lg-4">
                    <Input type="date" label="Date From"
                        col={12}/>
                </div>
                <div className="col-lg-4">
                    <Input type="date" label="Date To"
                        col={12}/>
                </div>
            </div>
            <Table scroll={
                    {x: 'auto'}
                }
                className='table'
                id="resume-table"
                columns={columns}
                data={data}/>
        </div>
        <div className="card-footer">
        <div className="row">
        <div className="col-lg-9 justify-content-start">
            <InfoMembers title="Records : " text="63" />
        </div>
        <div className="col-lg-3 justify-content-end">
                      
                      <ReactButton color="primary"><i className="fas fa-sync-alt"></i>Refresh</ReactButton> 
                      <ReactButton color="primary"><i className="fas fa-times"></i>Close</ReactButton> 
                    
                     
                      
                  </div>
            </div>    
        
        </div>
    </div>

</div>

)}


export default BitacoraSmart

