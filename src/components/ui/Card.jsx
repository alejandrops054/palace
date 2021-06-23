import React from 'react'
//title:titulo de card
//align: center, right, left
//component: componente a pintar en pantalla
//texto: para mostrar un <p>
//size: es el tamaño del  (rem)
//col: tamaño de columna bootstrap

const Card = ({title, aling, component, texto, size, col}) =>{

    return(
        <div className={`card text-${aling} col-lg-${col} mb-10`} style={{width: `${ size }rem;`}}>
            <div className="card-body">
                {/* <i className="fas fa-user-plus"></i> */}
                <h3 className="card-title">{title}</h3>
                {texto===""?<p className={"card-text"}>{texto}</p>:null}
                { component }
            </div>
        </div>
    )
}

export default Card