import React from 'react'
import Table from 'rc-table'

const ConsultarAfiliacion = () => {
    const columns = [
        {
           title:  'No. Send',
           dataIndex: 'Send',
           key: 'Send',
           width: 160,
           align: 'center'
        },
        {
          title: 'Shipping date',
          dataIndex: 'Shipping',
          key: 'Shipping',
          width: 160,
          
        },
        {
          title: 'Office',
          dataIndex: 'Office',
          key: 'Office',
          width:160,
          
        },
        {
          title: 'Batch Sequence Number',
          dataIndex: 'Batch',
          key: 'Batch',
          width: 160,
         
        },
        {
            title: 'Total Send',
            dataIndex: 'Total_Send',
            key: 'Total_Send',
            width: 160,
          
        },
        {
            title: 'Total Approved',
            dataIndex: 'Total_Approved',
            key: 'Total_Approved',
            width: 160,
           
          },
          {
            title: 'Total Rejected',
            dataIndex: 'Total_Rejected',
            key: 'Total_Rejected',
            width: 160,
           
          },
          {
            title: 'XML Name',
            dataIndex: 'XML_Name',
            key: 'XML_Name',
            width: 160,
           
          },
          {
            title: 'XML ',
            dataIndex: 'XML',
            key: 'XML',
            width: 160,
           
          },
      ];
      
const data = [
        { Send: '2021', Shipping: '0', Office: '0', Batch:'0', Total_Send:'0',Total_Approved:'', Total_Rejected:'',XML_Name:'', XML:''},
        
      ];
    return (
        <div className="mt-3">
            <Table scroll={{x:800}} className="table"  id="resume-table" columns={columns} data={data}  />
        </div>
    )
}

export default ConsultarAfiliacion
