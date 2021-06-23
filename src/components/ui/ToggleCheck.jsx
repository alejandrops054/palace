/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React, { Fragment } from 'react'

const ToggleCheck = ({ label, numToggle, disabled}) => {
    return (
        <Fragment>
            <label className="form-label ">{label}</label>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="form-check form-switch" checked>
                        <input className="form-check-input " type="checkbox" id={`flexSwitchCheckDefault ${numToggle}`} disabled={disabled}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default ToggleCheck
