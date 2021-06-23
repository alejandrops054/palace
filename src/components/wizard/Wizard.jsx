/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react'
import { useHistory } from 'react-router-dom'

const Wizard = ({ setIsActive, isAct }) => {

    const items = [
        {id: 0, icon: 'fas fa-id-badge', name: 'Guest Information'},
        {id: 1, icon: 'fas fa-money-check-alt', name: 'Sale Capture'},
        {id: 2, icon: 'fas fa-gift', name: 'Benefits'},
        {id: 3, icon: 'fas fa-key', name: 'Packages Acces'},
        {id: 4, icon: 'fas fa-dollar-sign', name: 'VAT Rate'},
    ];

    const selectId = (id) => {
        setIsActive(id)
    };

    return (
        <>
        {isAct == 5
            ?null
            :(<>
                <header className="content-title">
                    <h2><i className= {`${items[isAct].icon} mr-3`}></i>{items[isAct].name}</h2>
                </header>

                <div className= "wizard" >
                    <ul>
                        {items.map(item =>(
                            <li className="wizzard-item" key={item.id}>
                                <button
                                    className={`wizard-btn ${isAct === item.id ? 'active' : ''}`}
                                    onClick={() => selectId(item.id)}>
                                    <i className={`${item.icon}`}></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
            )
        }

        </>
    )
}

export default Wizard

