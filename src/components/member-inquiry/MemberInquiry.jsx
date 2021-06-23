/*Sistema Intelligence 2.0
  Módulo Contratos
  Versión 1.0
  Author: IntregraIT Contratos
  Comentarios: xxxxx
*/
import React, { useState } from "react";
//Components
import Promises from './Promises'
import Account from './AccountDetails'
import Conciliations from './Conciliations'
import { Label, Tr } from "..";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

const MemberInquiry = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  return (
    <div>
      <div div id="MemberInquiry" className="MemberInquiry" >
        {/* <Label etiqueta={"Member Inquiry"} bold={"bold"} color={"white"} tamanio={25} aling={"center"} col={12}/> */}
        <div className={"row"}>
          <Label etiqueta={"Company:"} bold={"bold"} color={"grey"} tamanio={20} aling={"center"} col={2} />
          <Label etiqueta={"Scheme:"} bold={"bold"} color={"grey"} tamanio={20} aling={"center"} col={2} />
          <Label etiqueta={"Application:"} bold={"bold"} color={"grey"} tamanio={20} aling={"center"} col={2} />
          <Label etiqueta={"Sale Level:"} bold={"bold"} color={"grey"} tamanio={20} aling={"center"} col={2} />
        </div>
        <div className={"row"}>
          <Label etiqueta={"7"} bold={"bold"} color={"#E87E0E"} tamanio={20} aling={"center"} col={2} />
          <Label etiqueta={"New BPG"} bold={"bold"} color={"#E87E0E"} tamanio={20} aling={"center"} col={2} />
          <Label etiqueta={"12312312"} bold={"bold"} color={"#E87E0E"} tamanio={20} aling={"center"} col={2} />
          <Label etiqueta={"Exit"} bold={"bold"} color={"#E87E0E"} tamanio={20} aling={"center"} col={2} />
        </div>
        <Tr />
        <Nav tabs>
            <NavItem>
              <NavLink
                // className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                Account detail
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                // className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                Promises
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                // className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('3'); }}
              >
                Conciliations
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Account />
            </TabPane>
            <TabPane tabId="2">
              <Promises/>
            </TabPane>
            <TabPane tabId="3">
              <Conciliations/>
            </TabPane>
          </TabContent>
      </div>
    </div>
  )
}
export default MemberInquiry
