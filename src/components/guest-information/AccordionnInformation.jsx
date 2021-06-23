/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React, { useState } from "react";
import Contact from "./Contact";
import Office from "./Office";
import Etiqueta from "../ui/Label";
import { Nav, NavItem, NavLink } from "reactstrap";

const AccordionnInformation = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
      <h4>
        <Etiqueta etiqueta="Jane Doe" />
      </h4>
      <h4>
        <Etiqueta etiqueta="Origin Information" />
      </h4>
      <br />
      <Office />
      <br />
      <div className="border-top border-secondary">
        <br />
        <Nav tabs>
          <NavItem>
            <NavLink
              // className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggle("1");
              }}
            >
              <h4>Guest Information</h4>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              // className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggle("2");
              }}
            >
              <h4>Contact Information</h4>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <br />
      <div className="border-top border-secondary">
        <br />
        <Contact />
      </div>
    </div>
  );
};
export default AccordionnInformation;
