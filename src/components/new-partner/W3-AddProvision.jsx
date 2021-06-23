/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import { Modal } from '../index'
import BasicInfoForm from './BasicInfoForm';
import UnlimitedForm from './UnlimitedForm'

const AddProvision = () => {
    return (
        <>
        <Modal
            title={'Basic Information'}
            component={<BasicInfoForm/>}
        />
        <br/>
        <Modal
            title={'Unlimited golf'}
            component={<UnlimitedForm/>}
        />
        </>
    );
}

export default AddProvision;