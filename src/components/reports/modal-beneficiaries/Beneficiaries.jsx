/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import React from 'react';
import { InfoMembers, Button } from '../../index'

const Beneficiaries = () => {
    return (

        <>
        <i className="fas fa-edit d-flex justify-content-end"></i>
        <div className="d-flex">
            <InfoMembers
                title='Username'
                text='ISORIANO'
                color='#9BA2C6'
            />

            <InfoMembers
                title='Recrum'
                text='9440446'
            />

            <InfoMembers
                title='Date'
                text='11/21/2020'
            />

            <InfoMembers
                title='Category'
                text='--'
            />

        </div>

        <InfoMembers
            title='Note'
            color='#fff'
            text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
        />

        <div className='d-flex justify-content-end'>
            <Button icon={"fas fa-check"} typebootstrap="primary" col={12} style={{width:'100%'}}/>
        </div>
        </>
    );

}

export default Beneficiaries;