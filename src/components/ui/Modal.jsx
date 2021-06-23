import React from 'react'

const Modal = ({ component: Component, title, width=700}) => {
    return (
        <div className="modal fade">
            <div className="modal-dialog modal-dialog-centered">
                <div className="card" style={{ width: `${width}px`, margin:'0 auto' }}>
                    <div className="card-body">
                    <h3 className="card-title">{ title }</h3>

                    { Component }

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Modal;