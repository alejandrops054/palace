import React from 'react'
import Table from 'rc-table'

const VerAfiliacion = () => {
    const columns = [
        {
           title:  'Select',
           dataIndex: 'Select',
           key: 'Select',
           width: 160,
           align: 'center'
        },
        {
          title: 'Company',
          dataIndex: 'Company',
          key: 'Company',
          width: 160,
          
        },
        {
          title: 'Application',
          dataIndex: 'Application',
          key: 'Application',
          width:160,
          
        },
        {
          title: 'Purchase Date',
          dataIndex: 'Purchase_Date',
          key: 'Purchase_Date',
          width: 160,
         
        },
        {
            title: 'Office',
            dataIndex: 'Total_Send',
            key: 'Total_Send',
            width: 160,
          
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
            width: 160,
           
          },
          {
            title: 'Status Message',
            dataIndex: 'Status_Message',
            key: 'Status_Message',
            width: 160,
           
          },
          
      ];
      
const data = [
        { Select: '2021', Company: '0', Application: '0',Purchase_Date:'0', Office:'0',Status:'', Status_Message:''},
        
      ];
    return (
        <div>
             <div className="mt-3">
            <Table scroll={{x:800}} className="table"  id="resume-table" columns={columns} data={data}  />
        </div>
        </div>
    )
}

export default VerAfiliacion
