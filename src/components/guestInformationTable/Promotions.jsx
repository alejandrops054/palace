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
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: 200,
  },
];

const data = [{}];

export default function Promotions() {
  return (
    <form className="mb-6">
      <div className="card">
        <div className="row">
          <div className="col-md-12">
            <Table className="table" columns={columns} data={data} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <Button
              title="Add Promotions"
              col="4"
              typebootstrap="secondary"
              type="button"
            />
          </div>
        </div>
        <div className="row">
          <div className="card">
            <br />
            <h3>Virtual Reservation</h3>
            <br />
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-6">
                <Button
                  title="Create Virtual Reservation"
                  col="6"
                  typebootstrap="secondary"
                  type="button"
                />
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="card">
            <br />
            <h3>Diamond Certificated </h3>
            <br />
            <div className="row">
              <div className="col-lg-3">
              <Checkbox value={true} label={"Traveling with the Owner"} col={8} />

              </div>
              <div className="col-lg-6">
              <Select label="Bracelets" option="" col={4} colIcon={0} />
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="card">
            <br />
            <h3>Residence Certificated </h3>
            <br />
            <div className="row">
              <div className="col-lg-3">
              <Checkbox value={true} label={"Traveling with the Owner"} col={8} />

              </div>
              <div className="col-lg-6">
              <Select label="Bracelets" option="" col={4} colIcon={0} />
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="card">
            <br />
            <h3>REFERRAL PROGRAM </h3>
            <br />
            <div className="row">
              <div className="col-lg-3">
              <Checkbox value={true} label={"BONUS ULG"} col={12} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
