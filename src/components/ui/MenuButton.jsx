/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react'

//title:titulo de boton
//col: tamaño de columna de bootstrap
//icon: clase del icono
//Se agrego prop onClick

const MenuButton = ({ onclickEdit, onclickDelete, onclickLog }) => {
    return (
        <div className="dropdown">
            <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li className="dropdown-item" onClick={onclickEdit}><i className="fas fa-pen"></i> Edit</li>
                <li className="dropdown-item" onClick={onclickDelete}><i className="fas fa-trash-alt"></i> Delete</li>
                {/* <li className="dropdown-item" onClick={onclickLog}><i className="fas fa-book"></i> Log</li> */}
            </ul>
        </div>
    )
}

export default MenuButton