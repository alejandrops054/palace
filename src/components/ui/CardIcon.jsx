import React from 'react';
import { Link } from 'react-router-dom'


//title:titulo de card
//style:size es el tamaño del card
//icon: clase del icono de fontawesome

const CardIcon = ({title, size, icon, route}) =>{
    return(
        <Link to={ route } style={{textDecoration:'none'}}>
            <div className="carta btn">
                <div className="card text-center" style={{width: `${ size }rem`, height: '11.2rem'}}>
                    <div className="card-body">
                        <img className="col-6 mb-2" src={ `images/brand/systems-iso/${ icon }.svg` } alt={ icon }/>
                        <h5 className="card-title mt-3" style={{color: '#000'}}>{title}</h5>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardIcon