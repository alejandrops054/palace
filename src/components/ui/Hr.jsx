import React from 'react'
//col: tamaño de columna de bootstrap

const Hr = ({col, aling }) =>{
    return(
        <hr className={`col-lg-${col} mb-12 ${aling}`}></hr>
    )
}

export default Hr