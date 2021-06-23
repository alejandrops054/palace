/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React, useState} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {Input, Select, Checkbox} from "../index";
import Modal from 'react-bootstrap/Modal'
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button'
import TableSpecificationType from './componets/TableSpecificationType'
import ValoresPromotion from './componets/Promotion'
import TablaBenefits from './componets/TablaBenefits' 
import TablaProvision from './componets/TablaProvision'

export default function PromotionsV2(){
    
    const [activeTab, setActiveTab] = useState('1');
    
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
        
    }

    const Titulo =[
        'Promotions'
    ]

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          {Titulo}
        </Button>
  
        <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>{Titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
            <ValoresPromotion/> 
            <Nav tabs>
            <NavItem>
              <NavLink
                // className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                Specifications 
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                // className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                Benefits
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                // className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('3'); }}
              >
                Provisions Benefits
                </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              {/*aqui va el componente */}
              <TableSpecificationType/>
            </TabPane>
            <TabPane tabId="2">
              {/*aqui va el componente */}
              <TablaBenefits/>
            </TabPane>
            <TabPane tabId="3">
              {/*aqui va el componente */}
              <TablaProvision/>
            </TabPane>
          </TabContent>
                  
          </div>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Salve
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}
