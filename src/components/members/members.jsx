/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Navigation, Header, CustomerData } from '../index';
import MembersPrevious from './MembersPrevious'
import AddtionalInformation from './AddtionalInformation'
import DowPayment from './DowPayment'
import DiamondClassifications from './DiamondClassifications'
import MembersLikend from './MembersLikend'
// import TableModal from './TableModal'
import {Link} from 'react-router-dom'

const Member = () => {
    return(
        <div className="App">
        <div className="page">
            <header id="menubar" className="app-header menu-bar">
                <Navigation />
            </header>

            <section className="app-content">
                <Header
                    title={'Member'}
                    icon={'fas fa-user-plus'}
                />

                <main>
                   <CustomerData/>
                    <article className="content-area">
                        <form>
                            <AddtionalInformation/>
                            <br/>
                            <DowPayment/>
                            <br/>
                            <DiamondClassifications/>
                            <br/>
                            <MembersPrevious/>
                            <br/>
                            <MembersLikend/>
                        </form>

                    
                    <div className="d-flex justify-content-end mt-5 row">
                        <div className='col-3  align-self-center'>
                            <button  className="btn btn-secondary" style={{width:'80%'}}>Cancel</button>
                        </div>
                        <div className='col-3  align-self-center'>
                            <Link to="/"><button className='btn btn-primary' style={{width:'80%'}}>Next</button></Link>
                        </div>
                    </div>
                    </article>

                </main>
            </section>
        </div>
    </div>
    )
}

export default Member