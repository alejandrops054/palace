import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const useSelect = (label, stateInicial, opciones,urlLink, icon, disabled) => {

    const [state, actualizarState] = useState(stateInicial);

    //options = [ { name: '', value: '' } ]
    const Select = ({id}) => (

        <>
        <div className='col-12 pb-3'>
            <label>  {label} </label>
            <div className="input-group">
                <select
                    id={id}
                    className='form-control'
                    onChange={ e => {actualizarState(e.target.value)} }
                    value={ state }
                    disabled = {disabled}
                >
                    <option>- Select an option -</option>

                    {opciones.map(opcion => ( 
                        <option key={opcion.recnum} value={opcion.value}>{opcion.name}</option>
                        ))
                    }

                </select>
                {icon ? (
          urlLink ? (
            <div className="input-group-append">
              <Link to={urlLink}>
                <button
                  className={`p-2 m-0 bg-primary text-white rounded ${icon}`}
                  htmlFor={label}
                >
                  {" "}
                </button>
              </Link>
            </div>
          ) : (
            <div className="input-group-append">
              <button
                className={`p-2 m-0 bg-primary text-white rounded ${icon}`}
                htmlFor={label}
              >
                {" "}
              </button>
            </div>
          )
        ) : null}
            </div>
        </div>
        </>

    );

    //Retornar el State, interfaz y funcion que modifica el State
    return [state, Select, actualizarState];
}
 
export default useSelect;