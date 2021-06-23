/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react'
import Modal from '../ui/Modal'
import NewCreditCard from './NewCreditCard'

const ModalNewCreditCard = props => {
    return (
        <Modal title={'New credit card'}
        component={<NewCreditCard/>} />
    )
}



export default ModalNewCreditCard
