/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, {useState} from 'react'
import Table from 'rc-table'
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import {InfoMembers, Input, Select} from '../index'

const ReleaseElectronicPurseProducts = () => {
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if (activeTab !== tab) 
            setActiveTab(tab);
    }
    const columns = [
      { title: 'Stock', dataIndex: 'Stock', key: '1', width: 200},
      { title: 'Item', dataIndex: 'Item', key: '2', width: 200 },
      { title: 'Date', dataIndex: 'Date', key: '3', width: 200 },
      { title: 'Description', dataIndex: 'Description', key: '4', width: 200 },
      { title: 'Reference', dataIndex: 'Reference', key: '5', width: 200 },
      { title: 'Amount', dataIndex: 'Amount', key: '6', width: 200 },
      { title: 'Activate', dataIndex: 'Activate', key: '7', width: 200 },
      { title: 'Expiration', dataIndex: 'Expiration', key: '8', width: 200 },
      { title: 'Payments', dataIndex: 'Payments', key: '9', width: 200 },
      { title: 'Financing Type', dataIndex: 'Financing_Type', key: '10', width: 200 },
      { title: '5 % Cash', dataIndex: 'Cash', key: '11', width: 200 },
    
      
    ]
    const data = [
        {Stock:'3', Item: '',Date:'',Description:'',Reference:'', Amount:'', Activate:'', Expiration:'', Payments:'', Financing_Type:'', Cash:'' }
    ]
    return (
       <div className="container">
          <div className="card">
            <div className="card-header">
            <Nav tabs>
                <NavItem>
                    <NavLink // className={classnames({ active: activeTab === '1' })}
                        onClick={
                            () => {
                                toggle('1');
                            }
                    }>
                        Generate Amounts
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink // className={classnames({ active: activeTab === '2' })}
                        onClick={
                            () => {
                                toggle('2');
                            }
                    }>
                        Transfer Amounts
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink // className={classnames({ active: activeTab === '2' })}
                        onClick={
                            () => {
                                toggle('3');
                            }
                    }>
                        Activate Balance
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink // className={classnames({ active: activeTab === '2' })}
                        onClick={
                            () => {
                                toggle('4');
                            }
                    }>
                        Exit
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    {/*aqui va el componente */} 
                </TabPane>
                <TabPane tabId="2">
                    {/*aqui va el componente */} </TabPane>
                <TabPane tabId="3">
                    {/*aqui va el componente */} </TabPane>
                <TabPane tabId="4">
                    {/*aqui va el componente */} </TabPane>
            </TabContent>
            </div>
            <div className="card-body">
              <div className="card-title">
                <h3>Release Electronic Purse Products</h3>
              </div>
              <div className="row">
                   <div className="d-flex">
                      <div className="col-lg-6">
                      <p>Product Information</p>
                      </div>
                      <div className="col-lg-6">
                      <p>Electronic Purse Detail</p>
                      </div>
                    </div>   
             
                <div className="col-lg-6 d-flex">
                  <div className="col">
                    <InfoMembers title="Amount Number"  text="1234567890"/> 
                    <InfoMembers title="Product"  text="1 - SPA MONEY"/> 
                  </div>
              <div className="col">
                    <InfoMembers title="Amount"  text="100.00"/> 
                    <InfoMembers title="Total Payments"  text="4"/> 
              </div>
                </div>
                <div className="col-lg-6 d-flex">
                <div className="col">
                  <Input type="text" label="Num Pol"  />
                  <Input type="date" label="Expiration" icon="fas fa-calendar-week"  />
                </div>
                <div className="col">
                  <Input type="text" label="Payments"  />
                  <Select label="Financing Type" option="None"/>
                </div>
                </div>
              </div>
              <div className="pt-3 ">
                <Table style={{width:'auto'}} scroll={{x:1000}} className='table' id="resume-table" columns={columns} data={data} />
                </div>
            </div>

        </div>
       </div>
    )
}

export default ReleaseElectronicPurseProducts

