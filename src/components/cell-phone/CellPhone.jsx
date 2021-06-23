/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { Input, Label } from '../index'

const CellPhone = () => {
    return (
        <div className="card">
            <div className="row justify-content-start">
                <div className="col-lg-12">
                    <Input type="text" label="Country Code" placeholder="876" col={12} />
                    <Input type="text" label="Area Code" col={12} />
                    <Input type="text" label="Cell Phone" placeholder="8679312" col={12} />
                    <Label etiqueta="Current Cell Phone 8768679312" col={12} aling="center" />
                </div>
            </div>
        </div>
    );
}
export default CellPhone;