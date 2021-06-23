import React from 'react'
import {  Form, FormGroup, Row, Label, Input, Col } from 'reactstrap';
import Table from "rc-table";


const TabPromotion = () =>{
    const columns = [
        {
            title: 'Selected',
            dataIndex: 'Selected',
            key: '1',
            //    render: () => <Checkbox  value label col/>,
            width: 180,
            align: 'center'
        }, {
            title: 'Description',
            dataIndex: 'Description',
            key: '2',
            width: 180,
            align: 'center'
        }, {
            title: 'Year From',
            dataIndex: 'yearFrom',
            key: '3',
            width: 180,
            align: 'center'
        },{
            title: 'Year to',
            dataIndex: 'yearTo',
            key: '5',
            width: 180,
            align: 'center'
        },{
            title: 'Date from',
            dataIndex: 'DateFrom',
            key: '4',
            width: 180,
            align: 'center'
        },{
            title:'Total',
            dataIndex:'Total',
            key:'6',
            width: 180,
            align:'center'
        },{
            title:'Balance',
            dataIndex:'balance',
            key:'7',
            width: 180,
            align:'center'
        },{
            title:'Transferable',
            dataIndex:'transfer',
            key:'8',
            width: 180,
            align:'center'
        }
    ]

    const data = [
        {
            Selected:'',
            Description: '',
            yearFrom: '',
            yearTo:'',
            DateFrom:'',
            DateTo:'',
            Total:'',
            balance:'',
            transfer:''
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

export default TabPromotion