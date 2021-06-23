/*Sistema Intelligence 2.0
  Módulo Contratos
  Versión 1.0
  Author: IntregraIT Contratos
  Comentarios: Tabla pertenece a Affiliation Inquiry pestaña Conciliation
*/
import React from 'react'
import Table from "rc-table"

const Conciliations = () => {
  const columns = [
    { title: 'Recnum', dataIndex: 'Recnum', key: '1', width: 100 },
    { title: 'Concept', dataIndex: 'Concept', key: '2', width: 100 },
    { title: 'Financing Id', dataIndex: 'Financing', key: '3', width: 100 },
    { title: 'Payment Id', dataIndex: 'Payment', key: '4', width: 100 },
    { title: 'Deposit Id', dataIndex: 'Deposit', key: '5', width: 100 },
    { title: 'Deposit Status', dataIndex: 'Deposit_Status', key: '6', width: 100 },
    { title: 'Deposit Amount', dataIndex: 'Deposit_Amount', key: '7', width: 100 },
    { title: 'Deposit Code', dataIndex: 'Deposit_Code', key: '8', width: 100 },
    { title: 'Deposit Concile', dataIndex: 'Deposit_Concile', key: '9', width: 100 },
    { title: 'Deposit Remaining', dataIndex: 'Deposit_Remaining', key: '10', width: 100 },
    { title: 'Detail Separator', dataIndex: 'Detail_Separator', key: '11', width: 100 },
    { title: 'Detail Id', dataIndex: 'Detail_Id', key: '12', width: 100 },
    { title: 'Detail Amount', dataIndex: 'Detail_Amount', key: '13', width: 100 },
    { title: 'Detail Down', dataIndex: 'Detail_Down', key: '14', width: 100 },
  ]
  const data = [
    {Recnum:'4317915', Concept: 'Down Complement', Financing: '201385', Payment: '1', Deposit:'1630591', Deposit_Status:'A', Deposit_Amount:'$0.01', 
    Deposit_Code:'D', Deposit_Concile:'$0.00',Deposit_Remaining:'$0.00', Detail_Separator:'', Detail_Id:'7332257',Detail_Amount:'$2,605.00',Detail_Down:'$2,605.00' },
    {Recnum:'4317915', Concept: 'Down Complement', Financing: '201385', Payment: '1', Deposit:'1630591', Deposit_Status:'A', Deposit_Amount:'$0.01', 
    Deposit_Code:'D', Deposit_Concile:'$0.00',Deposit_Remaining:'$0.00', Detail_Separator:'', Detail_Id:'7332257',Detail_Amount:'$2,605.00',Detail_Down:'$2,605.00' },
    {Recnum:'4317915', Concept: 'Down Complement', Financing: '201385', Payment: '1', Deposit:'1630591', Deposit_Status:'A', Deposit_Amount:'$0.01', 
    Deposit_Code:'D', Deposit_Concile:'$0.00',Deposit_Remaining:'$0.00', Detail_Separator:'', Detail_Id:'7332257',Detail_Amount:'$2,605.00',Detail_Down:'$2,605.00' },
    {Recnum:'4317915', Concept: 'Down Complement', Financing: '201385', Payment: '1', Deposit:'1630591', Deposit_Status:'A', Deposit_Amount:'$0.01', 
    Deposit_Code:'D', Deposit_Concile:'$0.00',Deposit_Remaining:'$0.00', Detail_Separator:'', Detail_Id:'7332257',Detail_Amount:'$2,605.00',Detail_Down:'$2,605.00' },
    {Recnum:'4317915', Concept: 'Down Complement', Financing: '201385', Payment: '1', Deposit:'1630591', Deposit_Status:'A', Deposit_Amount:'$0.01', 
    Deposit_Code:'D', Deposit_Concile:'$0.00',Deposit_Remaining:'$0.00', Detail_Separator:'', Detail_Id:'7332257',Detail_Amount:'$2,605.00',Detail_Down:'$2,605.00' },
    {Recnum:'4317915', Concept: 'Down Complement', Financing: '201385', Payment: '1', Deposit:'1630591', Deposit_Status:'A', Deposit_Amount:'$0.01', 
    Deposit_Code:'D', Deposit_Concile:'$0.00',Deposit_Remaining:'$0.00', Detail_Separator:'', Detail_Id:'7332257',Detail_Amount:'$2,605.00',Detail_Down:'$2,605.00' },
    {Recnum:'4317915', Concept: 'Down Complement', Financing: '201385', Payment: '1', Deposit:'1630591', Deposit_Status:'A', Deposit_Amount:'$0.01', 
    Deposit_Code:'D', Deposit_Concile:'$0.00',Deposit_Remaining:'$0.00', Detail_Separator:'', Detail_Id:'7332257',Detail_Amount:'$2,605.00',Detail_Down:'$2,605.00' },
    {Recnum:'4317915', Concept: 'Down Complement', Financing: '201385', Payment: '1', Deposit:'1630591', Deposit_Status:'A', Deposit_Amount:'$0.01', 
    Deposit_Code:'D', Deposit_Concile:'$0.00',Deposit_Remaining:'$0.00', Detail_Separator:'', Detail_Id:'7332257',Detail_Amount:'$2,605.00',Detail_Down:'$2,605.00' },
  ]
  return (
    <div >
      <Table style={{ width: 1200 }} scroll={{ x: 2000 }} className='table' id="resume-table" columns={columns} data={data} />
    </div>
  )
}

export default Conciliations
