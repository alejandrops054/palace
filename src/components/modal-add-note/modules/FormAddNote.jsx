/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Input, Checkbox, TextArea, Button } from "../../index";

//redux
//import { useDispatch, useSelector } from 'react-redux';
import { createNewNoteAction } from '../../../redux/actions/notesActions';


const FormAddNote = () => {

    // const [checkbox, setCheckbox] = useState()

    //const dispatch = useDispatch();

    //const addNote = note => dispatch( createNewNoteAction(note) );

    const submitAddNote = e => {

    //validar los campos

    //si todo es ok

    //crear la nota

    }

    const handlerCheckbox = () => {

    }

    const options = [
        { name: 'option 1', value: 1 },
        { name: 'option 2', value: 2 },
        { name: 'option 3', value: 3 },
    ];

    const priority = [
        { name: 'priority 1', value: 1 },
        { name: 'priority 2', value: 2 },
        { name: 'priority 3', value: 3 },
    ];

  return (
    <form className='p-3'>
        <div className='row mb-3'>
            <div className='col-6'>
                <label> Code </label>
                <div className="input-group">
                    <select className="form-control">

                        {options.map( option => (
                            <option key={option.name} value={option.value} >{option.name}</option>
                        ))}

                    </select>
                </div>

            </div>
            <div className='col-6'>
                <label> Priority </label>
                <div className="input-group">
                    <select className="form-control">

                        {priority.map( priority => (
                            <option key={priority.name} value={priority.value} >{priority.name}</option>
                        ))}

                    </select>
                </div>
            </div>
        </div>

        <div className="d-flex">
            <div className="col-lg-6">
                <label className="ml-3">level</label>
                <div className='d-flex align-items-center'>
                    <div className="checkbox_input mr-3">
                        <input type="checkbox" name='low' value='low' onChange={ handlerCheckbox }/>
                        <span className="checkmark"></span>
                    </div>
                    Low
                </div>

                <div className='d-flex align-items-center'>
                    <div className="checkbox_input mr-3">
                        <input type="checkbox" name='normal' value='normal' onChange={ handlerCheckbox }/>
                        <span className="checkmark"></span>
                    </div>
                    Normal
                </div>

                <div className='d-flex align-items-center'>
                    <div className="checkbox_input mr-3">
                        <input type="checkbox" name='interval' value='interval-reinscription'onChange={ handlerCheckbox }/>
                        <span className="checkmark"></span>
                    </div>
                    Interval-reinscription
                </div>

                <div className='d-flex align-items-center'>
                    <div className="checkbox_input mr-3">
                        <input type="checkbox" name='high' value='high'onChange={ handlerCheckbox }/>
                        <span className="checkmark"></span>
                    </div>
                    High
                </div>

                {/* <Checkbox name="Low" value="Low" label="Low" />
                <Checkbox name="Normal" value="Normal" label="Normal" />
                <Checkbox name="Interval-reinscription" value="Interval-reinscription" label="Interval-reinscription" />
                <Checkbox name="High" value="High" label="High" /> */}
            </div>

            <div className="col-lg-6">
                <Input
                    type="Date"
                    label="Entry Date"
                    placeholder="MM/DD/YY"
                    col={16}
                />
            </div>
        </div>

        <div className='mt-3'>
            <TextArea
                label="Note"
                placeholder="Venta pactada al 50% y pagada al 50%"
                col='12'
            />
        </div>

        <div className='ml-3'>
            <Checkbox name="Low" value="special" label="Is this guest Special?" />
        </div>

        <div className="d-flex col-12 justify-content-end mt-3">
            <Button icon="fas fa-times" col={4} typebootstrap='primary'/>
            <Button icon="fas fa-check" col={4} typebootstrap='success'/>
        </div>
    </form>
  );
};

export default FormAddNote;
