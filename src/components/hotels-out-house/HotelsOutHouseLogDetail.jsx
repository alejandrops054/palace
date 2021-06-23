/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {LogDetail} from '../index'

const HotelsOutHouseLogDetail = () => {
    const columns = [
        {
          title: "Order",
          dataIndex: "order",
          key: "order",
          width: 130,
        },
        {
          title: "Field Name",
          dataIndex: "fn",
          key: "fn",
          width: 130,
        },
        {
          title: "Original",
          dataIndex: "og",
          key: "og",
          width: 130,
        },
        {
          title: "Change",
          dataIndex: "change",
          key: "change",
          width: 130,
        },
      ];
      const data = [
          {order:'2201', fn: '',og:'', change:''},
          {order:'2201', fn: '',og:'', change:''},
          {order:'2201', fn: '',og:'', change:''},
      ]
    return (
        <>
            <LogDetail title={'Hotels Outhouse'}  column={columns} data={data}/>

        </>
    )
}

export default HotelsOutHouseLogDetail
