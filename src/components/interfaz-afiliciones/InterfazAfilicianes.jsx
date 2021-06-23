/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, {useState} from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink,  } from 'reactstrap';
import classnames from 'classnames';

import EnviarAfiliacion from './EnviarAfiliacion'
import ConsultarAfiliacion from './ConsultarAfiliacion'
import VerAfiliacion from './VerAfiliacion'

import {Input, Select, Button, Hr} from '../index'

const InterfazAfilicianes = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div className="container">
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <h3>Interfaz de Afiliaciones Palace/Inteval</h3>
            </div>
          </div>
          <div className="card-body">
            <div className=" d-flex justify-content-end">
            <Button title='Print' icon="fas fa-print" col= '1.5'  typebootstrap='link' type='button'/>
            <Button title='Mostrar Afiliacianes' icon="fas fa-search" col= '1.5'  typebootstrap='link' type='button'/>

            </div>
          <div className="row d-flex">
        <Input type="date" label="Date From" col={2} />
        <Input type="date" label="Date To" col={4} />
        
        <Select label="Office"  option="SUNRISE" col={2} colIcon={0} />
        <Select label="Sale type"  option="NEW SALE" col={2} colIcon={0} />
        </div>

<Hr/>

      <Nav tabs>
        <NavItem>
          <NavLink
            onClick={() => { toggle('1'); }}
          >
            Enviar Afiliaciones a Interval
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
        Consultar afiliacioanes Enviadas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
        Ver Afilizaciones Rechazadas
          </NavLink>
        </NavItem>
        
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
         <EnviarAfiliacion/>
        </TabPane>
        <TabPane tabId="2">
        <ConsultarAfiliacion/>
        </TabPane>
        <TabPane tabId="3">
       <VerAfiliacion/>

        </TabPane>
     
      </TabContent>
      <div className="row d-flex justify-content-end">
            <Button title='Enviar a Interval' col={3}  typebootstrap='primary ' type='button'/>
          </div>
          </div>
        </div>
    </div>
    )
}

export default InterfazAfilicianes
