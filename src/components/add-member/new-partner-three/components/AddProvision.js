
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import Input from '../../../ui/Input'
import Select from '../../../ui/Select'
import '../css/new-partner-three.css'

const AddProvision = () => {
    return (

        <div className="form-group">
            <div className="row">
                <h6>Basic information</h6>
            </div>
            <div className="row">
                <Input icon = {'search'} type={'text'} label={'Search permmission'} placeholder={'Value-Add Tax (%)'} ></Input>
                <Select type={'text'} label={'Search permmission'} col={4} ></Select>
                <Select type={'text'} label={'Search permmission'} col={4} ></Select>
            </div>
            <hr className="path"></hr>
        </div>

    );
}

export default AddProvision;