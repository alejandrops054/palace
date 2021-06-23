/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import TableProduct from './TableProduct'
import TableReference from './TableReference'
const ElectronicWallet = () => {
    return (
        <div className="card">
            <div className="card-body table">
                <TableProduct />
                <br/>
                <TableReference />
            </div>
        </div>
    );
}
export default ElectronicWallet;