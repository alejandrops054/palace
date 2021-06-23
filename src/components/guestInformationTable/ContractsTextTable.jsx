/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from "react";
import Table from "rc-table";
import { Input, Select, Button } from "../index";

const columns = [
  {
    title: "Number",
    dataIndex: "number",
    key: "number",
    width: 200,
  },
  {
    title: "Text",
    dataIndex: "text",
    key: "text",
    width: 200,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 200,
  },
  
];

const data = [
  {
    number: '11',
    text: 'ZAPATERIA 3 HERMANOS',
    status: <Select option="Alta " col={9} />
   
  },
];

export default function ContratsTextTable() {
  return (
    <form className="mb-6">
      <div className="card">
        <br />
        <h3>Member Information</h3>
        <br />
        <div className="row">
                <div className="col-md-4">
                <Input type='text' label='Company' placeholder='5' col={12}/>
                </div>
                <div className="col-md-4">
                <Input type='text' label='Application' placeholder='60007770' col={12}/>
                </div>
                <div className="col-md-4">
                <Input type='text' label='Member Name' placeholder='WILLIAM TORRES FLOTA' col={12}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                <Input type='text' label='Office' placeholder='11' col={12}/>
                </div>
                <div className="col-md-4">
                <Input type='text' label='PLAYACAR PALACE' placeholder='' col={12}/>
                </div>
                <div className="col-md-4">
                <Input type='text' label='Project' placeholder='PALACE ELITE' col={12}/>
                </div>
            </div>
        <br />
        <br />
        <div>
          <Table
            className="table"
            columns={columns}
            data={data}
          />
        </div>
        <br/>
         <div className="row">
         <div className="col-md-3">
            <Button title="Log" col="5" typebootstrap="secondary" />
            </div>
            <div className="col-md-3">
            <Button title="Add" col="5" typebootstrap="secondary" />
            </div>
            <div className="col-md-3">
            <Button title="Properties" col="8" typebootstrap="secondary" />
            </div>
            <div className="col-md-3">
            <Button title="Close" col="6" typebootstrap="primary" />

            </div>
          </div>
        </div>
     </form>
  );
}
