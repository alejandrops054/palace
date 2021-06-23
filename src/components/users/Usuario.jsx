/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import TablaUsuarios from './TablaUsuarios'
import { Button} from "../index";

const Usuario = () => {

    return(
        <>
        <div className="container">
            <label col={12}>Users</label>
            <div className="row">
                <Button className="btn btn-primary" type="button" title="Create Users" style={{width:'20%'}}/>
                <div className="col-md-12">
                    <TablaUsuarios/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Usuario