import {React, useState} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {Company, Header, Navigation, NewProvision, Checkbox, Chart} from '../index'
import Table from 'rc-table';
import {Link} from 'react-router-dom'

/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

const ProvisionsBenefits = () => {

    const columns = [
        {
          title: <Checkbox />,
          dataIndex: 'check',
          key: '1',
          //    render: () => <Checkbox  value label col/>,
          width: 60,
          align: 'center'
        },
        {
          title: 'Type',
          dataIndex: 'Type',
          key: 'Type',
          width: 180,
    
        },
        {
          title: 'Name',
          dataIndex: 'Name',
          key: 'Name',
          width: 180,
    
        },
        {
          title: 'Folio',
          dataIndex: 'Folio',
          key: 'Folio',
          width: 180,
    
        },
        {
          title: 'Cost',
          dataIndex: 'Cost',
          key: 'Cost',
          width: 180,
    
        },
        {
            title: 'SaleDate',
            dataIndex: 'SaleDate',
            key: 'SaleDate',
            width: 180,
      
        },
        {
            title: 'Expirationdate',
            dataIndex: 'Expirationdate',
            key: 'Expirationdate',
            width: 180,
      
        }
        
      ];
      const data = [
        { Type: '1', Name: 'Pepe', Folio: '001', Cost: '$0',SaleDate:'$43,000', Expirationdate:'23/02/21'}
      ];

      const infoMember = {
        name: "John Doe",
        imagePath: "images/svg/unknown-user.svg",
        currentamount: 2500,
        totalamount: 12000,
      };

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if (activeTab !== tab) setActiveTab(tab);
    }

    return(
        <>
        <div className="App">
        <div className="page">
          <header className="app-header menu-bar">
          <Navigation />
          </header>
          <section className="app-content">
            <Header title={"Add Member"} icon={"fas fa-user"} />
                <div className="row">
                    <div className="col-2">
                        <h2>{infoMember.name}</h2>
                    </div>
                    <div className="col-7">
                        <Company />
                    </div>
                    <div className="col-3">
                        <h3>Current Amount{" "}
                        <div className="customer-photo">
                            <Chart/>
                        </div>
                        <span id="current-amount">{`$${infoMember.currentamount}`}</span> /{" "}
                        <span id="total-amount">{`$${infoMember.totalamount}`}</span>
                        </h3>
                    </div>
                </div>

                <div className="row col-12">
                    <div className="border-top border-secondary" >
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    // className={classnames({ active: activeTab === '1' })}
                                    icon="fa fa-trash-o"
                                    onClick={() => { toggle('1'); }}>
                                    Delete 
                                </NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink
                                    // className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}>
                                    Add provision
                                </NavLink>
                            </NavItem>
                        </Nav>
                                    
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <div className="card">
                                    <div className="col-lg-12">
                                        <div className="card-body table">
                                            <Table id="resume-table" columns={columns} data={data} />
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                                        
                            <TabPane tabId="2">
                                    <NewProvision/>
                            </TabPane>
                                        
                        </TabContent>
                    </div>
                </div>
                <Link to=''/>
          </section>
        </div>
      </div>
    </>
    
    )
}

export default ProvisionsBenefits