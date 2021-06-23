/*Sistema Intelligence 2.0
  Módulo Contratos
  Versión 1.0
  Author: IntregraIT Contratos
  Comentarios: xxxxx
*/
import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'


//imagenes
import contracts from '../../assets/images/brand/systems-iso/contracts20.svg'
import unknowuser from '../../assets/images/svg/unknown-user.svg'
//import contracts from '../../assets/images/svg/contracts.svg'

import '../../js/jquery-3.5.1.slim.min.js'
import '../../js/bootstrap/bootstrap.bundle.min.js'
import '../../js/functions.js'

const MainMenu = () => {

    return (
        <>
            {/* <header className="app-header menu-bar">
            <div className="page">
                <header className="app-header menu-bar">
                    <div className="app-branding">
                        <Link to="">
                            <img src={contracts} className="custom-logo" alt="contracts" />
                        </Link>
                    </div>
                    <div className="user-profile">
                        <Link to="" className="user-photo">
                            <img src={unknowuser} className="custom-profile" alt="unknowUser" />
                        </Link>
                    </div>
                    <div className="app-notifications">
                        <ul className="menu">
                            <li><Link to="" alt="Notifications" title="Notifications">
                                <i className="fas fa-bell"></i>
                                <span className="link-name">Notifications</span>
                                <span className="badge">3</span>
                            </Link></li>
                        </ul>

                    </div>
                    <NavBar />
                </header>
            </div>
        </header> */}

            <header id="menubar" className="app-header">
                <section className="menu-bar">
                    <div className="app-branding">
                        <Link to="">
                            <img src={contracts} className="custom-logo" alt="contracts" />
                        </Link>
                    </div>

                    <div className="user-menu dropdown">
                        <button id="user-menu-btn" className="btn btn-link btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-bars"></i><span className="link-name">User's menu</span>
                        </button>

                        <ul className="dropdown-menu" aria-labelledby="user-menu-btn">
                            <Link to="/componentesui"><li className="dropdown-item" >Componentes UI</li></Link>
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a href="#" className="dropdown-item">Sign out</a></li>
                        </ul>
                    </div>

                    <div className="system-modules dropdown mb-3">
                        <button id="system-menu-btn" className="btn btn-link btn dropdown-toggle first-level" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-home"></i><span className="link-name">Modules</span>
                        </button>

                        <ul className="dropdown-menu" aria-labelledby="system-menu-btn">
                            <li><a href="#" className="dropdown-item">Content Management System</a></li>
                            <li><a href="#" className="dropdown-item">Call Center</a></li>
                            <Link to="/panel"><li className="dropdown-item">Contracts</li></Link>
                            <li><a href="#" className="dropdown-item">Marketing</a></li>
                            <li><a href="#" className="dropdown-item">Moon Vacation Gateway</a></li>
                            <li><a href="#" className="dropdown-item">Commisions</a></li>
                            <li><a href="#" className="dropdown-item">One on One</a></li>
                        </ul>
                    </div>

                    <div className="app-notifications d-none">
                        <ul className="menu">
                            <li><a href="#" alt="Notifications" title="Notifications">
                                <i className="fas fa-bell"></i>
                                <span className="link-name">Notifications</span>
                                <span className="badge">3</span>
                            </a></li>
                        </ul>
                    </div>

                    <nav className="main-navigation">
                        <button className="btn-toggle">Menu <i className="fas fa-angle-down ml-1"></i></button>

                        <ul className="menu">
                            {/* <li><Link to="/panel" className="nav-link"><i className="fas fa-home"></i><span className="link-name">Modules</span></Link></li>
                            <li><a className="nav-link" href=""><i className="fas fa-check"></i><span className="link-name">Prueba</span></a></li> */}
                            <li className="dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" role="button" id="inhouse-link" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-user"></i><span className="link-name">User</span>
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="inhouse-link">
                                    <Link to="/new-member"><li className="dropdown-item">Add member</li></Link>
                                    <li><a href="#" className="dropdown-item">Promotions</a></li>
                                    <li><a href="#" className="dropdown-item">Notes</a></li>
                                    <li><a href="#" className="dropdown-item">Beneficiaries</a></li>
                                    <li><a href="#" className="dropdown-item">Deposits maintenance</a></li>
                                    <li><a href="#" className="dropdown-item">Members previous</a></li>
                                    <li><a href="#" className="dropdown-item">Member VAT Rate</a></li>
                                    <li><a href="#" className="dropdown-item">Cancel SMART Provisions</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" id="inhouse-link" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-paste"></i><span className="link-name">Reports</span>
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="inhouse-link">
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Residence Benefits</a>

                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">English</a></li>
                                            <li><a tabIndex="-1" href="#">Spanish</a></li>
                                            <li><a tabIndex="-1" href="#">Portugues</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Diamond Benefits</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">English</a></li>
                                            <li><a tabIndex="-1" href="#">Spanish</a></li>
                                            <li><a tabIndex="-1" href="#">Portugues</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">General Report</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Authorizations</a></li>
                                            <li><a tabIndex="-1" href="#">Barclays</a></li>
                                            <Link to="/reports/affiliation"><li tabIndex="-1">Affiliation Utility</li></Link>
                                            <Link to="/reports/membership-reports">Membership report</Link>
                                            <li><a tabIndex="-1" href="#">Daily Sale</a></li>
                                            <li><a tabIndex="-1" href="#">Deposit Batch Listing</a></li>
                                            <li><a tabIndex="-1" href="#">Down Payment Remaining</a></li>
                                            <li><a tabIndex="-1" href="#">Electronic Purse Detail</a></li>
                                            <li><a tabIndex="-1" href="#">Interval</a></li>
                                            <li><a tabIndex="-1" href="#">Management Reports</a></li>
                                            <li><a tabIndex="-1" href="#">Member Sistur Promotions</a></li>
                                            <li><a tabIndex="-1" href="#">Other Payments</a></li>
                                            <li><a tabIndex="-1" href="#">Override</a></li>
                                            <li><a tabIndex="-1" href="#">RCI</a></li>
                                            <li><a tabIndex="-1" href="#">Referrals</a></li>
                                            <li><a tabIndex="-1" href="#">Report Products And Discounts </a></li>
                                            <li><a tabIndex="-1" href="#">Room Type Access</a></li>
                                            <li><a tabIndex="-1" href="#">Sales Sheet</a></li>
                                            <li><a tabIndex="-1" href="#">Trade in</a></li>
                                            <li><a tabIndex="-1" href="#">Tax Manifest Residence</a></li>
                                            <li><a tabIndex="-1" href="#">Upgrate & Downgrade</a></li>
                                            <li><a tabIndex="-1" href="#">VAT Reason Reports</a></li>
                                            <li><a tabIndex="-1" href="#">Verifications</a></li>
                                            <li><a tabIndex="-1" href="#">Wholesales Membership Report</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#"> Reports Credit and Collections</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Account Inquiry</a></li>
                                            <li><a tabIndex="-1" href="#">Accounts Receivable</a></li>
                                            <li><a tabIndex="-1" href="#">Airplane Ticket</a></li>
                                            <li><a tabIndex="-1" href="#">Cancellation Report</a></li>
                                            <li><a tabIndex="-1" href="#">Comparative Portafolio</a></li>
                                            <li><a tabIndex="-1" href="#">Member Capture</a></li>
                                            <li><a tabIndex="-1" href="#">Print Daily Collections</a></li>
                                            <li><a tabIndex="-1" href="#">Provisions and Costs</a></li>
                                            <Link to="/reports/membership-reports"><li tabIndex="-1">Membership Report</li></Link>
                                            <li><a tabIndex="-1" href="#">Tax-ID/NNS Report</a></li>
                                            <li className="dropdown-submenu">
                                                <a className="has-children dropdown-toggle" tableindex="-1" href="#">Universal Credit</a>
                                                <ul className="dropdown-menu">
                                                    <li><a tabIndex="-1" href="#">○	Universal Credit REF 500 (Club)</a></li>
                                                    <li><a tabIndex="-1" href="#">○	Universal Credit REF 500 (Hotel)</a></li>
                                                </ul>
                                            </li>
                                            <li><a tabIndex="-1" href="#">Cycle Monthly Delinq</a></li>
                                            <li><a tabIndex="-1" href="#">Account Statement</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" className="dropdown-item">Report Editor</a></li>

                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">SAP Policies</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Benefit Policy</a></li>
                                            <li><a tabIndex="-1" href="#">Accounting Records SAP</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Cancellations</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Cancellations</a></li>
                                            <li><a tabIndex="-1" href="#">Cancellations By Reason</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Invoice</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Invoices from  Other incomes</a></li>
                                            <li><a tabIndex="-1" href="#">Invoicing</a></li>
                                            <li><a tabIndex="-1" href="#">Invoices by affiliation</a></li>
                                            <li><a tabIndex="-1" href="#">Other Invoices</a></li>
                                            <li><a tabIndex="-1" href="#">Cancel Invoices</a></li>
                                            <li><a tabIndex="-1" href="#">E- Invoicing Process</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Member</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Member</a></li>
                                            <li><a tabIndex="-1" href="#">Rafle Week</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Stock</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Balance Stock  Sales Rooms</a></li>
                                            <li><a tabIndex="-1" href="#">Detailed Movements Of Use Of The Stock</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Unit</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Unit Rate Promotions</a></li>
                                            <li><a tabIndex="-1" href="#">Unit Rate Promotions Vs Rate Codes</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" className="dropdown-item">Portfolio Sales</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" id="inhouse-link" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-cog"></i><span className="link-name">Settings</span>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="inhouse-link">
                                    <li><a href="#" className="dropdown-item">Color Editor</a></li>
                                    <li><a href="#" className="dropdown-item">Count provisions</a></li>
                                    <li><a href="#" className="dropdown-item">Interfaz Palace - Interval</a></li>
                                    <li><a href="#" className="dropdown-item">Event viewer</a></li>
                                    <li><a href="#" className="dropdown-item">Initialize financing members</a></li>
                                    <li><a href="#" className="dropdown-item">Performance</a></li>
                                    <li><a href="#" className="dropdown-item">Raffle weeks</a></li>
                                    <Link to="/documents/reporteditorview"><li className="dropdown-item">Report editor</li></Link>
                                    <Link to="/documents/SpecialLetterEditor"><li className="dropdown-item">Special letters</li></Link>
                                    <li><a href="#" className="dropdown-item">Assignment of Diamond Classifications</a></li>
                                    <li><a href="#" className="dropdown-item">Event Viewer</a></li>
                                    <li><a href="#" className="dropdown-item">Generate Membership Related</a></li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Stock</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Monthly Stock</a></li>
                                            <li><a tabIndex="-1" href="#">Stock  Sales Rooms</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" className="dropdown-item">Titles Setting</a></li>
                                    <li><a href="#" className="dropdown-item">Users</a></li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Assignment Benefits</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Authorization of Benefits</a></li>
                                            <li><a tabIndex="-1" href="#">Benefits Administrator</a></li>
                                            <li><a tabIndex="-1" href="#">Benefits by  Member </a></li>
                                            <li><a tabIndex="-1" href="#">Consumption of Benefits</a></li>
                                            <li><a tabIndex="-1" href="#">Type  Benefit Rules</a></li>
                                            <li><a tabIndex="-1" href="#">Tag Management</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" id="inhouse-link" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-book"></i><span className="link-name">Catalogs</span>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="inhouse-link">
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Access</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Access Golf Courses </a></li>
                                            <li><a tabIndex="-1" href="#">Access Hotels</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" className="dropdown-item">ASM</a></li>
                                    <li><a href="#" className="dropdown-item">Authorization Level Note</a></li>
                                    <li><a href="#" className="dropdown-item">Additional Fees-Imperial Weeks</a></li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Bank Settings</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Account Banks</a></li>
                                            <li><a tabIndex="-1" href="#">Banks</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Cancel</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Cancel Codes</a></li>
                                            <li><a tabIndex="-1" href="#">Cancel Reasons</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" className="dropdown-item">Conversion Types</a></li>
                                    <li><a href="#" className="dropdown-item">Cities States and Countries</a></li>
                                    <li><a href="#" className="dropdown-item">Companies</a></li>
                                    <li><a href="#" className="dropdown-item">Currencies</a></li>
                                    <li><a href="#" className="dropdown-item">Credit Card Types </a></li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Configuration Policy</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Accounting  Account</a></li>
                                            <li><a tabIndex="-1" href="#">Benefits Policy Configuration </a></li>
                                            <li><a tabIndex="-1" href="#">Configuration Portfolio Bank Accounts</a></li>
                                            <li><a tabIndex="-1" href="#">Benefit Type (Policies)</a></li>
                                            <li><a tabIndex="-1" href="#">Benefit Policy Type </a></li>
                                            <li><a tabIndex="-1" href="#">Configure Benefit Policy</a></li>
                                            <li><a tabIndex="-1" href="#">Provision Additional Areas</a></li>
                                            <li><a tabIndex="-1" href="#">Provision Additional Classification </a></li>
                                            <li><a tabIndex="-1" href="#">Provision Additional Classification Hotel</a></li>
                                            <li><a tabIndex="-1" href="#">Provision Additional Cost Type</a></li>
                                            <li><a tabIndex="-1" href="#">Provision Additional Cost Type Areas</a></li>
                                            <li><a tabIndex="-1" href="#">Provision Additional Cost Type Date</a></li>
                                            <li><a tabIndex="-1" href="#">Functional Areas</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" className="dropdown-item">Demographic Areas</a></li>
                                    <li><a href="#" className="dropdown-item">Deposit Types</a></li>
                                    <li><a href="#" className="dropdown-item">Diamond Classifications</a></li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Discount Product</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Discount Product</a></li>
                                            <li><a tabIndex="-1" href="#">Pack Configuration</a></li>

                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Electronic Purse</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Electronic Purse Products Categories</a></li>
                                            <li><a tabIndex="-1" href="#">Electronic Purse Products</a></li>
                                            <li><a tabIndex="-1" href="#">Electronic Wallet Subtypes Movement</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" className="dropdown-item">Elite Products</a></li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Golf</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Golf-Unlimited–Additional Fee</a></li>
                                            <li><a tabIndex="-1" href="#">Golf Rounds Acces</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" className="dropdown-item">Holidays</a></li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Hotels</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Hotels</a></li>
                                            <li><a tabIndex="-1" href="#">Hotels Outhouse</a></li>
                                            <li><a tabIndex="-1" href="#">Hotels Zone</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" className="dropdown-item">Investment Type</a></li>
                                    <li><a href="#" className="dropdown-item">Invitation Type</a></li>
                                    <li><a href="#" className="dropdown-item">Jobs</a></li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Markets</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Markets</a></li>
                                            <li><a tabIndex="-1" href="#">Markets Combinations</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" className="dropdown-item">Modules Of Access</a></li>
                                    <li><a href="#" className="dropdown-item">Member Schemes</a></li>
                                    <li><a href="#" className="dropdown-item">Nationalities</a></li>
                                    <li><a href="#" className="dropdown-item">Notaries</a></li>
                                    <li><a href="#" className="dropdown-item">Offices</a></li>
                                    <li><a href="#" className="dropdown-item">Override</a></li>
                                    <li><a href="#" className="dropdown-item">Payment Types</a></li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Periods</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Periods Types</a></li>
                                            <li><a tabIndex="-1" href="#">Periodicities</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" className="dropdown-item">Portfolio Companies</a></li>
                                    <li><a href="#" className="dropdown-item">Plans</a></li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Price Levels</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Price Levels</a></li>
                                            <li><a tabIndex="-1" href="#">Programs</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" className="dropdown-item">Projects</a></li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Promotions</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Promotions</a></li>
                                            <li><a tabIndex="-1" href="#">Benefit Types (Promotions)</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" className="dropdown-item">Properties Trade In</a></li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Provisions</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Provisions Categories</a></li>
                                            <li><a tabIndex="-1" href="#">Provisions Categories Groups</a></li>
                                            <li><a tabIndex="-1" href="#">Provisions Groups</a></li>
                                            <li><a tabIndex="-1" href="#">Provisions Cebe Excess</a></li>
                                            <li><a tabIndex="-1" href="#">Provisions Cost Types</a></li>
                                            <li><a tabIndex="-1" href="#">Provisions Promotions</a></li>
                                            <li><a tabIndex="-1" href="#">Provisions Subcategories</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" className="dropdown-item">Public Deeds</a></li>
                                    <li><a href="#" className="dropdown-item">Rate Types</a></li>
                                    <li><a href="#" className="dropdown-item">Reactivation Type</a></li>
                                    <li><a href="#" className="dropdown-item">Reasons SSN/SIN</a></li>
                                    <li className="dropdown-submenu">
                                        <a className="has-children dropdown-toggle" tableindex="-1" href="#">Reservations Rates</a>
                                        <ul className="dropdown-menu">
                                            <li><a tabIndex="-1" href="#">Reservations Rates Fixed</a></li>
                                            <li><a tabIndex="-1" href="#">Reservations Rates Variable</a></li>
                                            <li><a tabIndex="-1" href="#">Reservations Rates Extra Fixed</a></li>
                                            <li><a tabIndex="-1" href="#">Reservations Rates Extra Variable</a></li>
                                            <li><a tabIndex="-1" href="#">Reservations Rates Types</a></li>
                                            <li><a tabIndex="-1" href="#">Reservations Rates Types Extra</a></li>
                                            <li><a tabIndex="-1" href="#">Reservations Seasons Fixed</a></li>
                                            <li><a tabIndex="-1" href="#">Reservations Seasons Variable</a></li>
                                            <li><a tabIndex="-1" href="#">Roles</a></li>
                                            <li><a tabIndex="-1" href="#">Room Types</a></li>
                                            <li><a tabIndex="-1" href="#">Room Types Groups</a></li>
                                            <li><a tabIndex="-1" href="#">Room Types Sub Groups</a></li>
                                            <li><a tabIndex="-1" href="#">Room Types Acces</a></li>
                                            <li><a tabIndex="-1" href="#">Room Type Access Categories</a></li>
                                            <li><a tabIndex="-1" href="#">Room Type Access Grouper</a></li>
                                            <li><a tabIndex="-1" href="#">Room Type Access Subcategories</a></li>
                                            <li><a tabIndex="-1" href="#">Room Type Categories</a></li>
                                            <li><a tabIndex="-1" href="#">Salesman</a></li>
                                            <li><a tabIndex="-1" href="#">Sales Types</a></li>
                                            <li><a tabIndex="-1" href="#">Sale Type Categories</a></li>
                                            <li><a tabIndex="-1" href="#">Seasons</a></li>
                                            <li><a tabIndex="-1" href="#">Seasons Type</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" id="inhouse-link" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-credit-card"></i><span className="link-name">Credits</span>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="inhouse-link">
                                    <li><a href="#" className="dropdown-item">Log Access (Bitacora Smart)</a></li>
                                    <li><a href="#" className="dropdown-item">Change Account Inquiry </a></li>
                                    <li><a href="#" className="dropdown-item">Clean Suspense</a></li>
                                    <li><a href="#" className="dropdown-item">Notes Concord</a></li>
                                    <li><a href="#" className="dropdown-item">Payment Posting </a></li>
                                    <li><a href="#" className="dropdown-item">Provisions Log</a></li>
                                    <li><a href="#" className="dropdown-item">Release Balance </a></li>
                                    <li><a href="#" className="dropdown-item">Update Master File</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </section>
            </header>
        </>
    )
}

export default MainMenu
