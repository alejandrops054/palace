import React from "react";

//name: string
//value: string | number
//label: string

const Checkbox = ({ name, value, label, col, onChange, checked }) => {
  return (
    <div className={`col-lg-${col}  d-flex align-items-center`}>
      <div className="checkbox_input mr-3">
        <input type="checkbox" name={ name ?name :''} value={ value ?value :'' } onChange={onChange} checked={checked}/>
        <span className="checkmark"></span>
      </div>{' '}
      { label ? label :null }
    </div>
  );
};

export default Checkbox;
