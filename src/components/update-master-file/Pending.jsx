/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, Row } from 'reactstrap';
import { SimpleTable, Checkbox } from '../index'
function Pending() {
    const columns = [
        {
            title: 'To Process',
            dataIndex: 'toprocess',
            key: 'toprocess',
            width: "1%",
            render: () => <Checkbox />
        },
        {
            title: 'Server Message',
            dataIndex: 'servermessage',
            key: 'servermessage',
            width: "1%",
            render: () => <Checkbox />
        },
        {
            title: 'Affiliation',
            dataIndex: 'affiliation',
            key: 'affiliation',
            width: "1%",
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            width: "1%",
        },
        {
            title: 'Login',
            dataIndex: 'login',
            key: 'login',
            width: "1%",
        },
        {
            title: 'Module',
            dataIndex: 'module',
            key: 'module',
            width: "1%",
        },
        {
            title: 'System',
            dataIndex: 'system',
            key: 'system',
            width: "1%",
        },
        {
            title: 'Add Date',
            dataIndex: 'adddate',
            key: 'adddate',
            width: "1%",
        },
        {
            title: 'Update Date',
            dataIndex: 'updatedate',
            key: 'updatedate',
            width: "1%",
        },
        {
            title: 'Error Message',
            dataIndex: 'errormessage',
            key: 'errormessage',
            width: "1%",
        },
    ];
    const data = [
        { toprocess: '', servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', updatedate: '', errormessage: '' },
        { toprocess: '', servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', updatedate: '', errormessage: '' },
        { toprocess: '', servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', updatedate: '', errormessage: '' },
        { toprocess: '', servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', updatedate: '', errormessage: '' },
        { toprocess: '', servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', updatedate: '', errormessage: '' },
        { toprocess: '', servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', updatedate: '', errormessage: '' },
        { toprocess: '', servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', updatedate: '', errormessage: '' },
        { toprocess: '', servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', updatedate: '', errormessage: '' },
        { toprocess: '', servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', updatedate: '', errormessage: '' },
        { toprocess: '', servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', updatedate: '', errormessage: '' },
    ];
    const columns2 = [
        {
            title: 'Server Message',
            dataIndex: 'servermessage',
            key: 'servermessage',
            width: "1%",
        },
        {
            title: 'Affiliation',
            dataIndex: 'affiliation',
            key: 'affiliation',
            width: "1%",
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            width: "1%",
        },
        {
            title: 'Login',
            dataIndex: 'login',
            key: 'login',
            width: "1%",
        },
        {
            title: 'Module',
            dataIndex: 'module',
            key: 'module',
            width: "1%",
        },
        {
            title: 'System',
            dataIndex: 'system',
            key: 'system',
            width: "1%",
        },
        {
            title: 'Add Date',
            dataIndex: 'adddate',
            key: 'adddate',
            width: "1%",
        },
        {
            title: 'Error Message',
            dataIndex: 'errormessage',
            key: 'errormessage',
            width: "1%",
        },
    ];
    const data2 = [
        { servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', errormessage: '' },
        { servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', errormessage: '' },
        { servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', errormessage: '' },
        { servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', errormessage: '' },
        { servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', errormessage: '' },
        { servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', errormessage: '' },
        { servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', errormessage: '' },
        { servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', errormessage: '' },
        { servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', errormessage: '' },
        { servermessage: '', affiliation: '', company: '', login: '', module: '', system: '', adddate: '', errormessage: '' },
    ];
    return (
        <>
            <Card>
                <CardBody>
                    <Row>
                        <SimpleTable columns={columns} data={data} type="table" />
                        <SimpleTable columns={columns2} data={data2} type="table" />
                        <Checkbox col={12} label="Apply the same filters that previous page" />
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}

export default Pending;
