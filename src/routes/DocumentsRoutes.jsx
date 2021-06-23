/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ReportEditorView from '../views/Documentos/ReportEditorView'
import Documents from '../views/Documentos/Documentos'
import SpecialLetterEditor from '../views/Documentos/SpecialLetterEditor'
function ReportsRoutes() {
    return (
        <>
            <Switch>
                <Route exact path="/documents" component={Documents} />
                <Route exact path="/documents/reporteditorview" component={ReportEditorView} />
                <Route exact path="/documents/SpecialLetterEditor" component={SpecialLetterEditor}/>
            </Switch>

        </>
    )
}

export default ReportsRoutes
