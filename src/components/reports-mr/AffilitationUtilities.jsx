
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import React from 'react';
import SeachNav from '../ui/search';
import Download from '../ui/Download'
import logo from '../../assets/images/png/report-affiliation-utilities.PNG';

const AffilitaionUtilities = () => {
    // const [classname, setClassname] = useState("list-container");

    // const handleNoteClassName = () => {
    //   if (classname === "list-container") {
    //     setClassname("list-container toggled");
    //   } else {
    //     setClassname("list-container");
    //   }
    // };
  

    return (
        <div className="container-fluid">
            <div className="row mb-5">
                <div className="col">
                    <h1 style={{ fontSize:'40px', fontWeight:700, color:'#ffffff'}}>Utilities for...</h1>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-6">
                    <SeachNav placeholder="Search affilliation" link="/reports/affiliation/results"/>
                </div>
                <div className="col">
                    <div style={{float: 'right'}} className='mr-5 pr-5'>
                    <i className="fas fa-print mr-3"></i>
                    {/* <i className="fas fa-download"></i> */}
                    <Download />
                    </div>
                </div>


            </div>
            <div className="row">
                <div className="col">
                    <img  width="330px" src={logo} alt="logo"/>
                </div>
                <div className="col-7 align-self-center ">
                    <h2 style={{ fontSize:'40px', fontWeight:700, color:'#ffffff'}}>Do a filtering to <br/> show results</h2>
                </div>         
            </div>
        </div>
    )
}

export default AffilitaionUtilities;