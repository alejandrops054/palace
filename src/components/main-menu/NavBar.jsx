/*Sistema Intelligence 2.0
  Módulo Contratos
  Versión 1.0
  Author: IntregraIT Contratos
  Comentarios: xxxxx
*/
import React from 'react';
import LiNavBar from './LiNavbar';
import { MembersData } from './DataSideBar/MembersData';
import { ReportsData } from './DataSideBar/ReportsData';
import { SettingsData } from './DataSideBar/SettingsData';
import { CatalogsData } from './DataSideBar/CatalogsData';
import { CreditsData } from './DataSideBar/CreditsData';


const NavBar = () => {
    return (
        <nav className="main-navigation">
            <button className="btn-toggle"><i className="fas fa-bars"></i><span className="link-name">Menu</span></button>
            <ul className="menu">
                <LiNavBar icon="fas fa-th" title="Modules" short active="" />
                <LiNavBar icon="fas fa-user" title="Members" short={false} active="active" data={MembersData} />
                <LiNavBar icon="fas fa-paste" title="Reports" short={false} active="" data={ReportsData} />
                <LiNavBar icon="fas fa-cog" title="Settings" short={false} active="" data={SettingsData} />
                <LiNavBar icon="fas fa-book" title="Catalogs" short={false} active="" data={CatalogsData} />
                <LiNavBar icon="fas fa-credit-card" title="Credits" short={false} active="" data={CreditsData} />
            </ul>
        </nav>
    )
}


export default NavBar
