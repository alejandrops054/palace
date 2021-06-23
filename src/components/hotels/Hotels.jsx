/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { useState } from "react";
import { Card, CardBody, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { SimpleTable, Button, DetailsHotel } from '../index'
function Hotels() {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const columns = [

        {
            title: 'Code',
            dataIndex: 'code',
            key: 'code',
            width: "1%",
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: "1%",
        },
        {
            title: 'Zone',
            dataIndex: 'zone',
            key: 'zone',
            width: "1%",
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: "1%",
        },
        {
            title: 'Order',
            dataIndex: 'order',
            key: 'order',
            width: "1%",
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
            width: "1%",
        },
        {
            title: 'Go',
            dataIndex: 'but',
            key: 'but',
            width: "1%",
        },
    ];
    const data = [
        {
            code: '1', description: '', zone: '1', status: '1', order: '1', country: '', but: <Button col="1.5"
                onClick={
                    () => toggle()
                }
                icon="fas fa-plus"
                typebootstrap="link main"
                type="button" />
        },
    ];
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Hotels</CardTitle>
                    <SimpleTable columns={columns} data={data} type="table" />

                </CardBody>
            </Card>
            <Modal isOpen={open}
                toggle={toggle}
                size="lg">
                <ModalHeader>Hotel</ModalHeader>
                <ModalBody className="p-0 ">
                    <DetailsHotel />
                </ModalBody>
                <ModalFooter>
                    <div className="d-flex justify-content-end">
                        <Button col={12}
                            typebootstrap="primary "
                            type="submit"
                            title="Save" />
                        <Button col={12}
                            typebootstrap="secondary"
                            type="button"
                            onClick={() => setOpen(false)}
                            title="Close"
                        />

                    </div>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default Hotels;
