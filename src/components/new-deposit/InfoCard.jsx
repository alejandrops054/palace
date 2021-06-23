/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Input, Select, Button, TextArea } from "../index";
import BinBankCreditCard from './BinBankCreditCard'
const InfoCard = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);
    return (
        <div className="row">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <Select label="Currency" col={6} />
                        <Input label="Amount" type="text" col={3} />
                        <Input label="" type="text" col={3} />
                        <Input label="Amount Down Payment" type="text" col={6} />
                        <Input label="Amount Adm Fee" type="text" col={6} />
                        <Input label="Exc. Rate" type="text" col={6} />
                        <Select label="Collect Office" col={6} />
                        <Select label="Status" col={6} />
                        <Select label="Portfolio" col={6} />
                        <TextArea label="Notes" col={12} />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <Input label="Bank" type="text" col={6} />
                        <Input label="" type="text" col={6} />
                        <Input label="Account" type="text" col={6} />
                        <Button title="BANK Select" col={4} type="prymary" typebootstrap="primary" onClick={() => toggle()} />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <Input label="Application Bank" type="text" col={10} />
                        <Button title="" col={2} type="prymary" typebootstrap="primary" />
                        <Input label="Application Account" type="text" col={6} />
                        <Input label="Entered By" type="text" col={6} />
                    </div>
                </div>
            </div>
            <Modal isOpen={open} toggle={toggle} size="md">
                <form>
                    <ModalHeader></ModalHeader>
                    <ModalBody className="p-0 ">
                        <BinBankCreditCard />
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
        </div>
    );
};

export default InfoCard;