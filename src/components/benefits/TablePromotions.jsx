/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, CardBody, Card } from 'reactstrap';
import AdjustMovements from '../ajust-movements/AdjustMovements'
import ModalAffiliationInquery from '../affiliation/ModalAffiliationInquery'
import EstadoDeCuenta from '../members/ModalEstadoDeCuenta'
import Provisions from './Provisions'
import Promotions from './Promotions'
import ModalElectronicWallet from '../electronic-wallet/ModalElectronicWallet'
import TableWallet from './TableWallet'
const TablePromotions = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);

  }
  return (
    <div>
      <Card>
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink
                // className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                Promotions
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                // className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                Provisions
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                // className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('3'); }}
              >
                Discount products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                // className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('4'); }}
              >
                Wallet
              </NavLink>
            </NavItem>
          </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            {/*aqui va el componente */}
            <Promotions />
          </TabPane>
          <TabPane tabId="2">
            {/*aqui va el componente */}
            <Provisions />
          </TabPane>
          <TabPane tabId="3">
            {/*aqui va el componente */}
          </TabPane>
          <TabPane tabId="4">
            {/* <AdjustMovements/>
                <ModalAffiliationInquery/>
                <EstadoDeCuenta/>
                <ModalElectronicWallet/> */}
            {/*aqui va el componente */}
            <TableWallet />
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  </div>
  )
}

export default TablePromotions
