/*Sistema Intelligence 2.0
  Módulo Contratos
  Versión 1.0
  Author: IntregraIT Contratos
  Comentarios: xxxxx
*/
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Select, Input, Navigation, Header } from '../index'
import ImageReport from '../../assets/images/svg/archive.svg'


const MemberReportsFor = () => {
    return (
        <Fragment>
            <div className="App">
                <div id="page" className="page">
                    <Navigation />
                    <section className="app-content" id="content">
                        <main className="registration-form">
                            <div className="container">
                                <Header title={"Reports"}
                                    icon={"fas fa-edit"} />
                                <div className="d-flex align-items-center mt-5 pt-5">
                                    <h2 className="mt-5 mb-5">Memberships report for...</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <Input icon='fas fa-search' type='text' label='' placeholder='Search guest ID'
                                            col={12} />
                                    </div>
                                    <div className="col-md-4">
                                        <Select label="" option="Processable"
                                            col={12}
                                            colIcon={0} />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <img src={ImageReport}
                                            alt="report"></img>
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <h1>
                                            <Link to='/reports/membership-reports/customer-search'>Look for into our archive what you need</Link>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </section>
                </div>
            </div>

        </Fragment>
    )
}


export default MemberReportsFor

