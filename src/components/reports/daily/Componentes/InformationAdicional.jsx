/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React} from 'react';
import {Input} from "../../../index";
import ModalSelectBacnkAccount from '../ModalSelectBacnkAccount'

const InformationAdicional = () =>{

    return(
        <>
            <div className="container">
                <div className="row">
                    <h5>Information Adicinal</h5>
                    <div className="col-md-12">
                        <Input
                            type="text"
                            label="Payment Type"
                            placeholder=""
                            col={12}
                        />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-2">
                        <Input
                            type="text"
                            label="Banck"
                            placeholder=""
                            col={12}
                        />
                    </div>
                    <div className="col-md-8">
                        <Input
                            type="text"
                            label="."
                            placeholder=""
                            col={12}
                        />
                    </div>
                    <div className="col-md-2">
                        <br/>
                        <ModalSelectBacnkAccount/>
                    </div>
                    <div className="col-md-12">
                        <Input
                            type="text"
                            label="Account"
                            placeholder=""
                            col={12}
                        />
                        <Input
                            type="text"
                            label="Merchet"
                            placeholder=""
                            col={12}
                        />
                        <Input
                            type="text"
                            label="Card Type"
                            placeholder=""
                            col={12}
                        />
                        <Input
                            type="text"
                            label="Auth ID"
                            placeholder=""
                            col={12}
                        />
                        <Input
                            type="text"
                            label="Reference"
                            placeholder=""
                            col={12}
                        />
                    </div>
                </div>
                <div className="row">
                    <h5>Application Infomation</h5>
                    <div className="col-md-6">
                        <Input
                            type="text"
                            label="Account Bank"
                            placeholder=""
                            col={12}
                        />
                    </div>
                    <div className="col-md-6">
                        <Input
                            type="text"
                            label="Name Bank"
                            placeholder=""
                            col={12}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InformationAdicional
