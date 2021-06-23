/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {Checkbox, Button} from '../index'

export const columns2 = [
    {
       title: 'DP Required (%)',
       dataIndex: 'Required',
       key: '1',
    //    render: () => <Checkbox  value label col/>,
       width: 160,
       align: 'center'
    },
    {
      title: 'DP Paid (%)',
      dataIndex: 'Paid',
      key: 'Paid',
      width: 160,
      
    },
    {
      title: 'Min Pack Amount',
      dataIndex:'Min_Pack',
      key: 'id',
      width:160,
      
    },
    {
      title: 'Max Pack Amount',
      dataIndex: 'Max_Pack',
      key: 'Max_Pack',
      width: 160,
     
    },
    {
      title: 'Min Amount Required',
      dataIndex: 'Min_Amount',
      key: 'Min_Amount',
      width: 160,
      
    },
    {
        title: 'Max Amount Required',
        dataIndex: 'Max_Amount',
        key: 'Max_Amount',
        width: 160,
        
      },
   
  ];
  
  export const data2 = [
    {Required:'15', Paid: '0.00', Min_Pack: '$100.00', Max_Pack: '$100.00',Min_Amount:'$3,499.00',Max_Amount:'$669.00' },
   
  ];