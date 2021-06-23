/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, {useState} from 'react'
import {Button, InfoMembers, AddMember} from '../index'
import {Modal, ModalBody} from "reactstrap";
import {Link} from 'react-router-dom'

const BeneficiariesModal = props => {
    const [open, setOpen] = useState(true)

    const toggle = () => setOpen(!open)

    return (
        <>
            <AddMember/>
            <Modal isOpen={open}
                toggle={toggle}
                size='lg'>
                <form>
                    <ModalBody className="p-0 ">
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h3>Beneficiaries</h3>
                                    </div>
                                    <div className="col-lg-6 d-flex justify-content-end tables">
                                        <Button col='1.5' icon='fas fa-edit' typebootstrap='link' type='button'/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <InfoMembers color='#fff' title="Username:" text="ISORIANO"/>
                                    </div>
                                    <div className="col-md-3">
                                        <InfoMembers title="Recrum:" text="9440446"/>
                                    </div>
                                    <div className="col-md-3">
                                        <InfoMembers title="Date:" text="11/21/2020"/>
                                    </div>
                                    <div className="col-md-3" type='button'>
                                        <InfoMembers title="Category:" text="--"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <InfoMembers color='#fff' title="Note:" text="Nulla orci turpi, porta in mi ut, volutpat sollicitudim leo. Fusce mollis hendreit purus, ac ultrices ex posuere et."/>
                                </div>
                                <div className="card-footer">
                                    <div className="row m-5">
                                        <div className="d-flex justify-content-end">
                                        <Link to='/new-member'>
                                            <Button  icon='fas fa-check' typebootstrap='primary btn-lg ' type='button'></Button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </ModalBody>

                </form>
            </Modal>


        </>
    )
}


export default BeneficiariesModal


