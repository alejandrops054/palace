/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {Checkbox, Button} from '../index'

export const columns = [
    {
       title: 'Recnum',
       dataIndex: 'Recnum',
       key: '1',
    //    render: () => <Checkbox  value label col/>,
       width: 120,
       align: 'center'
    },
    {
      title: 'Date',
      dataIndex: 'Date',
      key: 'Date',
      width: 120,
      
    },
    {
      title: 'Note',
      dataIndex: 'Note',
      key: 'Note',
      width: 420,
      
    },
    {
      title: 'User',
      dataIndex: 'User',
      key: 'User',
      width: 120,
     
    },
    {
      title: 'Category',
      dataIndex: 'Category',
      key: 'Category',
      width: 180,
      
    }
  ];
  
  export const data = [
    {Recnum:'11896448', Date: '1/5/2021', Note: '***  SEND WELCOME EMAIL TO OWNER ***', User: 'WTORRES', Category: 'Notification' },

  ];