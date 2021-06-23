/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Button, Input } from "../index";
import validator from "validator";
import Table from "rc-table";
import { useSelector, useDispatch } from "react-redux";

import { getGuestIdAction } from "../../redux2/actions/memberActions";

const TableGestId = () => {

  const dispatch = useDispatch();

  const data = useSelector((state) => state.member.GuestId);

  const [dataTable, setdataTable] = useState([]);
  const [error, handledError] = useState(false);

  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const getData = (data) => {
    if (data) {
      setdataTable(data);
    }
  };

  const columns = [
    {
      title: "Guest Id",
      dataIndex: "guID",
      key: "guestid",
      width: 100,
    },
    {
      title: "First Name",
      dataIndex: "guFirstName1",
      key: "firstname",
      width: 180,
    },
    {
      title: "Last Name",
      dataIndex: "guLastName1",
      key: "lastname",
      width: 180,
    },
    {
      title: "First Name 2",
      dataIndex: "guLastName2",
      key: "firstname2",
      width: 180,
    },
    {
      title: "Last Name 2",
      dataIndex: "guFirstName2",
      key: "lastname2",
      width: 180,
    },
    {
      title: "Program",
      dataIndex: "DescInvTypeGuest",
      key: "program",
      width: 150,
    },
    {
      title: "Invitation Type",
      dataIndex: "InvitationType",
      key: "invitationtype",
      width: 180,
    },
    {
      title: "Hotel",
      dataIndex: "guls",
      key: "hotel",
      width: 150,
    },
    {
      title: "Sales Room",
      dataIndex: "SaleRoomName",
      key: "salesroom",
      width: 180,
    },
    {
      title: "Folio Inhouse",
      dataIndex: "pgN",
      key: "folioinhouse",
      width: 180,
    },
    {
      title: "Folio Outhouse",
      dataIndex: "guOutInvitNum",
      key: "folioouthouse",
      width: 180,
    },
  ];

  const [dataInputs, setDataInputs] = useState({
    guestid: "",
    arrivalDateFrom: "",
    arrivalDateTo: "",
    showDateFrom: "",
    showDateTo: "",
    first: "",
    last: "",
    hotel: "",
    folioInHouse: "",
    folioOutHouse: "",
  });
  const handleInputChange = (e) => {
    setDataInputs({
      ...dataInputs,
      [e.target.name]: e.target.value,
    });
  };

  const {
    guestid,
    arrivalDateFrom,
    arrivalDateTo,
    showDateFrom,
    showDateTo,
    first,
    last,
    hotel,
    folioInHouse,
    folioOutHouse,
  } = dataInputs;

  const onClick = (_) => {
    if (
      validator.isEmpty(guestid) 
    ) {
      handledError(true);
      return;
    }
    handledError(false);
    getData(data);
    dispatch(getGuestIdAction(dataInputs));
  };

  useEffect(() => {
    getData(data);
  }, [data]);


  return (
    <>
      <button
        onClick={() => toggle()}
        type="button"
        className="input-group-addon btn btn-secondary"
        style={{
          borderBottomRightRadius: ".3rem",
          borderTopRightRadius: ".3rem",
        }}
      >
        <i className="fas fa-plus"></i>
      </button>
      <Modal isOpen={open} toggle={toggle} size="lg">
        <ModalBody className="p-0 ">
          <Card>
            <CardBody>
              <Row>
                <Col md={4}>
                  <Input
                    type="text"
                    label="Guest Id"
                    col={12}
                    name="guestid"
                    value={guestid}
                    onChange={handleInputChange}
                  />
                  {error ? (
                    validator.isEmpty(guestid) ? (
                      <p className="text-danger">Required!</p>
                    ) : null
                  ) : null}
                </Col>
                </Row>
                <Row>
                <Col md={3}>
                  <Input
                    type="date"
                    label="Arrival date from"
                    col={12}
                    name="arrivalDateFrom"
                    value={arrivalDateFrom}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col md={3}>
                  <Input
                    type="date"
                    label="To"
                    col={12}
                    name="arrivalDateTo"
                    value={arrivalDateTo}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col md={3}>
                  <Input
                    type="date"
                    label="Show date from"
                    col={12}
                    name="showDateFrom"
                    value={showDateFrom}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col md={3}>
                  <Input
                    type="date"
                    label="To"
                    col={12}
                    name="showDateTo"
                    value={showDateTo}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={6}>
                  <Input
                    type="text"
                    label="First name"
                    col={12}
                    name="first"
                    value={first}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    type="text"
                    label="Last name"
                    col={12}
                    name="last"
                    value={last}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={3}>
                  <Input
                    type="text"
                    label="Hotel"
                    col={12}
                    name="hotel"
                    value={hotel}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col md={3}>
                  <Input
                    type="text"
                    label="Folio in house"
                    col={12}
                    name="folioInHouse"
                    value={folioInHouse}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col md={3}>
                  <Input
                    type="text"
                    label="Folio out house"
                    col={12}
                    name="folioOutHouse"
                    value={folioOutHouse}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col md={3}>
                  <br />
                  <Button
                    col={12}
                    width="100%"
                    icon="fas fa-search"
                    typebootstrap="primary"
                    type="button"
                    onClick={onClick}
                  />
                </Col>
              </Row>
              
              <Row className="table">
              <Table
                rowKey={() => Math.random()}
                scroll={{ x: 1200 }}
                className="table mt-5 table"
                id="resume-table"
                columns={columns}
                data={dataTable}
              />   
            </Row>
            </CardBody>
              <Row md={5}>
                <Col lg='6'></Col>
                  <Button
                    icon="fas fa-times"
                    typebootstrap="secondary"
                    width='100%'
                    type="button"
                    onClick={()=>toggle()}
                  />                           
                  <Button
                    icon="fas fa-check"
                    typebootstrap="primary "
                    type="button"
                    width='100%'
                    onClick={()=>toggle()}
                  />
              </Row>
              <br/>
          </Card>
        </ModalBody>
      </Modal>
    </>
  );
};

export default TableGestId;
