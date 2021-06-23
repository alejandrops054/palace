/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Col, Row, Label, Input } from 'reactstrap';
import { Accordionn } from '../index'

import MemberInquiry from '../member-inquiry/MemberInquiry'
import TablePromotions from '../benefits/TablePromotions'
import VatRateCoOwner from '../vat-rate-coOwner/VatRateCoOwner'
import VatRateGuestInformation from "../guest-information/VatRateGuestInformation"
import PackageAcces from "../add-member/w4/PackageAcces";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <div className="container">
        <Nav tabs>
          <NavItem>
            <NavLink
              onClick={() => {
                toggle("1");
              }}
            >
              <i className="fas fa-id-badge mr-2"></i>
            Guest Information

          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => {
                toggle("2");
              }}
            >
              <i className="fas fa-user-cog mr-2"></i>
            Member Inquiry
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => {
                toggle("3");
              }}
            >
              <i className="fas fa-gift mr-2"></i>
            Benefits
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => {
                toggle("4");
              }}
            >
              <i className="fas fa-key mr-2"></i>
            Package Access
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => {
                toggle("5");
              }}
            >
              <i className="fas fa-dollar-sign mr-2"></i>
            VAT Rate
          </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            {/*  Guest Information*/}
            <h2 className=" text-center p-3 my-2"><i className="fas fa-id-badge mr-2"></i>Guest Information</h2>
            <VatRateGuestInformation />
          </TabPane>
          <TabPane tabId="2">
            {/* Member Inquiry */}
            <h2 className=" text-center p-3 my-2"><i className="fas fa-user-cog mr-2"></i> Member Inquiry</h2>
            <MemberInquiry />
          </TabPane>
          <TabPane tabId="3">
            {/* Benefits */}
            <h2 className=" text-center p-3 my-2"><i className="fas fa-gift mr-2"></i>Benefits</h2>
            <TablePromotions />
          </TabPane>
          <TabPane tabId="4">
            {/*  Package Access*/}
            <h2 className=" text-center p-3 my-2"><i className="fas fa-key mr-2"></i>Package Access</h2>
            <PackageAcces/>
          </TabPane>
          <TabPane tabId="5">
            {/*  VAT Rate */}
            <h2 className=" text-center p-3 my-2"><i className="fas fa-dollar-sign mr-2"></i>VAT Rate</h2>
            <Row>
              <h5>Member information</h5>
              <Col md={4}>
                <Label>Value-Added Tax(%)</Label>
                <Input type="number" />
              </Col>
              <Col md={4}>
                <Label>Last change</Label>
                <Input type="date" />
              </Col>
              <Col md={4}>
                <br />
                <button type="button" id="btn-filters" className="btn btn-link ml-2" alt="Filters" title="Filters" onclick="return openFilters()"><i className="fas fa-filter"></i></button>
              </Col>
            </Row>
            <Accordionn
              component={VatRateCoOwner}
              title='Owner'
            />
            <Accordionn
              component={VatRateCoOwner}
              title='CoOwner'
            />
            <Accordionn
              component={VatRateCoOwner}
              title='Beneficiary'
            />
            <div className="row col-12">{/*  */}
              <nav className='form-nav py-4 my-5'>
                <button
                  className="btn btn-secondary"
                ><i className="fas fa-undo-alt"></i> </button>
                <button
                  className="btn btn-secondary"
                ><i className="fas fa-times"></i> </button>
                <button
                  className="btn btn-primary"
                > <i className="fas fa-save"></i></button>
              </nav>
            </div>
          </TabPane>

        </TabContent>

      </div>

    </>
  );
};

export default Tabs;
