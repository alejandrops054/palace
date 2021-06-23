/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React,{useState} from 'react'
import { ModalBody, Modal } from 'reactstrap'
import ContentAuthentication from './ContentAuthentication'


const Authentication = ({setActiveOver}) =>{
    const [open2, setModal2] = useState(true);
    const toggle2 = () => {setModal2(!open2); setActiveOver(false)}
    return(
        <div>
      <Modal isOpen={open2} toggle={toggle2} size="lg">
            <ModalBody>
                <ContentAuthentication/>
            </ModalBody>
    </Modal>
        </div>
    )
}

export default Authentication