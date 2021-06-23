/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from "react";
import Table from "rc-table";
import { Input, Select, Button, Checkbox } from "../index";
import {  FormGroup, Label, Input as input } from 'reactstrap';


const columns = [
  {
    title: <i className="fas fa-caret-right"></i>,
    dataIndex: "priority",
    key: "priority",
    width: 200,
    align: "center",
  },
  {
    title: "Moom Palace Cancún",
    dataIndex: "mom",
    key: "mom",
    width: 200,
  },
];

const data = [{}];

export default function IncludePackages() {
  return (
    <form className="mb-6">
      <div className="card">
        <br />
        <h3>Air Cupons</h3>
        <br />
        <div className="row">
          <div className="col-md-6">
            <Select label="Area" option="" col={6} />
          </div>
        </div>
        <br/>
          <div className="row">
            <div className="col-md-4">
              <Input type="number" label="Price" placeholder="0.00" col={12} />
            </div>
            <div className="col-md-4">
              <Input type="text" label="Cuality" placeholder="0" col={12} />
            </div>
          </div>
          <br/>
        <div className="row">
        <FormGroup check>
        <Label check>
          <input type="checkbox" />{' '}
          Golf @ 50%
        </Label>
      </FormGroup>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <br />
              <h3>Round of Golf</h3>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <Input type="text" label="Total" placeholder="30" col={12} />
                  <Input type="text" label="Actual" placeholder="30" col={12} />
                  <Input type="text" label="Previus" placeholder="0" col={12} />
                </div>
              </div>
              <br />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <br />
              <h3>Round Golf Access</h3>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <Input type="text" label="Total" placeholder="1" col={12} />
                  <Input type="text" label="Actual" placeholder="1" col={12} />
                  <Input type="text" label="Previus" placeholder="0" col={12} />
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <br />
        <h3>Access Golf Courses</h3>
        <br />
        <div>
          <Table
            className="table table-bordered"
            columns={columns}
            data={data}
          />
        </div>
        <br />
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-3">
            <Button title="Add" col="6" typebootstrap="primary" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <Select
              label="Rooms With Unlimited Golf - Free"
              option=""
              col={6}
            />
          </div>
          <div />
          <br />
          <div className="row">
            <div className="card">
              <br />
              <h3>Hotel Reservation and Move in</h3>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <div className="input-group-prepend">
                    <div className="input-group">
                      <div className="row">
                      <FormGroup check>
        <Label check>
          <input type="checkbox" />{' '}
           Week 52
        </Label>
      </FormGroup>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <Input type="text" label="Quality" placeholder="0" col={12} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-group-prepend">
                    <div className="input-group">
                      <div className="row">
                        <Input
                          type="text"
                          label="Hotel"
                          placeholder="BP"
                          col={12}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <Input
                    type="text"
                    label="Folio #"
                    placeholder="422121"
                    col={12}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-group-prepend">
                    <div className="input-group">
                      <div className="row">
                        <Input
                          type="text"
                          label="Room #"
                          placeholder="0"
                          col={12}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <Input
                    type="text"
                    label="Packages"
                    placeholder="0"
                    col={12}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-3">
                  <Button
                    title="Assign 750 RC"
                    col="8"
                    typebootstrap="primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
