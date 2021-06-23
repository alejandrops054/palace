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
    title: 'Item',
    dataIndex: 'item',
    key: 'item',
    width: 500,
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
    width: 130,
  },
  {
    title: 'Initial down p.',
    dataIndex: 'initial',
    key: 'initial',
    width:130,
    render: () => <Input type='checkbox'/>
  },
  {
    title: 'Promissory down p.',
    dataIndex: 'promissory',
    key: 'promissory',
    width: 130,
    render: () => <Input type='checkbox'/>
  },
  {
    title: 'Monthly payment',
    dataIndex: 'monthly-p',
    key: 'monthly-p',
    width: 130,
    render: () => <Input type='checkbox'/>
  },
];

const data = [
  { item: 'Credit Card', currency: 'US Dollar'},
  { item: 'Cash', currency: 'US Dollar'},
  { item: 'Bank tranfer', currency: 'US Dollar'},
  { item: 'Web Payment', currency: 'US Dollar'},
];



const RcTable = ({ title="", text="", icon="" }) => {
    return (
      <>
        <h2>Payment Way</h2>
        <Table columns={columns} data={data} />
      </>
    );
};

export default RcTable;