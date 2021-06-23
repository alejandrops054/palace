/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React, { useState } from "react";
import {
  Row,
  Col,
} from "reactstrap";
import { Input, Button } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { addSocialMediaAction, deleteSocialMediaUserAction } from "../../redux/actions/socialMediaActions";

//Mensajes JSON
import LanguagesJSON from '../json/LanguagesEsMx.json'

import BeneficiariesSM from "./BeneficiariesSM";
import DataTable from 'react-data-table-component';

const ModalBeneficiariesSM = () => {
  const dispatch = useDispatch();
  const [smSelect, setsmSelect] = useState("");
  const [inputSM, setinputSM] = useState("");

  const socialMediaData = useSelector((state) => state.socialMedia.socialMedia);

  const onDelete = (keydeletesmben) => {
    dispatch(deleteSocialMediaUserAction(keydeletesmben))
  };

  const handleInputChange = (e) => {
    setinputSM(e.target.value);
  };

  const onAdd = (e) => {
    if (smSelect.length > 0 && inputSM.length > 0) {
      const datatable = {
        codesocialnetwork: smSelect,
        usersocialnetwork: inputSM,
      };
      setinputSM('')
      dispatch(addSocialMediaAction(datatable));
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
          if (socialMediaData.length > 1) {
            return (
              <Col lg="12" className="alert alert-danger" role="alert">
                <p>{datos.msgSocialMediaDeleteExit}</p>
              </Col>
            );
          } else {
            return (
              <Col lg="12" className="alert alert-primary" role="alert">
                <p>{datos.msgSocialMediaSave}</p>
              </Col>
            );
          }
        })}

        <Col lg="6">
          <Row className="justify-content-start">
            <Col lg="12">
              <BeneficiariesSM setsmSelect={setsmSelect} />
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

export default ModalBeneficiariesSM;
