/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, {useState} from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardBody, Container,CardHeader,Card } from 'reactstrap';
import classnames from 'classnames';
import SearchRule from './SearchRule'
import TypeBenefit from './TypeBenefit'


const TypeBenefitRules = () => {
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    return (
        <Container>
            <Card>
                <CardHeader>
                    <CardTitle tag="h3">Type Benefit Rules</CardTitle>
                </CardHeader>
                <CardBody>
                <Nav tabs>
          <NavItem>
            <NavLink
              onClick={() => { toggle('1'); }}
            >
        Search Rule
        </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Create / Update Rules
            </NavLink>
          </NavItem>
    
     
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
                <SearchRule/>
          </TabPane>
          <TabPane tabId="2">
            <TypeBenefit/>
          </TabPane>
        </TabContent>
                </CardBody>
            </Card>
        </Container>
    )
}

export default TypeBenefitRules
