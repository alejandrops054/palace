/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React, { useState } from "react";
import {
  Row,
  Col
} from "reactstrap";
import { Input, Button } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { addSocialMediaAction, deleteSocialMediaUserAction } from "../../redux2/actions/memberActions";

//Mensajes JSON
import LanguagesJSON from '../json/LanguagesEsMx.json'

import CoOwnerSM from "./CoOwnerSM";
import DataTable from 'react-data-table-component';

const ModalCoOwnerSm = () => {
  const dispatch = useDispatch();
  const [smSelect, setsmSelect] = useState("");
  const [inputSM, setinputSM] = useState("");

  // const socialMediaData = useSelector((state) => state.socialMedia.socialMedia);
  const socialMediaData = useSelector((state) => state.member.SocialMedia.data);

  const onDelete = (keydelete) => {
    dispatch(deleteSocialMediaUserAction(keydelete))
  };

  const handleInputChange = (e) => {
    setinputSM(e.target.value);
  };

  const onAdd = (e) => {
    if (smSelect.length > 0 && inputSM.length > 0) {
      const datacoownersmtable = {
        codesocialnetwork: smSelect,
        usersocialnetwork: inputSM,
      };
      setinputSM('')
      dispatch(addSocialMediaAction(datacoownersmtable));
    };
  }


  const columns = [
    {
      name: "Social Media",
      selector: "codesocialnetwork",
      sortable: true
    },
    {
      name: "User",
      selector: "usersocialnetwork",
      sortable: true
    },
    {
      name: "",
      selector: "but",
      cell: row => (
        <Button
          icon="fas fa-trash-alt"
          typebootstrap="primary"
          onClick={(_) => {
            onDelete(row.usersocialnetwork);
          }}
        />
      ),
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      }
    },
    headCells: {
      style: {
        fontSize: '15px',
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        fontSize: '13px',
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };
  return (
    <>
      <Row>
        {LanguagesJSON.map((datos) => {

          if (socialMediaData.length > 0) {
            return (
              <p className="text-danger">{datos.msgSocialMediaDeleteExit}</p>
            );
          } else {
            return (
              <p className="text-primary">{datos.msgSocialMediaSave}</p>
            );

          }
        })}

        <Col lg="6">
          <Row className="justify-content-start">
            <Col lg="12">
              <CoOwnerSM setsmSelect={setsmSelect} />
            </Col>
            <Col lg="12">
              <Input
                icon="fas fa-plus"
                type="text"
                label="User"
                placeholder=""
                col={12}
                name="user"
                value={inputSM}
                onChange={handleInputChange}
                onClick={onAdd}
              />
            </Col>
          </Row>
        </Col>
        <Col lg="6">
          <Row>
            <Col lg="12">
              <DataTable
                noHeader
                className="table"
                id="resume-table"
                rowKey={() => Math.random()}
                customStyles={customStyles}
                columns={columns}
                data={socialMediaData}
                noDataComponent=''
                responsive
              />
            </Col>

          </Row>
        </Col>
      </Row>


    </>
  );
};

export default ModalCoOwnerSm;
