import React from "react";

//label: string
//textarea: text

const TextArea = ({ text ,label='', placeholder='', col=7 , name, value, onChange }) => {
    return (
      <div className={`col-lg-${col} mb-3`} >
        <label>{label}</label>
        <textarea placeholder={placeholder} className="form-control text-black" name={name} value={value} onChange={onChange}/>
      </div>
    );
  }
export default TextArea;
