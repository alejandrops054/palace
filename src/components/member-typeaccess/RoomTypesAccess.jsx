/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React, { useState, useEffect } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Row, Col, Form, Input, Label } from 'reactstrap';
import classnames from 'classnames';
import { Button, Hr } from '../index'
import MemberRoomTypeAccess from './MemberRoomTypeAccess'
import MemberRoomTypesAccessDetails from './MemberRoomTypesAccessDetails'
import MemberInformation from './MemberInformation'
import OtherRoomTypesAccess from './OtherRoomTypesAccess'
import MemberReservationRates from './MemberReservationRates';
import { useDispatch, useSelector } from 'react-redux'
import { useForm, useSelect } from "../../hooks";


const RoomTypesAccess = props => {
  const guestData = useSelector((state) => state.guestid.guestId);
  const memberbyapplicationData = useSelector((state) => state.memberbyapplication.memberApplication);
  const profileIdData = useSelector((state) => state.profileid.profileId);

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  const [profileIdTable, setProfileIdTable] = useState([])

  let setLabels = {}
  if (profileIdTable.length > 0) {

    if (memberbyapplicationData !== null) {
      setLabels.expiration = memberbyapplicationData[0].EXPIRATION
    }

    setLabels.name = profileIdTable[0].name
    setLabels.company = profileIdTable[0].company
    setLabels.application = profileIdTable[0].application
  }
  const { name, company, application, expiration } = setLabels
  const pintaData = (profileIdData) => {
    if (profileIdData) {
      setProfileIdTable(profileIdData);
    }
  };
  useEffect(() => {
    // console.log('memberbyapplicationData vista roomtypeaccess', memberbyapplicationData)
    // console.log('guestData vista roomtypeaccess', guestData)

    if (guestData) {
      pintaData(profileIdData)
    }
  }, [profileIdTable, guestData, memberbyapplicationData])
  //enums
  const scheme = [
    { recnum: 0, name: "Fixed", value: "Fixed" },
    { recnum: 1, name: "New BPG", value: "New BPG" },
    { recnum: 2, name: "Variable", value: "Variable" },
  ];
  const ratetype = [
    { recnum: 0, name: "High", value: "High" },
    { recnum: 1, name: "Low", value: "Low" },
    { recnum: 1, name: "Both", value: "Both" },
  ];
  /*Selects */
  const [schemeSelect, SelectScheme, resetSelectScheme] = useSelect(
    "Scheme",
    "",
    scheme
  );
  const [ratetypeSelect, SelectRatetype, resetSelectRatetype] = useSelect(
    "Rate type",
    "",
    ratetype
  );
  return (
    <>
      <Card>
        <h1>Member Room Type Access</h1>
        <Form>
          <Row>
            <Col lg='4'>
              <Label>Application</Label>
              <Input type='text' value={application} disabled />
            </Col>
            <Col lg='8'>
              <Label>Name</Label>
              <Input type='text' value={name} disabled />
            </Col>
          </Row>
          <Row>
            <Col lg='3'>
              <Label>Expiration</Label>
              <Input type='text' value={expiration} disabled />
            </Col>
            <Col lg='3'>
              <SelectScheme />
            </Col>
            <Col lg='3'>
              <SelectRatetype />
            </Col>
            <Col lg='3'>
              <br />
              <MemberReservationRates />
            </Col>
          </Row>
        </Form>
      </Card>
      <Hr />
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Member Room Types Access
              </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Member Room Types Access Details
              </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Member Information
              </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Other Room Types Access
              </NavLink>
        </NavItem>
      </Nav>
      <Card>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <MemberRoomTypeAccess />
          </TabPane>
          <TabPane tabId="2">
            <MemberRoomTypesAccessDetails />
          </TabPane>
          <TabPane tabId="3">
            <MemberInformation schemeSelect={schemeSelect} />
          </TabPane>
          <TabPane tabId="4">
            <OtherRoomTypesAccess />
          </TabPane>
        </TabContent>
        <br />

      </Card>
    </>
  )
}


export default RoomTypesAccess
