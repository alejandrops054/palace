/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React, { useState } from "react";
import Table from "rc-table";
import { Button, Checkbox } from "../index";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const columns = [
  {
    title: "Zp Code",
    dataIndex: "code",
    key: "code",
    width: 200,
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    width: 200,
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    width: 200,
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "conutry",
    width: 200,
  },
  {
    title: "Place Name",
    dataIndex: "placename",
    key: "placename",
    width: 200,
  },
];

const data = [
  {
    code: "JJMAAW08",
    city: "KINGSTON 6",
    state: "ST ANDREW",
    country: "JAMAICA",
    placename: "",
  },
];

const GeographiLocation = () => {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);
  return (
    <div>
      <Modal isOpen={open} toggle={toggle} size="lg">
        <form>
          <ModalHeader>Search</ModalHeader>
          <ModalBody className="p-0 ">
            <div className="card">
              <div className="card-header">
                <h3>Search</h3>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div className="input-group-prepend">
                    <div className="input-group">
                      <div className="row">
                        <Checkbox
                          value={true}
                          name={"payCommission"}
                          label={"Only Name"}
                          col={12}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="col-md-3">
                  <Button
                    title="Apply"
                    col="6"
                    typebootstrap="primary"
                    icon="fas fa-filter"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div className="input-group-prepend">
                    <div className="input-group">
                      <div className="row">
                        <Checkbox
                          value={true}
                          name={"payCommission"}
                          label={"Place Name"}
                          col={12}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-2">
                  <div className="input-group-prepend">
                    <div className="input-group">
                      <div className="row">
                        <Checkbox
                          value={true}
                          name={"Zp Code"}
                          label={"Zp Code"}
                          col={12}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="col-md-3">
                  <Button
                    title="Clear"
                    col="6"
                    typebootstrap="primary"
                    icon="fas fa-filter"
                  />
                </div>
              </div>
              <br />
              <div>
                <Table
                  className="table table-bordered"
                  columns={columns}
                  data={data}
                />
              </div>
              <br />
              <div>
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-sm-3">
                    <Button
                      title="Change City"
                      col="7"
                      typebootstrap="btn btn-primary"
                      icon="fas fa-sync"
                    />
                  </div>
                  <div className="col-sm-2">
                    <Button
                      title="Ok"
                      col="7"
                      typebootstrap="secondary"
                      icon="fas fa-check"
                    />
                  </div>
                  <div className="col-sm-2">
                    <Button
                      title="Cancel"
                      col="8"
                      typebootstrap="secondary"
                      icon="fas fa-times"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </form>
      </Modal>
    </div>
  );
};

export default GeographiLocation;
