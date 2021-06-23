/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from 'react'

const Verde = {
    color: "#00af9f"
}

const InfoMembers = (props) => {
    return (
        
        <div className="container" >
            <br/>
                    <h5>{props.title}:</h5>
                    <p style={Verde}>{props.text}</p>
                </div>

        
    )
}

export default InfoMembers;