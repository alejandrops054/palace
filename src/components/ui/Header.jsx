import React from 'react';
import { Link } from 'react-router-dom';

//title: titulo del header
//icon


const Header = ({ title, icon, routehome = "Home", route1 = "Membership input", route2 = "Add member" }) => {
    return (
        <header className="module-header">
            <h1 className="page-title"><i className={icon}></i> {title}</h1>
            <nav className="breadcrumbs">
                <ul className="breadcrumb-nav">
                    <li><Link to='!#'>{routehome}</Link></li>
                    <li><Link to='!#' className="ellipsis">{route1}</Link></li>
                    <li><span className="ellipsis">{route2}</span></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;


