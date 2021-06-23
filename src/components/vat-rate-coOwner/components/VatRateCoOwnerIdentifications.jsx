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
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: 500,
  },
  {
    title: 'Origin',
    dataIndex: 'origin',
    key: 'origin',
    width: 130,
    render: () => <Input type='select'/>
  },
  
  {
    title: 'Show.',
    dataIndex: 'show',
    key: 'show',
    width:130,
    render: () => <Input type='checkbox'/>
  }
];

const data = [
  { origin: '', show: ''},
  { origin: '', show: ''},
  { origin: '', show: ''},
  { origin: '', show: ''},
];



const VatRateCoOwnerIdentifications = ({ title="", text="", icon="" }) => {
    return (
      <>
        <h2>Identifications</h2>
        <Table columns={columns} data={data} />
      </>
    );
};

export default VatRateCoOwnerIdentifications;
