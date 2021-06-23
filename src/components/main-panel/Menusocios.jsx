/*Sistema Intelligence 2.0
  Módulo Contratos
  Versión 1.0
  Author: IntregraIT Contratos
  Comentarios: xxxxx
*/
import React from 'react'
import {Link} from 'react-dom'


const MenuSocios = () => {
  const item1 =[
    'Add member',
    'Promotions',
    'Notes',
    'Beneficiaries',
    'Deposits maintenance',
    'Members previous',
    'Member VAT Rate',
    'Cancel SMART Provisions'
  ];

  return(
    <li className="has-children">
      <a href="!#" className="active">
        <i className="fas fa-user"></i><span className="link-name">Members</span>
      </a>

      <div id="submenu" className="submenu">
      <button className="submenu-toggle"><i className="fas fa-arrow-left"></i></button>
      <ul>
      {item1.map((valor, index)=> <li key={index}>{valor}</li>)}
      </ul>
    </div>
  </li>
  )
}

export default MenuSocios;
