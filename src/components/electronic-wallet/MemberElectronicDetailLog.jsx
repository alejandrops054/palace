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

const MemberElectronicDetailLog = () => {
  const columns = [
    {
      title: "User ",
      dataIndex: "user",
      key: "user",
      width: 100,
    },

    {
      title: "Date/Time",
      dataIndex: "date",
      key: "date",
      width: 100,
      render: () => (
        <Button
          col="1.5"
          icon="fas fa-book"
          typebootstrap="link"
          type="button"
        />
      ),
    },
    {
      title: "Module ",
      dataIndex: "module",
      key: "module",
      width: 100,
    },
    {
      title: "Action ",
      dataIndex: "action",
      key: "action",
      width: 100,
    },
    {
      title: "Original ",
      dataIndex: "original",
      key: "original",
      width: 150,
    },
    {
      title: "Changes ",
      dataIndex: "changes",
      key: "changes",
      width: 150,
    },
  ];
  const data = [];
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          <Input type="date" label="Date From " placeholder="" col={12} />
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <Input type="text" label="Field Name" placeholder="" col={12} />
        </div>
        <div className="col-md-3">
          <Button
            title="Apply Filter"
            col="12"
            icon="fas fa-filter"
            typebootstrap="link main"
            type="button"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <Input type="date" label="Date To " placeholder="" col={12} />
        </div>
        <div className="col-md-3">
          <Input type="text" label="User To" placeholder="" col={12} />
        </div>
        <div className="col-md-3">
          <Input type="text" label="Value" placeholder="" col={12} />
        </div>
        <div className="col-md-3">
          <Button
            title="Clear Filter"
            col="12"
            icon="fas fa-filter"
            typebootstrap="link main"
            type="button"
          />
        </div>
      </div>
      <div className="row">
        <Table
          columns={columns}
          dataSource={data}
        />
      </div>
      <br/>
      <div className="row">
      <Button title="Close" col={3} typebootstrap="secondary" type="button" />
      </div>
    </div>
  );
};
export default MemberElectronicDetailLog;
