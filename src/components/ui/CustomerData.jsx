import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Note, Chart, AddNote } from "../index";


const CustomerData = () => {
  const notes = 2;
  const imageUnknowUserPath = 'images/svg/unknown-user.svg'

  const infoMember = {
    // name: "John Doe",
    // imagePath: "images/svg/unknown-user.svg",
    // typeMember: "New Member",
    // age: 32,
    // office: "Sunrise",
    // project: "Palace Elite",
    // application: "1234567",
    // currentamount: 2500,
    // totalamount: 12000,
  };

  const [classname, setClassname] = useState("list-container");

  const handleNoteClassName = () => {
    if (classname === "list-container") {
      setClassname("list-container toggled");
    } else {
      setClassname("list-container");
    }
  };

  const [open, setOpen] = useState(false)

  const toggle =()=>setOpen(!open)


  return (
    <aside>
        <div className="customer-data">
            <nav className="notes-list">
                <button
                    className="btn-notes active"
                    alt="Notes on user"
                    title="Notes on user"
                >
                    <i className="fas fa-sticky-note"></i>
                    { notes != 0 ?<span className="badge" onClick={handleNoteClassName}> {notes} </span> :null }
                </button>

                <Note className={classname} />
            </nav>

            <div className="customer-resume">
                {/* <div className="customer-avatar">
                    <div className="customer-photo">
                        <img src={!infoMember.imagePath ?imageUnknowUserPath :infoMember.imagePath} alt="member" />
                    </div>

                    <button
                        className="btn-photo"
                        alt="upload-photo"
                        title="upload-photo"
                    > <i className="fas fa-camera"></i>
                    </button>
                </div> */}

                <div className="customer-meta">
                    <h2>{!infoMember.name ?"Member's Name" :infoMember.name}</h2>
                    <label>{infoMember.typeMember}</label>
                </div>

                {infoMember != null
                    ?null
                    :(<>
                        <table className="data-resume table-responsive">
                            <tbody>
                                <tr>
                                    <th scope="col">
                                        <i className="fas fa-birthday-cake"></i> Age:
                                    </th>
                                    <td>{infoMember.age}</td>
                                </tr>
                                <tr>
                                    <th>
                                        <i className="fas fa-briefcase"></i> Office:
                                    </th>
                                    <td>{infoMember.office}</td>
                                </tr>
                                <tr>
                                    <th>
                                        <i className="fas fa-hotel"></i> Project:
                                    </th>
                                    <td>{infoMember.project}</td>
                                </tr>
                                <tr>
                                    <th>
                                        <i className="fas fa-paste"></i> Application:
                                    </th>
                                    <td>{infoMember.application}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3> Benefits current amount{" "} <span >{`$${infoMember.currentamount}`}</span> /{" "} <span >{`$${infoMember.totalamount}`}</span> </h3>
                        <Chart />
                    </>)
                }


            </div>
        </div>

        <button
            className="btn btn-primary btn-lg d-block m-auto"
            alt="Add note"
            title="Add note"
            onClick={ ()=>toggle() }
        >
            {" "}
            <i className="fas fa-sticky-note mr-1"></i>
            Add note
        </button>

        <Modal isOpen={open} toggle={toggle} size='md'>
            <form>
                <ModalHeader>  Add Note </ModalHeader>
                <ModalBody className="p-0 ">
                    <AddNote/>
                </ModalBody>
            </form>
        </Modal>

    </aside>
  );
};

export default CustomerData;