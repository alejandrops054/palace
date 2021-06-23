
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { Spinner2 } from "../../../components/index";

const imagen = 'images/svg/icon-success.svg'

const ExcelentJob = ({ setMember, setIsActive }) => {

    const [loading, setLoading] = useState(true);

    const history = useHistory();

    const redirectMemberResume = () => {
        setMember(false);
        setIsActive(0);
    }

    useEffect(() => {
        const stayLoading = () => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
        stayLoading();
    }, []);

return (
    <>
        {
            loading
            ?(  <div className="container mt-5 pt-5">
                    <div className="text-center mt-5 pt-5">
                        <Spinner2/>
                    </div>
                </div>
            )

            : (
                <div className="container text-center pt-5">
                    <img src={ imagen } alt="yes" className="w-25"/>
                    <h2>Excelent Job!</h2>
                    <h1>We have stored John Doe</h1>
                    <h1>You are able to review it in the home page</h1>
                    <button
                        className="btn btn-primary"
                        onClick={ redirectMemberResume }
                    >Take me to the home</button>
                </div>
            )

        }
    </>

);

};

export default ExcelentJob;