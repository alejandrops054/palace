/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {Checkbox} from '../index'

export const columns = [
    {
       title:  'Profile Id',
       dataIndex: 'Profile_Id',
       key: '1',
    //    render: () => <Checkbox  value label col/>,
       width: 130,
       align: 'center'
    },
    {
      title: 'Relationship',
      dataIndex: 'Relationship',
      key: 'Relationship',
      width: 130,
      
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
      width: 280,
      
    },
    {
      title: 'Principal',
      dataIndex: 'Principal',
      key: 'Principal',
      width: 180,
     
    },
    {
      title: 'AnexoA',
      dataIndex: 'AnexoA',
      key: 'AnexoA',
      width: 130,
      
    },
    {
        title: 'Send Promotions',
        dataIndex: 'Send_Promotions',
        key: 'Send_Promotions',
        width: 140,
        
      },
  ];
  
  export const data = [
    {Profile_Id:'17183544', Relationship: 'Owner', Email: 'adrian.hurtdavies@gmail.com', Principal: <Checkbox/>, AnexoA: <Checkbox/>, Send_Promotions: <Checkbox/> },
    {Profile_Id:'17183544', Relationship: 'Owner', Email: 'adrian.hurtdavies@gmail.com', Principal: <Checkbox/>, AnexoA: <Checkbox/>, Send_Promotions: <Checkbox/> },
    {Profile_Id:'17183544', Relationship: 'Owner', Email: 'adrian.hurtdavies@gmail.com', Principal: <Checkbox/>, AnexoA: <Checkbox/>, Send_Promotions: <Checkbox/> },
    {Profile_Id:'17183544', Relationship: 'Owner', Email: 'adrian.hurtdavies@gmail.com', Principal: <Checkbox/>, AnexoA: <Checkbox/>, Send_Promotions: <Checkbox/> },
  ];