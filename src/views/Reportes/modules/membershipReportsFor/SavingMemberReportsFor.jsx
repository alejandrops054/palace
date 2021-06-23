/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, {useState} from 'react'
import { Spinner2 , Saved, Navigation, Header, MemberResume} from '../../../../components/index'
import { Modal, ModalBody } from "reactstrap";

const opacity = {
    opacity: 0.6,
    top: 200
}
const SavingMemberReportsFor = () => {
    const [loading, setLoading] = useState(false);

    setTimeout((toggle) => {
        setLoading(true);
    }, 5000);

    const component = !loading ? <Spinner2 /> : <Saved />

    const [open, setOpen] = useState(true);

    const toggle = () => setOpen(!open);

    return (
        <div className="App">
            <div className="page">
                <header id="menubar" className="app-header menu-bar">
                    <Navigation />
                </header>
                <section className="app-content">
                    <Header title={'Report editor'} icon={'fas fa-edit'} route1="Maintenance" route2="Report editor" />
                    <MemberResume/>
                    <main>
                     
                    </main>
                </section>
            </div>
            <Modal isOpen={open} toggle={toggle} size='md' style={opacity}>
                <ModalBody className="p-0 ">
                    <div className="modal-dialog modal-dialog-centered text-center p-5">
                        {component}
                    </div>
                </ModalBody>
            </Modal>
        </div>
      );
    };
    
export default SavingMemberReportsFor;