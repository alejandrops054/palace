import {React, useState} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {Input, Select, Checkbox} from "../index";
import Account from './Account'
import Cards from './Cards'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ModalElectronicWallet = ()=>{

    const Titulo =[
        'Electronic Wallet'
    ]

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if (activeTab !== tab) setActiveTab(tab);
      
    }

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
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            // className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                            >Account 
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            // className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                            >Cards
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        {/*aqui va el componente */}
                        <br/>
                        <Account/>
                    </TabPane>
                    <TabPane tabId="2">
                        {/*aqui va el componente */}
                        <br/>
                        <Cards/>
                    </TabPane>
                </TabContent>
            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalElectronicWallet