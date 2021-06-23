/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import Input from '../../../ui/Input'
import Checkbox from '../../../ui/Checkbox'

const Search = () => {
    return (
        <>
        <div className="row">
            <Input type={'number'} label={'Value-Add Tax (%)'} placeholder={'Value-Add Tax (%)'} ></Input>
            <Input type={'number'} label={'Last change'} placeholder={'Last change'} ></Input>
            <div className="col-lg-4 filter-pandding">
                <button type="button" id="btn-filters" className="btn btn-link ml-2" alt="Filters" title="Filters"><i className="fas fa-filter"></i></button>
            </div>
        </div>

        <div className="row">
            <Input type={'number'} label={'Downgrade type'} placeholder={'Downgrade type'} ></Input>
            <Input type={'number'} label={'Portafolio'} placeholder={'Portafolio'} ></Input>
            <Input type={'number'} label={'Purchase date'} placeholder={'Purchase date'} ></Input>
        </div>
        <div className="row">
            <Input type={'number'} label={'Origin'} placeholder={'Origin'} ></Input>
            <div className="row">
                <Checkbox value={true} name={'payCommission'} label={'Pay Commission'} ></Checkbox>
                <Checkbox value={true} name={'requestInvoice'} label={'Request Invoice'} ></Checkbox>
            </div>
        </div>
        </>
    );
}

export default Search