
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import React from 'react';
import logo from '../../assets/images/brand/systems-iso/intelligence-20.svg'
import Spinner from '../ui/Spinner'
import './splashScreenA.css';

function SplashScreenA() {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col align-self-center">
                    <div className="row mb-3">
                        <div className="col text-center">
                            <img width="35" src={logo} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <Spinner />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <span>Cargando</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SplashScreenA;