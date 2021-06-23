import React from 'react';
import {Link} from 'react-router-dom'
//icon: clase de Font-awesome
//type: text | number | password
//label: string
//placeholder: string
//col: columna de bootstrap

export default function Input ({icon, type='', label='', placeholder='', col='', onChange, name, value, disabled, onClick, url}){
  return (
    <div className={`col-lg-${ col } mb-3`}>
      <label>{ label }</label>
      <div className="input-group">
        <input onChange={ onChange } type={ type } placeholder={ placeholder } className='form-control' name={ name } value={ value } disabled = {disabled}/>
        {icon && url ?(<Link to={url}><button  onClick={onClick} className="input-group-addon btn btn-secondary" type="button" style={{borderTopRightRadius:'.3rem', borderBottomRightRadius:'.3rem'}}><i className={`${ icon }`}></i></button></Link> ) :null }
        {icon && !url?(<button  onClick={onClick} className="input-group-addon btn btn-secondary" type="button" style={{borderTopRightRadius:'.3rem', borderBottomRightRadius:'.3rem'}}><i className={`${ icon }`}></i></button>) :null }
      </div>
    </div>
  );
}




