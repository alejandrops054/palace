/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React, {useState} from 'react'
import Table from 'rc-table';
import {Modal, ModalBody} from "reactstrap";
import {Button} from '../index'
import AddNote from './AddNote'


// Data
import {data, columns} from './DataNotes'


const MemberNotes = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(!open)
    return (
        <div className="container">
            <div className="card">
                <div className="row">
                    <div className="col-lg-6">
                        <h3>Notes</h3>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end tables">
                        <Button onClick={
                                () => toggle()
                            }
                            title='Add'
                            col='1.5'
                            icon='fas fa-plus'
                            typebootstrap='link'
                            type='button'/>
                        <Button title='Delete' col='1.5' icon='fas fa-times' typebootstrap='link' type='button'/>
                        <Button title='Report' col='1.5' icon='fas fa-clipboard-list' typebootstrap='link main' type='button'/>
                    </div>
                </div>
                <div className="card-body table">
                    <Table id="resume-table"
                        columns={columns}
                        data={data}/>
                </div>
            </div>

            <Modal
                isOpen={open}
                toggle={toggle}
                size='md'>
                <form>
                    <ModalBody className="p-0 ">
                        <AddNote/>
                    </ModalBody>
                </form>
            </Modal>
        </div>
    )
}


export default MemberNotes


