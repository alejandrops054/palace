/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React, { useState } from "react"
import { EditorComponent, Navigation, Header, TreeView, Button, Flex, Spinner2, Saved } from '../../components/index'
import { Modal, ModalBody } from "reactstrap";
const opacity = {
    opacity: 0.6,
    top: 200
}

const ReportEditorView = () => {
    let texto = "The standard Lorem Ipsum passage, used since the 1500s The standard Lorem Ipsum passage, used since the 1500s The standard Lorem Ipsum passage, used since the 1500s The standard Lorem Ipsum passage, used since the 1500s The standard Lorem Ipsum passage, used since the 1500s";
    const [loading, setLoading] = useState(false);
    setTimeout((toggle) => {
        setLoading(true);
    }, 5000);
    const component = !loading ? <Spinner2 /> : <Saved />
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)

    return (
        <div className="App">
            <div className="page">
                    <Navigation />
                <section className="app-content">
                    <Header title={'Report editor'} icon={'fas fa-edit'} route1="Maintenance" route2="Report editor" />
                    <h2 className="sso-form-title">Edit what you need!</h2>
                    <main>
                        <div className="row col-lg-12">
                            <div className="col-4">
                                <TreeView />
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-lg-1">
                                        <Flex title="Español" />
                                    </div>
                                    <div className="col-lg-1">
                                        <Flex title="English" color="#6E83F0" />
                                    </div>
                                    <div className="col-lg-1">
                                        <Flex title="Portugués" color="#6E83F0" />
                                    </div>
                                </div>
                                <EditorComponent initialValue={texto} height={400} />
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
export default ReportEditorView
