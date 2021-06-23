/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {Checkbox, Button} from '../index'

export const columns1 = [
    {
       title:  'ID',
       dataIndex: 'ID',
     
    //    render: () => <Checkbox  value label col/>,
       width: 60,
       align: 'center'
    },
    {
      title: 'Program',
      dataIndex: 'Program',
      key: 'Program',
      width: 160,
      
      
    },
    {
      title: 'Program name',
      dataIndex: 'Program_name',
      key: 'Program_name',
      width:160,
      
    },
    {
      title: 'Minimum Price',
      dataIndex: 'Minimum_price',
      key: 'Minimum_price',
      width: 160,
     
    },
    {
      title: 'Maximum Price',
      dataIndex: 'Maximum_price',
      key: 'Maximum_price',
      width: 160,
      
    },
    {
        title: 'Incentives Weeks',
        dataIndex: 'Incentives_weeks',
        key: 'Incentives_weeks',
        width: 160,
        
      },
      {
        title:  'Admin Fee',
        dataIndex: 'Admin_Fee',
        key: 'Admin_Fee',
        width: 160,
      
     },
  ];
  
  export const data1 = [
    {ID:'1', Program: 'TR', Program_name: 'Trial', Minimum_price: '$1.00',Maximum_price:'$6,247.99', Incentives_weeks:'1', Admin_Fee:'$275.00'  },
    {ID:'1', Program: 'TR', Program_name: 'Trial', Minimum_price: '$1.00',Maximum_price:'$6,247.99', Incentives_weeks:'1', Admin_Fee:'$275.00'  },
  ];