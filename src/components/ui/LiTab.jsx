import React from "react";
import { Link } from 'react-router-dom';
//test
//title: string
//route: string
//selected: string
//active: string

const LiTab = ({ title = "", route = "", selected = "false", active = "", data=""}) => {
    return (
        <li className="nav-item" role="presentation">
            <Link to={data} className={`nav-link ${active}`} id="guest-info-tab" data-toggle="tab" role="tab" aria-controls="guest-info" aria-selected={selected}>{title}</Link>
        </li>
    );
};

export default LiTab;