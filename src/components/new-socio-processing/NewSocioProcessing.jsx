import React from 'react';
const tamaño = {
    display: "block",
    margin: '0 auto',
    height: "500px"
}
const NewSocioProcessing = () => {


    return (
        <div>
        <div className="d-flex align-items-center justify-content-center" style={tamaño}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        <h2 className="d-flex justify-content-center">We are processing the data pleace wait</h2>
        </div>
    );
}

export default NewSocioProcessing;