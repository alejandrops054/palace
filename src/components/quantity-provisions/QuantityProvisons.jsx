import React from "react";
import {Checkbox,Button} from "../index";
import Table from "rc-table";

/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

const columns = [
  {
    dataIndex: "item",
    key: "item",
    width: "250",
  },
  {
    dataIndex: "currency",
    key: "currency",
    width: "250",
  },
  {
    dataIndex: "initial",
    key: "initial",
    width: "250",
  },
  {
    dataIndex: "DataDay",
    key: "DataDay",
    width: "250",
  }
];

const data = [
  { item: "Unitary cost", currency: "" ,initial:"$6,000.00"},
  { item: "Unitary waiver", currency: "" ,initial:"$0.00"},
  { item: "Provision total cost", currency: "",initial:"$6,00.00" },
  { item: "Provision stock", currency: <Checkbox name={'payCommission'}/>,initial:"" },
  { item: "Provision move in", currency: <Checkbox name={'payCommission'}/>,initial:""},
  { item: "Provision date", currency:"" ,initial:"3", DataDay:"11/26/23"},
  { item: "Extensin pack", currency: <Checkbox name={'payCommission'}/>,initial:""},
  { item: "Extensin Stock", currency: <Checkbox name={'payCommission'}/>,initial:""},
  { item: "Extensin no cost", currency: <Checkbox name={'payCommission'}/>,initial:""},
  { item: "Unitary extension cost", currency: "",initial:"$0.00"},
  { item: "Total extension cost", currency: "",initial:"$0.00"},
  { item: "Total", currency: "",initial:"$6,500.00"},
 ];

const QuantyProvisions = () => {
  return (
    <div>
      <div className="border-top border-secondary">
        <div className="container">
          <div>
            <Table columns={columns} data={data} className="table table-striped table-dark" />
          </div>
          <div className="d-flex justify-content-end">
                <Button  title='' col='1' icon='fas fa-times' typebootstrap='secondary'/>
                <Button  title='' col='1' icon='fas fa-check' typebootstrap='primary'/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default QuantyProvisions;