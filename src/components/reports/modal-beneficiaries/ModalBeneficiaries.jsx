/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import React from 'react';
import { Modal } from '../../index'
import Beneficiaries from './Beneficiaries'

const ModaleBeneficiaries = () => {
    return (
        <>
        <Modal
            title='Beneficiaries'
            component={<Beneficiaries/>}
        />
        </>
    );
}

export default ModaleBeneficiaries;