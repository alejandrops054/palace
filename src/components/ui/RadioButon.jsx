import React from 'react';
import '../../css/ui/RadioButon.css';
//label:etiqueta de tipo String

const RadioButon = ({label, col }) =>{
    return(
        <div className={`col-lg-${col} mb-3`}>
            <label>{label}</label>
            <div className="onoffswitch" >
                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" tabindex="0" checked ></input>
                <label className="onoffswitch-label" for="myonoffswitch">
                    <span className="onoffswitch-inner"></span>
                    <span className="onoffswitch-switch"></span>
                </label>
            </div>
        </div>
        
    )
}

export default RadioButon