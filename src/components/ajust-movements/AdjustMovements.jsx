/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React, useState} from 'react';
import {Input, Select, Checkbox, Button as ButtonUI} from "../index";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import validator from 'validator';



// Custome hooks
import {useForm, useSelect} from '../../hooks'


const AdjustMovements = () =>{
 /** Valores que se pintan en <Select/>  */
 const systemOptions = [
    {name: 'Alta', value: 'Alta'}, 
    {name: 'Baja', value: 'Baja'}
];
const ChangeTypeOptions = [
    {name: 'Mexican', value: 'Mexican'}, 
    {name: 'japan', value: 'japan'}, 
    {name: 'Brazilian', value: 'Brazilian'}, 
    {name: 'American', value: 'American'}
];
  /*Selects */
  //select System
  const [systemStatus, SelectSystem, resetSystem] = useSelect('System', '', systemOptions);
  //select Change Type
  const [changeTypeStatus, SelectChangeType, resetChangeType] = useSelect('Change Type', '', ChangeTypeOptions);

    const Titulo =[
        'Adjust Movements'
    ]

    const SubTitulo =[
        "71 -PVP MONEY"
    ]

    const adjustMovementsDefault = {
        concept:'',
        amount1:'',
        charge1:false,
        charge2:false,
        amount2:'',
        credit:false,
        chargecheck:false,
        months18:false,
        months24:false,
        months36:false,
        months46:false,
        system:'',
        changeType:'',
        hotel:'',
        folio:''
    }

    const [error, handledError] = useState(false);
    const [adjustMovements, handleadjustMovements] = useState({})

//Submit
const adjustMovementsSubmit = () => {
if(
    validator.isEmpty(inputs.concept) ||
    validator.isEmpty(inputs.amount1) ||
    validator.isEmpty(inputs.amount2) ||
    validator.isEmpty(systemStatus) ||
    validator.isEmpty(changeTypeStatus) ||
    validator.isEmpty(inputs.hotel) ||
    validator.isEmpty(inputs.folio) 
) {
    handledError(true)
    return
}
    handledError(false)
    inputs.system = systemStatus
    inputs.changeType = changeTypeStatus
    handleadjustMovements(inputs)
    reset()
    
}


//form
const {inputs, handleInputChange, handleSubmit, reset} = useForm(adjustMovementsDefault, adjustMovementsSubmit);

const {
concept,
amount1,
charge1,
charge2,
amount2,
credit,
chargecheck,
months18,
months24,
months36,
months46,
system,
changeType,
hotel,
folio}=inputs


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
       
        <>
        <Button variant="primary" onClick={handleShow}>
          {Titulo}
        </Button>
  
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose} animation={false}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{Titulo}<br/>{SubTitulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
         
              <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Movement</h5>
                            <Checkbox name="credit" label="Credit" value={credit} onChange={handleInputChange} />
                            <Checkbox name="chargecheck" label="Charge" value={chargecheck} onChange={handleInputChange}/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h5>Expiration</h5>
                            <Checkbox name="months18" label="18 Months"  value={months18} onChange={handleInputChange} />
                            <Checkbox name="months24" label="24 Months"  value={months24} onChange={handleInputChange}/>
                            <Checkbox name="months36" label="36 Months"  value={months36} onChange={handleInputChange}/>
                            <Checkbox name="months46" label="46 Months"  value={months46} onChange={handleInputChange}/>
                        </div>
                        <div className="col-md-8">
                            <Input
                                type="text"
                                label="Concept"
                                placeholder=""
                                col={12}
                                name="concept"
                                value={concept} 
                                onChange={handleInputChange}
                            />
                            {error?
                                            validator.isEmpty(concept) ? (<p className="text-danger">Required¡</p>) : null
                                             : null}
                            <Input
                                type="text"
                                label="Amount"
                                placeholder="$0.00"
                                col={12}
                                name="amount1"
                                value={amount1} 
                                onChange={handleInputChange}
                            />
                            {error?
                                            validator.isEmpty(amount1) ? (<p className="text-danger">Required¡</p>) : null
                                             : null}
                            <Checkbox name="charge1" col={4}label="Charge" />
                            <Checkbox name="charge2" col={4}label="Charge" />
                            <br/>
                            <Input
                                type="text"
                                label="Amount"
                                placeholder="$0.00"
                                col={12}
                                name='amount2'
                                value={amount2} 
                                onChange={handleInputChange}
                            />
                            {error?
                                            validator.isEmpty(amount2) ? (<p className="text-danger">Required¡</p>) : null
                                             : null}
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-6">
                            <SelectSystem/>
                            {error?
                                            validator.isEmpty(system) ? (<p className="text-danger">Required¡</p>) : null
                                             : null}
                            <Input
                                type="text"
                                label="Hotel"
                                placeholder=""
                                col={12}
                                name="hotel"
                                value={hotel} 
                                onChange={handleInputChange}
                            />
                            {error?
                                            validator.isEmpty(hotel) ? (<p className="text-danger">Required¡</p>) : null
                                             : null}
                        </div>
                        <div className="col-md-6">
                            <SelectChangeType/>
                            {error?
                                            validator.isEmpty(changeType) ? (<p className="text-danger">Required¡</p>) : null
                                             : null}
                            <Input
                                type="text"
                                label="Folio"
                                col={12}
                                name="folio"
                                value={folio} 
                                onChange={handleInputChange}
                            />
                            {error?
                                            validator.isEmpty(folio) ? (<p className="text-danger">Required¡</p>) : null
                                             : null}
                        </div>
                    </div>
              </div>
              
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              Search reserve
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <ButtonUI title="Aceptar" col={2} typebootstrap="primary " type="submit"/> 
          </Modal.Footer>
          </form>
        </Modal>
      </>
    )
}

export default AdjustMovements