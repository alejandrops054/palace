/*Sistema Intelligence 2.0
  Módulo Contratos
  Versión 1.0
  Author: IntregraIT Contratos
  Comentarios: xxxxx
*/
import React from 'react'
import {Link} from 'react-router-dom'

function BreadCrumbsMemberInquiry() {
    return (
        <>
            <nav className="breadcrumbs">
                <ul className="breadcrumb-nav">
                  <li>
                    <a href="!#">Account Details</a>
                  </li>
                  <li>
                    <Link to="/account-details" className="ellipsis">Promises</Link>
                  </li>
                  <li>
                    <a href="!#">Conciliations</a>
                  </li>
                </ul>
            </nav>
        </>
    )
}

export default BreadCrumbsMemberInquiry
