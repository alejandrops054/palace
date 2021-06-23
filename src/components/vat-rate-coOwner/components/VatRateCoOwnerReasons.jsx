/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import Table from 'rc-table';
import { Input } from 'reactstrap'


const columns = [
  {
    title: 'Select',
    dataIndex: 'select',
    key: 'select',
    width: 200,
    render: () => <Input type='checkbox'/>
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: 200,
  },
 
];

const data = [
  {select:''}
];



const VatRateCoOwnerIdentifications = ({ title="", text="", icon="" }) => {
    return (
      <>
        <h2>Reasons</h2>
        <Table columns={columns} data={data} />
      </>
    );
};

export default VatRateCoOwnerIdentifications;
