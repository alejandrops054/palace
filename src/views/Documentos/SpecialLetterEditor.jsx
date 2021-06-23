/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React, { useState } from "react"
import { EditorComponent, Navigation, Header, Button, Select, Spinner2, Saved } from '../../components/index'
import { Modal, ModalBody } from "reactstrap";
const opacity = {
    opacity: 0.6,
    top: 200
}
const SpecialLetterEditor = () => {
    const [loading, setLoading] = useState(false);
    setTimeout((toggle) => {
        setLoading(true);
    }, 7000);
    const component = !loading ? <Spinner2 /> : <Saved title="Your letter has been created succesfully" />
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    return (
        <div className="App">
            <div className="page">
                    <Navigation />
                <section className="app-content">
                    <Header title={'Report editor'} icon={'fas fa-edit'} route1="Maintenance" route2="Report editor" />
                    <h2 className="sso-form-title">Create a special latter!</h2>
                    <main>

                        <div className="row col-lg-10 col-md-8">
                            <div className="col-4">
                            </div>
                            <div className="col-12">
                                <div col-md-6>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <Select label="Category" />
                                            <Select label="Benefits" />
                                        </div>
                                        <div className="col-md-4">
                                            <Select label="Type of benefits" />
                                            <Select label="Laguage" />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <EditorComponent col="12" height={400} />
                                <div className="row float-right">
                                    <Button col={3} icon='fas fa-times' typebootstrap='secondary' type='button' />
                                    <Button col={3} icon='fas fa-save' typebootstrap='primary ' type='button' onClick={() => toggle()} />
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </div>
            <Modal isOpen={open} toggle={toggle} size='md' style={opacity}>
                <ModalBody className="p-0 ">
                    <div className="modal-dialog modal-dialog-centered text-center p-5">
                        {component}
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
}
export default SpecialLetterEditor;