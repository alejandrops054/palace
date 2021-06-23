/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {Checkbox} from '../index'
import {Dropdown, Menu,Button} from 'antd'

/*botton actions*/
function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1"><i className="fas fa-book"></i>{' '}Log</Menu.Item>
    <Menu.Item key="2"><i className="fas fa-pen"></i>{' '}Edit</Menu.Item>
    <Menu.Item key="3"><i className="fas fa-trash-alt"></i>{' '}Delete</Menu.Item>
  </Menu>
);

export const columns = [
    // {
    //    title:  <Checkbox/>,
    //    dataIndex: 'check',
    //    key: '1',
    //     render: () => <Checkbox  value label col/>,
    //    width: 30,
    //    align: 'center'
    // },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      width: 'auto',
      
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width:'auto',
      
    },
    {
      title: 'Profile',
      dataIndex: 'profile',
      key: 'profile',
      width: 'auto',
     
    },
    {
      title: 'First name',
      dataIndex: 'first',
      key: 'first',
      width: 'auto',
      
    },
    {
        title: 'Last name',
        dataIndex: 'last',
        key: 'last',
        width: 'auto',
        
      },
      {
        title: <i className='fas fa-ellipsis-v'></i>,
        dataIndex: 'but',
        key: 'but',
        width: 'auto',
        
        render: () => (<Dropdown.Button overlay={menu}></Dropdown.Button>)
     },

  ];
  
  // export const data = [
  //   {priority:'1', id: '001', first: 'Mark', last: 'Jacob', },
  // ];