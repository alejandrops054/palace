import React from 'react'
import Table from 'rc-table';

const EnviarAfiliacion = () => {
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
          title: 'Name',
          dataIndex: 'Name',
          key: 'Name',
          width: 160,
         
        },
        {
          title: 'Purchase Date',
          dataIndex: 'Purchase_date',
          key: 'Purchase_date',
          width: 160,
          
        },
        {
            title: 'Nationality',
            dataIndex: 'Nationality',
            key: 'Nationality',
            width: 160,
           
          },
          {
            title: 'Office',
            dataIndex: 'Office',
            key: 'Office',
            width: 160,
           
          },
          {
            title: 'Country',
            dataIndex: 'Country',
            key: 'Country',
            width: 160,
           
          },
      ];
      
const data = [
        { Select: '2021', Company: '0', Application: '0', Name:'0', Purchase_date:'0',Nationality:'', Office:'',Country:''},
        
      ];
    return (
        <div className="mt-3">
            <Table scroll={{x:800}} className="table"  id="resume-table" columns={columns} data={data}  />
        </div>
    )
}

export default EnviarAfiliacion
