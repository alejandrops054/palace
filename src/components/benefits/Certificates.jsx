/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { SimpleTable, Checkbox } from '../index';

const Certificates = () => {
    const columns = [
        {
            title: 'Item',
            dataIndex: 'item',
            key: 'item',
            width: 300,
        },
        {
            title: 'Traveling with the owner',
            dataIndex: '',
            key: '',
            render: () => <Checkbox />,
            width: 300,
        },
        {
            title: 'Bracelet',
            dataIndex: '',
            key: '',
            render: () => <input type="number" name="next-application" id="next-application" placeholder="0" className="form-control" disabled />,
            width: 300,
        },
    ];
    const data = [
        { item: 'Diamond' },
        { item: 'Residence' },
    ];
    return (
        <div className="m-1 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Certificates</h5>
                    <SimpleTable columns={columns} data={data} />
                </div>
            </div>
        </div>
    )
}

export default Certificates