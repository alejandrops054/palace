/*Sistema Intelligence 2.0
  Módulo Contratos
  Versión 1.0
  Author: IntregraIT Contratos
  Comentarios: xxxxx
*/
import React from 'react';
import { Link } from 'react-router-dom';


const LiNavBar = ({ icon = "", title = "", short = true, active = "", data = [] }) => {
    return (
        <li className="has-children">

            {short ? <Link to="/panel"><i className={icon}></i> <span className="link-name">{title}</span></Link> : null}
            {short ? null : <Link to="" className={active}><i className={icon}></i><span className="link-name">{title}</span></Link>}
            {short ? null : <div id="submenu" className="submenu">
                <button className="submenu-toggle"><i className="fas fa-arrow-left"></i></button>
                <ul>
                    {data.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>

            </div>
            }

        </li>
    )
}



export default LiNavBar;
