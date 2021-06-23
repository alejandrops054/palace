/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "../index";

function ModalReactstrap(props) {
    const Component = props.component;

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    return (
        <>
            <Button
                col="1.5"
                onClick={() => toggle()}
                icon="fas fa-plus"
                typebootstrap="link main"
                type="button"
                title={props.titlebutton}
            />
            <Modal isOpen={open} toggle={toggle} size="lg">
                <form>
                    <ModalHeader>{props.title}</ModalHeader>
                    <ModalBody className="p-0 ">
                        <Component />
                    </ModalBody>
                    <ModalFooter>
                        <div className="row">
                            <div className="col-lg-6">
                                <Button
                                    col={3}
                                    icon="fas fa-times"
                                    typebootstrap="secondary"
                                    type="button"
                                />
                            </div>
                            <div className="col-lg-6">
                                <Button
                                    col={3}
                                    icon="fas fa-check"
                                    typebootstrap="primary "
                                    type="button"
                                />
                            </div>
                        </div>
                    </ModalFooter>
                </form>
            </Modal>

        </>
    );
}

export default ModalReactstrap;