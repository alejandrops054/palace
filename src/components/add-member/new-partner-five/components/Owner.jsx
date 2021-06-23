
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import Select from '../../../ui/Select'
import Checkbox from '../../../ui/Checkbox'
import PaymentWay from './PaymenWay'

const Owner = () => {
    return (
        <>
                <div className="row">
                    <div className='col'>
                        <label className="form-check-label" for="flexSwitchCheckChecked">Text recidence manifest</label>
                        <div className="form-check form-switch">
						    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
					    </div>
                    </div>
                    <Select label={'Nationality'} className={2} ></Select>
                </div>
                <div className="row">
                    <h6>Reasons</h6>
                </div>
                <div className="row">
                    <Checkbox value={true} name={'payCommission'} label={'Pago inicial en efectivo'} />
                    <Checkbox value={true} name={'requestInvoice'} label={'Pago con tarjeta de crédito y/o débito nacional'} />
                    <Checkbox value={true} name={'requestInvoice'} label={'Identificación y/o pasaporte nacional'} />
                </div>
                <hr className="path"></hr>
                <div className="row">
                <h6>Identifications</h6>
                </div>
                <div className="row">
                    <h6 className='col-lg-3'>Item</h6>
                    <h6 className='col-lg-3'>Origin</h6>
                    <h6 className='col-lg-3'>Show</h6>
                </div>
                <div className="row">
                    <span className='col-lg-3'>Passaport, imigration form</span>
                    <Select  col={3} />
                    <div className="col-lg-6">
                    <Checkbox value={true} name={'requestInvoice'} />
                    </div>
                </div>
                <div className="row">
                    <span className='col-lg-3'>Drive licence</span>
                    <Select  col={3} />
                    <div className="col-lg-6">
                    <Checkbox value={true} name={'requestInvoice'} />
                    </div>
                </div>
                <hr className="path"></hr>
                <PaymentWay/>
        </>
    );
}

export default Owner 