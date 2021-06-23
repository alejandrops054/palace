/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {Checkbox, Button} from '../index'

export const columns = [
    {
       title:  'ID',
       dataIndex: 'ID',
       key: '1',
    //    render: () => <Checkbox  value label col/>,
       width: 60,
       align: 'center'
    },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      width: 180,
      
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: 'status',
      width:180,
      
    },
    {
      title: 'ACTIVE',
      dataIndex: 'active',
      key: 'active',
      width: 180,
     
    },
    {
      title: 'EMAIL',
      dataIndex: 'email',
      key: 'email',
      width: 180,
      
    },
    {
        title: 'PRIORITY',
        dataIndex: 'priority',
        key: 'priority',
        width: 180,
        
      },
  ];
  
  export const data = [
    {ID:'1', name: 'Henrry Escalante', status: 'A', active: 'Y',email:'hescalante@gmail.com', priority:'1' },
    {ID:'1', name: 'Henrry Escalante', status: 'A', active: 'Y',email:'hescalante@gmail.com', priority:'1' },
    {ID:'1', name: 'Henrry Escalante', status: 'A', active: 'Y',email:'hescalante@gmail.com', priority:'1' },
    {ID:'1', name: 'Henrry Escalante', status: 'A', active: 'Y',email:'hescalante@gmail.com', priority:'1' },

  ];