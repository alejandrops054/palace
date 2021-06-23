/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {Log} from '../index'



const AdditionalFeesImperialLog = () => {
    const columns = [
        { title: 'User', dataIndex: 'user', key: '1', width: 200},
        { title: 'Date / Time', dataIndex: 'dateTime', key: '2', width: 200 },
        { title: 'Module', dataIndex: 'module', key: '3', width: 200 },
        { title: 'Action', dataIndex: 'action', key: '4', width: 200 },
        { title: 'Original', dataIndex: 'original', key: '5', width: 200 },
        { title: 'Changes', dataIndex: 'changes', key: '6', width: 200 },
      ]
      const data = [
          {user:'2201', dateTime: '',module:'',action:'',original:'',changes:''},
          {user:'2201', dateTime: '',module:'',action:'',original:'',changes:''},
          {user:'2201', dateTime: '',module:'',action:'',original:'',changes:''},
          {user:'2201', dateTime: '',module:'',action:'',original:'',changes:''}
      ]
    return (
        <>
         <Log title={'Additional Fees - Imperial Weeks Log'} columns={columns} data={data}/>   
        </>
    )
}

export default AdditionalFeesImperialLog
