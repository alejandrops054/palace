import React from 'react'
import {  Form, FormGroup, Row, Label, Input, Col } from 'reactstrap';
import Table from "rc-table";


const Direct = () =>{
    const columns = [
        {
            title: 'Recnum',
            dataIndex: 'Recnum',
            key: '1',
            //    render: () => <Checkbox  value label col/>,
            width: 180,
            align: 'center'
        }, {
            title: 'Sales price',
            dataIndex: 'SalesPrice',
            key: '2',
            width: 180,
            align: 'center'
        }, {
            title: 'Date From',
            dataIndex: 'DateFrom',
            key: '3',
            width: 180,
            align: 'center'
        },{
            title: 'Date to',
            dataIndex: 'DateTo',
            key: '4',
            width: 180,
            align: 'center'
        },{
            title: 'Status',
            dataIndex: 'Status',
            key: '5',
            width: 180,
            align: 'center'
        }
    ]

    const data = [
        {
            Recnum: '705',
            SalesPrice: '$75,000.00',
            DateFrom:'6/18/2021 4:27PM',
            DateTo:'1/1/1753',
            Status:'A'
        }, 
        
    ];
    return(
        <>
            <Table className="table" id="resume-table"
                        columns={columns}
                        data={data}/>
        </>
    )
}

export default Direct