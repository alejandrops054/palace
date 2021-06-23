import React from 'react'

//title:titulo de boton
//col: tamaño de columna de bootstrap
//icon: clase del icono
//Se agrego prop onClick

const Button = ({title, col= '', icon='', typebootstrap='', type='', onClick, width='', borderRadius=''}) =>{
    return(
        <div className={`col-lg-${col} align-items-center`}>
            {onClick
                ?   <button onClick={()=>onClick()} className={`btn btn-${ typebootstrap }  d-block `} type={type} alt={title} title={title} style={{width, borderRadius}}>
                     {title} <i className={icon}></i>
                    </button>
                :   <button className={`btn btn-${ typebootstrap }  d-block m-auto`} type={type} alt={title} title={title} style={{width}}>
                <i className={icon}></i> {title}
                </button>  
            }
        </div>
    )
}

export default Button