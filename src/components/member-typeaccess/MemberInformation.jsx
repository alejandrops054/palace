/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react'
import { ToggleCheck } from '../index'


const MemberInformation = props => {
    /*Validacion para validar ToggleCheck */
    let validate;
    (props.schemeSelect === "Fixed" || props.schemeSelect === "New BPG") ? validate = true : validate = false;
    return (
        <div className='d-flex m-5'>
            <div className="row">
                <ToggleCheck label='Minimum Stay' numToggle='1' disabled={validate} />
                <ToggleCheck label='Beneficiaries' numToggle='2' disabled={validate} />
                <ToggleCheck label='Presindential Variable' numToggle='3' disabled={validate} />
            </div>
            <div className="row">
                <ToggleCheck label='Guest' numToggle='4' disabled={validate} />
                <ToggleCheck label='Presidential Fixed' numToggle='5' disabled={validate} />
                <ToggleCheck label='Referrend' numToggle='6' disabled={validate} />
            </div>
        </div>
    )
}


export default MemberInformation

