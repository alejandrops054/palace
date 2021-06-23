/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

export const columns = [
    {
       title: 'Previous Application',
       dataIndex: 'previous',
       key: '1',
    //    render: () => <Checkbox  value label col/>,
       width: 'auto',
       align: 'center'
    },
    {
      title: 'Current Application',
      dataIndex: 'current',
      key: '2',
      width: 200,
      align: 'center'
    },
    {
      title: 'Description Template Document',
      dataIndex: 'description',
      key: '3',
      width:'auto',
      align: 'center'
    },
    {
      title: 'Validity',
      dataIndex: 'validity',
      key: '4',
      width: 200,
      align: 'center'
    },
  ];
  
   export const data = [
     {previous:'(no definido)', current: '6007770', description: 'PRIVATE TRANSPORTATION', validity: 'From 09/Sep/2020 to 09/Sep/2021  ', },
     {previous:'(no definido)', current: '6007770', description: 'PS NEGOTIATION-CREDIT EXTENSION', validity: 'From 09/Sep/2020 to 09/Sep/2021  ', },
     {previous:'(no definido)', current: '6007770', description: 'DEACTIVATION OF PREVIOUS MEMBERSHIP IN UPGRADE SALES', validity: 'From 09/Sep/2020 to 09/Sep/2021  ', },
     {previous:'(no definido)', current: '6007770', description: 'ADDITIONAL PAX', validity: 'From 09/Sep/2020 to 09/Sep/2021  ', },
    ];
