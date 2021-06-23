/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { useState} from 'react'
import {Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card} from 'reactstrap'
import GrantAccess from '../../packages-access/GrantAccess';
import classnames from 'classnames';
import IncludePackages from '../../packages-access/IncludePackages';



const PackageAcces = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Grant Access
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Package Access
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
             <GrantAccess/>
        </TabPane>
        <TabPane tabId="2">
            <IncludePackages/>
        </TabPane>
      </TabContent>
    </div>
    )
}

export default PackageAcces;
