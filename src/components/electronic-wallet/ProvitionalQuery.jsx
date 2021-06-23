/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Table } from "antd";
import { Input, Select, Button, Hr } from "../index";

import "antd/dist/antd.css";

const ProvitionalQuery = () => {
  const columns = [
    {
      title: "Title ",
      dataIndex: "title",
      key: "title",
      width: 100,
    },
    {
      title: "Code ",
      dataIndex: "code",
      key: "code",
      width: 150,
    },
    {
      title: "Name ",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
  ];
  const data = [];

  const columns2 = [
    {
      title: "ID ",
      dataIndex: "id",
      key: "id",
      width: 100,
    },
    {
      title: "Application ",
      dataIndex: "application",
      key: "application",
      width: 150,
    },
    {
      title: "Name ",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
        title: "Status ",
        dataIndex: "status",
        key: "status",
        width: 150,
      },
  ];
   const data2 = [];

   const columns3 = [
    {
      title: "Folio ",
      dataIndex: "folio",
      key: "folio",
      width: 100,
    },
    {
      title: "Type ",
      dataIndex: "type",
      key: "type",
      width: 150,
    },
    {
      title: "Name ",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
        title: "Monthy ",
        dataIndex: "monthy",
        key: "monthy",
        width: 150,
      },
      {
        title: "Valid ",
        dataIndex: "valid",
        key: "valid",
        width: 150,
      },
  ];
   const data3 = [];
  return (
    <div className="card">
    <div className="row">
      <div className="col-md-3">
        <Input type="text" label="CO #" placeholder="5" col={12} />
        <Input type="text" label="NAME " placeholder = 'GURRT PRET'col={12} />
         </div>
      <div className="col-md-3">
      <Input type="text" label="APLIC# " placeholder = '55462537'col={12} />
        
      </div>
      <div className="col-md-3">
        <Input type="text" label="PAYMENTS MADE:" placeholder = '24' col={12} />
        <Input type="text" label="RG EARNED :" col={12} />
      </div>
      <div className="col-md-3">
        <Input type="text" label="OF :" placeholder = '10' col={12} />
        <Input type="text" label="RG USED" placeholder = '0.00' col={12} />
      </div>
    </div>
    <br/>
    <span className="ant-form-text">SELLERS</span>
    <br/>
    <div>
      <Table   columns={columns} data={data} />
    </div>
    <br/>
    <span className="ant-form-text">BENEFICIARES</span>
    <br/>
    <div>
      <Table   columns={columns2} data={data2} />
    </div>
    <br/>
    <span className="ant-form-text">PROVITIONS</span>
    <br/>
    <div>
      <Table   columns={columns3} data={data3} />
    </div>
  </div>
  );
};
export default ProvitionalQuery;
