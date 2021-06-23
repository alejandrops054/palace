import React, {useState} from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody, CardTitle } from 'reactstrap';
import InfoMemberPromotions from './InfoMemberPromotions';
import TabPromotion from './TabPromotion'


const  = () =>{
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return(
        <>
        <Card>
            <CardBody>
                <CardTitle tag="h5">Member Promotions</CardTitle>
                <InfoMemberPromotions/>
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
                            Promotions Detail
                     </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            // className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Promotions Benefit
                     </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <TabPromotion/>
                    </TabPane>
                    <TabPane tabId="2">
                    </TabPane>
                    <TabPane tabId="3">
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
        </>
    )
}

export default 