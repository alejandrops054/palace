/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from "react";
import Table from "rc-table";
import { Input, Button } from "../index";

const columns = [
  {
    title: "Guest id",
    dataIndex: "Guest",
    key: "Guest",
    width: 200,
  },
  {
    title: "First Name",
    dataIndex: "name",
    key: "name",
    width: 200,
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "lastname",
    width: 200,
  },
  {
    title: "First Name 2",
    dataIndex: "name2",
    key: "name2",
    width: 200,
  },
  {
    title: "Last Name 2",
    dataIndex: "lastname2",
    key: "lastname2",
    width: 200,
  },
  {
    title: "Program",
    dataIndex: "program",
    key: "program",
    width: 200,
  },
  {
    title: "Invitation Type",
    dataIndex: "invitation",
    key: "inivitation",
    width: 200,
  },
  {
    title: "Hotel",
    dataIndex: "hotel",
    key: "hotel",
    width: 200,
  },
  {
    title: "Sales Room",
    dataIndex: "sales",
    key: "sales",
    width: 200,
  },
  {
    title: "Folio Inhouse",
    dataIndex: "folioi",
    key: "folioi",
    width: 200,
  },
  {
    title: "Folio Outhouse",
    dataIndex: "folioo",
    key: "folioo",
    width: 200,
  },
];

const data = [
  { name: "Jack", age: 28, address: "some where", key: "1" },
  { name: "Rose", age: 36, address: "some where", key: "2" },
];


export default function GuestInformationTable() {
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-4">
          <Input type="text" label="Guest Id" placeholder="9204103" col={12} name='guestID'  />
          <Input type="text" label="First Name " col={12} />
          <Input type="text" label="Last Name" col={12} />
        </div>
        <div className="col-md-4">
          <Input type="text" label="Hotel" col={12} />
          <Input type="text" label="Folio Inhouse" col={12} />
          <Input type="text" label="Folio Outhouse" col={12} />
        </div>
        <div className="col-md-2">
          <Input type="Date" label="Arrival Date From :" col={12} />
          <Input type="Date" label="Show Date From :" col={12} />
        </div>
        <div className="col-md-2">
          <Input type="Date" label="To :" col={12} />
          <Input type="Date" label="To :" col={12} />
          <Button title="Search" col="12" typebootstrap="secondary" />
        </div>
      </div>
      <br/>
      <div>
        <Table   columns={columns} data={data} />
      </div>
    </div>
  );
}

 
