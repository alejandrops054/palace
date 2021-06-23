import React from 'react'
import {  Form, FormGroup, Row, Label, Input, Col } from 'reactstrap';
import Table from "rc-table";


const LodgingTax = () =>{
    const columns = [
        {
            title: 'Recnum',
            dataIndex: 'Recnum',
            key: '1',
            //    render: () => <Checkbox  value label col/>,
            width: 180,
            align: 'center'
        }, {
            title: 'Reasonable Cost',
            dataIndex: 'ReasonableCost',
            key: '2',
            width: 180,
            align: 'center'
        }, {
            title: 'PR Cost',
            dataIndex: 'prCost',
            key: '3',
            width: 180,
            align: 'center'
        },{
            title: 'Date from',
            dataIndex: 'DateFrom',
            key: '4',
            width: 180,
            align: 'center'
        },{
            title: 'Date to',
            dataIndex: 'DateTo',
            key: '5',
            width: 180,
            align: 'center'
        },{
            title:'Status',
            dataIndex:'Status',
            key:'6',
            align:'center'
        }
    ]

    const data = [
        {
            Recnum:'',
            ReasonableCost: '',
            prCost: '',
            DateFrom:'',
            DateTo:'',
            Status:''
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

export default LodgingTax