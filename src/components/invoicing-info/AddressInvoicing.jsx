/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { Input, TextArea } from '../index'

const AddressInvoicing = () => {
    return (
        <div className="card border-top border-secondary mb-3">
            <div className="card-header">
                <h3>Address</h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="row col-md-12">
                        <div className="col-md-6">
                            <Input type="text" label="Street" col={12} />
                            <Input type="text" label="Int. Number" col={12} />
                        </div>
                        <div className="col-md-6">
                            <Input type="text" label="Ext. Number" col={12} />
                            <Input type="text" label="Area" col={12} />
                        </div>
                        <div className="">
                            <TextArea label='Reference' placeholder='' col={12} />
                        </div>
                    </div>
                    <div className="row col-md-12">
                        <div className="col-md-6">
                            <Input type="text" label="Country" col={12} />
                            <Input icon='fas fa-plus' type="text" label="City" col={12} />
                        </div>
                        <div className="col-md-6">
                            <Input type="text" label="State" col={12} />
                            <Input type="text" label="Zip code" col={12} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressInvoicing;


