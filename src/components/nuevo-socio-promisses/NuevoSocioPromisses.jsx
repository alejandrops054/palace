import React, { useState } from "react";
//<!--Componeentes -->
import GetExistingF from './GetExistingF'
import Blance from './Blance'
import Company from './Company'
import AccDet from './AccDet'
import Promises from '../member-inquiry/Promises'
import { TabContent, TabPane, Nav, NavItem, NavLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Navigation, Header, Button} from '../index'
import { Link } from 'react-router-dom'
import CreditCard from '../sale-capture/modules/CreditCard'
import ModalGeographicLocation from '../newgeographic-location/ModalGeographicLocation'
import { deleteGeoAction } from '../../redux/actions/buscadorGeographicActions'



/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

const NuevoSocioPromisses= () => {
  const [open, setOpen] = useState(true);
  const toggleModal = () => setOpen(!open);
  const [activeTab, setActiveTab] = useState('1');

  const [chargedGeographic, setChargedGeographic ]=useState(false)
  const activeModal=true


  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  return (
    <>
      {/*<ModalGeographicLocation setChargedGeographic={setChargedGeographic} activeModal={activeModal} />*/}    
      {/* GEOGRAPHICLOCATION */}
                
    <div className="App">
      <div id="page" className="page">
        <Navigation />
        <section className="app-content" id="content">
          <Header
            title={'Add member'}
            icon={'fas fa-user-plus'}
            route2={'Members'}
          />
          <main className="registration-form">
            <article className="content-area">
              <form>
                <div>
                  <div className="container">
                    <div className="row">
                      <div className="col-4">
                        <Blance />
                      </div>
                      <div className="col-8">
                        <GetExistingF />
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div>
                    <Company />
                    <div className="border-top border-secondary" >
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
                            Promises detail
                         </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            // className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('4'); }}
                          >
                            Conciliations
                         </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            // className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('5'); }}
                          >
                            Credit Cards
                         </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                          <div className="col-lg-12">
                            <AccDet />
                          </div>
                        </TabPane>
                        <TabPane tabId="2">
                          <Promises />
                        </TabPane>
                        <TabPane tabId="3">
                          <div className="card">
                          </div>
                        </TabPane>
                        <TabPane tabId="4">
                          <div className="card">
                          </div>
                        </TabPane>
                        <TabPane tabId="5">
                          <CreditCard />
                        </TabPane>
                      </TabContent>
                    </div>
                    <div className="d-flex justify-content-center m-2">
                      <Link to="/new-member"><button className='btn btn-secundary' style={{width:'80%'}}>Cancel</button></Link>
                      <Link to="/newsociopromisses" className="col-2"><button className="btn btn-primary">Next</button></Link>

                    </div>
                  </div>
                </div>
              </form>
            </article>


          </main>
        </section>
      </div>
    </div>
</>
  );
}

export default NuevoSocioPromisses;