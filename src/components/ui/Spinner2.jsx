import React from 'react'
import '../../css/ui/spinner.css';

function Spinner2({ title = "" }) {

    return (
        <>
            <div className="container mx-auto">


                <div className="sk-chase mx-auto">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                </div>
                {title ? <h6 className="mt-4 text-dark">{title}</h6>
                       : <h6 className="mt-4 text-dark">We are saving your changes, <br /> please wait</h6>}

            </div>
        </>

    );
}

export default Spinner2;