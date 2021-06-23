/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {Checkbox, Button} from '../index'

export const columns = [
    {
       title:  'Company',
       dataIndex: 'Company',
       key: '1',
    //    render: () => <Checkbox  value label col/>,
       width: 120,
       align: 'center',
       
    },
    {
      title: 'Application',
      dataIndex: 'Application',
      key: 'Application',
      width: 120,
      
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      width:120,
      
    },
    {
      title: 'Program',
      dataIndex: 'Program',
      key: 'Program',
      width: 120,
     
    },
    {
      title: 'Exchange',
      dataIndex: 'Exchange',
      key: 'Exchange',
      width: 120,
      
    },
    {
        title: 'Currency',
        dataIndex: 'Currency',
        key: 'Currency',
        width: 120,
        
      },
      {
        title: 'Total',
        dataIndex: 'Total',
        key: 'Total',
        width: 120,
        
      },
      {
        title: 'USD Amount',
        dataIndex: 'Amount',
        key: 'Amount',
        width: 120,
        
      },
  ];
  
  export const data = [
    {Company:' ', Application: ' ', Name: 'A', Program: 'Y',Exchange:' ', Currency:'1' , Total: 2, Amount:'' },
    {Company:' ', Application: ' ', Name: 'A', Program: 'Y',Exchange:' ', Currency:'1' , Total: 2, Amount:'' },
    {Company:' ', Application: ' ', Name: 'A', Program: 'Y',Exchange:' ', Currency:'1' , Total: 2, Amount:'' },
    {Company:' ', Application: ' ', Name: 'A', Program: 'Y',Exchange:' ', Currency:'1' , Total: 2, Amount:'' },
  
  ];