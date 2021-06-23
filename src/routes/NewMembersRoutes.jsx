/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {MemberResume} from '../Components/index'

function NewMembersRoutes() {
    return (
        <>
             <Switch>
                <Route exact path="/member-resume" component={MemberResume}/>
                
            </Switch>
        </>
    )
}

export default NewMembersRoutes
