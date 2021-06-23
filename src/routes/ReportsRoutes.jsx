/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AffiliationUtility from '../views/Reportes/modules/affiliation-utility/AffiliationUtility'
import Reportes from '../views/Reportes/Reportes'
import {MemebershipReport, MemberReportsFor, CustomerSearch } from '../components/index'
import SavingMemberReportsFor from '../views/Reportes/modules/membershipReportsFor/SavingMemberReportsFor'

function ReportsRoutes() {
    return (
        <>
            <Switch>
                <Route exact path="/reports" component={Reportes}/>
                <Route exact path="/reports/membership-reports" component={MemberReportsFor}/>
                <Route exact path="/reports/membership-reports/customer-search" component={CustomerSearch}/>
                <Route exact path="/reports/membership-reports/membership-result" component={MemebershipReport}/>
                <Route exact path="/reports/membership-reports/membership-result/saved" component={SavingMemberReportsFor}/>
                <Route exact path="/reports/affiliation" component={AffiliationUtility}/>
                <Route exact path="/reports/affiliation/results" component={CustomerSearch}/>
                
                
            </Switch>

        </>
    )
}

export default ReportsRoutes
