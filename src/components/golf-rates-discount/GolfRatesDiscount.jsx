/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, CardTitle } from 'reactstrap';
import { SimpleTable } from '../index'

function GolfRatesDiscount() {
    const columns = [
        {
            title: 'Golf Round',
            dataIndex: 'golfround',
            key: 'golfround',
            width: "1%",
        },
        {
            title: 'Hotel',
            dataIndex: 'hotel',
            key: 'hotel',
            width: "1%",
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            width: "1%",
        },
        {
            title: 'Use Year',
            dataIndex: 'useyear',
            key: 'useyear',
            width: "1%",
        },
        {
            title: 'Use Date From',
            dataIndex: 'usedatefrom',
            key: 'usedatefrom',
            width: "1%",
        },
        {
            title: 'Use Date To',
            dataIndex: 'usedateto',
            key: 'usedateto',
            width: "1%",
        },
        {
            title: 'Print Date',
            dataIndex: 'printdate',
            key: 'printdate',
            width: "1%",
        },

    ];
    const data = [
        { golfround: '', hotel: '', amount: '', useyear: '', usedatefrom: '', usedateto: '', printdate: '' },
        { golfround: '', hotel: '', amount: '', useyear: '', usedatefrom: '', usedateto: '', printdate: '' },
        { golfround: '', hotel: '', amount: '', useyear: '', usedatefrom: '', usedateto: '', printdate: '' },
        { golfround: '', hotel: '', amount: '', useyear: '', usedatefrom: '', usedateto: '', printdate: '' },
        { golfround: '', hotel: '', amount: '', useyear: '', usedatefrom: '', usedateto: '', printdate: '' },
        { golfround: '', hotel: '', amount: '', useyear: '', usedatefrom: '', usedateto: '', printdate: '' },
        { golfround: '', hotel: '', amount: '', useyear: '', usedatefrom: '', usedateto: '', printdate: '' },
        { golfround: '', hotel: '', amount: '', useyear: '', usedatefrom: '', usedateto: '', printdate: '' },
        { golfround: '', hotel: '', amount: '', useyear: '', usedatefrom: '', usedateto: '', printdate: '' },
        { golfround: '', hotel: '', amount: '', useyear: '', usedatefrom: '', usedateto: '', printdate: '' },
    ];
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Golf Rates 50% Discount</CardTitle>
                    <SimpleTable columns={columns} data={data} type="table" />
                </CardBody>
            </Card>
        </>
    );
}

export default GolfRatesDiscount;
