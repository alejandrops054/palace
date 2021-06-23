/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from "react";
import Table from "rc-table";
import { Input, Select, Button, Checkbox, Label } from "../index";

const columns = [
  {
    title: <i className="fas fa-caret-right"></i>,
    dataIndex: "number",
    key: "number",
    width: 200,
  },
  {
    title: "Order",
    dataIndex: "orde",
    key: "order",
    width: 200,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: 200,
  },
];

const data = [
  {
    number: "11",
    text: "ZAPATERIA 3 HERMANOS",
    status: <Select option="Alta " col={9} />,
  },
];

export default function MemberReservationRates() {
  return (
    <form className="mb-6">
      <div className="card">
        <br />
        <h3>Member Information</h3>
        <br />
        <div className="row">
          <div className="col-md-4">
            <Input
              type="text"
              label="Member Name"
              placeholder="WILLIAN TORRES FLOTA"
              col={12}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Input type="text" label="Company" placeholder="5" col={12} />
          </div>
          <div className="col-md-4">
            <Input
              type="text"
              label="Application "
              placeholder="6007770"
              col={12}
            />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <Table className="table" columns={columns} data={data} />
          </div>
          <div className="col-md-6">
            <div className="card">
              <br />
              <h3>Years Available</h3>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <Checkbox value={true} label={"2014"} col={12} />
                  <Checkbox value={true} label={"2015"} col={12} />
                  <Checkbox value={true} label={"2016"} col={12} />
                  <Checkbox value={true} label={"2017"} col={12} />
                  <Checkbox value={true} label={"2018"} col={12} />
                  <Checkbox value={true} label={"2019"} col={12} />
                  <Checkbox value={true} label={"2020"} col={12} />
                  <Checkbox value={true} label={"2021"} col={12} />
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3">
            <Label etiqueta="Reservation Rates" />
          </div>
          <div className="col-md-1">
            <Label etiqueta="13" />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="btn-group">
                <Button title="Log" col="2" typebootstrap="secondary" />
                <Button title="Save Changes" col="3" typebootstrap="secondary" />
                <Button title="Close" col="2" typebootstrap="secondary" />


              </div>
              
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
