import React from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import Table from "rc-table";
import DiscountProductModal from "./DiscountProductModal";

const columns = [
  {
    title: <Input type="checkbox" />,
    dataIndex: "check",
    key: "1",
    //    render: () => <Checkbox  value label col/>,

    align: "center",
    render: () => <Input type="checkbox" />,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    width: 150,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 150,
  },
  {
    title: "Folio",
    dataIndex: "folio",
    key: "folio",
    width: 150,
  },
  {
    title: "Cost",
    dataIndex: "cost",
    key: "cost",
    width: 150,
  },
  {
    title: "Sale date",
    dataIndex: "saleDate",
    key: "saleDate",
    width: 150,
  },
  {
    title: "Expiracion date",
    dataIndex: "expDate",
    key: "expDate",
    width: 150,
  },
  {
    title: <i className="fas fa-ellipsis-v"></i>,
    dataIndex: "but",
    key: "but",
    width: 50,
    render: () => <i className="fas fa-ellipsis-v"></i>,
  },
];

const data = [
  {
    type: "1",
    name: "Jon Doe",
    folio: "6712",
    cost: "$1200",
    saleDate: "1322136123",
    expirationDate: "23423423423324",
  },
  {
    type: "1",
    name: "Jon Doe",
    folio: "6712",
    cost: "$1200",
    saleDate: "1322136123",
    expirationDate: "23423423423324",
  },
  {
    type: "1",
    name: "Jon Doe",
    folio: "6712",
    cost: "$1200",
    saleDate: "1322136123",
    expirationDate: "23423423423324",
  },
];

function DiscountProductsTable() {
  return (
    <>
      <div className="m-1 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Certificates</h5>
            <Row>
              <Col lg="12" className=" d-flex justify-content-end tables">
                <i  className="fas fa-sign-in-alt mr-1 mt-2"></i>

                <Col lg={{ size: 1 }} md={{size:1}}>
                  <DiscountProductModal />
                </Col>
              </Col>
            </Row>
            <Row>
              <Table
                className="table"
                id="resume-table"
                columns={columns}
                data={data}
              />
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscountProductsTable;
