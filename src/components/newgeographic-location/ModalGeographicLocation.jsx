/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { useState, useEffect } from "react";
import {Modal,ModalHeader,ModalBody,ModalFooter,CardBody,Row,Col,Input,TabPane,Form,Button,Label,Card} from "reactstrap";
import {Input as InputUI} from '../index'
//import Table from "rc-table";
import DataTable from 'react-data-table-component';
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  getCitiesAction,
  selectGeoAction,
  cleanGeographicAction,
  updateNameCity,
} from "../../redux2/actions/memberActions";
import LanguagesJSON from '../json/LanguagesEsMx.json'
import Authentication from '../authentication-necesary/Authentication'

//Sweet Alerrt
import SweetAlert from 'react-bootstrap-sweetalert';


const ModalGeographicLocation = ({ setChargedGeographic, activeVisualButtonModal = false }) => {

  const [activeOver, setActiveOver] = useState(false);
  const act = () => setActiveOver(!activeOver)

  const dispatch = useDispatch();
  let buscador = useSelector((state) => state.member.Ciudad.data);


  const [activeChangeCity, setActiveChangeCity] = useState(false)
  const changeCity = () => setActiveChangeCity(!activeChangeCity);

  const [paginaactual, guardarPaginaActual] = useState(1);
  const [paginaconsulta, guardarConsultaActual] = useState(0);
  const [totalpaginas, guardarTotalPaginas] = useState(1000);
  const [perPage] = useState(10);
  const [warningAlert, setWarningAlert] = useState(false);
  const [authAlert, setAuthAlert] = useState(false);
  const [locationSelected, setLocationSelected] = useState(null);
  const [editActive, setEditActive] = useState(false);
  const [newCity, setNewCity] = useState(null);

  const [visualButtonModal, setVisualButtonModal] = useState(activeVisualButtonModal);
  const visualButtonModalF = () => {setVisualButtonModal(!visualButtonModal), set_city_name('')};


  const [searchCity, set_city_name] = useState("");

  const [dataTableCity, setdataTableCities] = useState([]);

  const handleSubmitGeographic = () => {
    guardarConsultaActual(0)
    guardarPaginaActual(1)
    if (searchCity === "") return;
    if (paginaconsulta === 0) dispatch(getCitiesAction(searchCity, paginaconsulta, perPage));
  };

  const handleInputChange = (e) => {
    set_city_name(e.target.value);
  };

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;
    const nuevaPaginaConsultaActual = paginaconsulta - 1;

    if (nuevaPaginaActual === 0 || searchCity === "") return;
    guardarPaginaActual(nuevaPaginaActual);
    guardarConsultaActual(nuevaPaginaConsultaActual);
    dispatch(getCitiesAction(searchCity, nuevaPaginaConsultaActual, perPage));
  };

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;
    const nuevaPaginaConsultaActual = paginaconsulta + 1;
    if (nuevaPaginaActual > totalpaginas || searchCity === "") return;
    guardarPaginaActual(nuevaPaginaActual);
    guardarConsultaActual(nuevaPaginaConsultaActual);
    dispatch(getCitiesAction(searchCity, nuevaPaginaConsultaActual, perPage));
  };

  const getData = (data) => {
    if (data) {

      setdataTableCities(data);
    }
  };

  const handleNewCity = (e) => {
    setNewCity(e.target.value);
  }

  useEffect(() => {
    getData(buscador);
  }, [paginaactual, buscador]);

  const columns1 = [
    {
      name: "Zip Code",
      selector: "PostalCode",
      sortable: true,
      width: '100px'
    },
    {
      name: "City",
      selector: "NOMBRE",
      sortable: true,
      width: '300px',
      cell: (row,index) => (
        <>
        {locationSelected !== null && locationSelected.RECNUM === row.RECNUM && editActive === true && (
       dataTableCity[index].NOMBRE = row.PlaceName
        ) || (
          row.NOMBRE
        )}
        </>
      )
    },
    {
      name: "State",
      selector: "EstadoDescripcion",
      sortable: true,
    },
    {
      name: "Country",
      selector: "PaisDescripcion",
      sortable: true,
    },
    {
      name: "Place Name",
      selector: "PlaceName",
      sortable: true,
    },
    {
      name: 'Select',
      selector: "but",
      button: true,
      cell: row => (
        <Button
          color="primary"
          onClick={() => {
            visualButtonModalF();
            dispatch(selectGeoAction(row));
            setChargedGeographic(true)
          }}
        >
          <i class="fas fa-map-marker-alt"></i>
        </Button>
      ),
    },
    {
      name: 'Change City',
      selector: "but",
      button: true,
      cell: row => (<Button
        color="secondary"
        onClick={() => {
          console.log("ROW", row);
          setWarningAlert(true);
          setLocationSelected(row);
        }}
      >
        <i class="fas fa-sync-alt"></i>
      </Button>)
    }


  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      }
    },
    headCells: {
      style: {
        fontSize: '20px',
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        fontSize: '15px',
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };


  return (
    <>
      {!activeVisualButtonModal 
      ? (<Button
        color="primary"
        onClick={visualButtonModalF}
        className="fas fa-globe-americas"
        size="lg"
      ></Button>) 
      : null}
      <Modal isOpen={visualButtonModal}  size="xl">
        <ModalHeader tag="h3">Geographic Location</ModalHeader>
        <ModalBody>
          <SweetAlert
            custom
            customIcon={<i className="far fa-question-circle fa-6x" style={{ color: '#66A3EC', height: 110 }}></i>}
            title={`¿Esta seguro de intercambiar el nombre de la cuidad?`}
            show={warningAlert}
            customButtons={
              <>
                <Row md={5}>
                  <Col lg="6">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="fa fa-times"
                      onClick={() => { setWarningAlert(false) }}
                    ></Button>
                  </Col>
                  <Col lg="6">
                    <Button
                      variant="primary"
                      size="lg"
                      className="fa fa-check"
                      onClick={() => { setAuthAlert(true); setWarningAlert(false); }}
                    ></Button>
                  </Col>
                </Row>
              </>
            }
          >

            Para continuar se solicitara Autorizacion. ¿Desea continuar?
        </SweetAlert>
          <SweetAlert
            custom
            customIcon={<i className="fas fa-lock fa-6x" style={{ color: '#66A3EC', height: 110 }}></i>}
            title={`Authentication Necessary`}
            show={authAlert}
            customButtons={
              <>
                <Row md={5}>
                  <Col lg="6">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="fa fa-times"
                      onClick={() => { setWarningAlert(false); setAuthAlert(false); setEditActive(false) }}
                    ></Button>
                  </Col>
                  <Col lg="6">
                    <Button
                      variant="primary"
                      size="lg"
                      className="fa fa-check"
                      onClick={() => { setAuthAlert(false); setEditActive(true) }}
                    ></Button>
                  </Col>
                </Row>
              </>
            }
          >
            <Card>
              <Form style={{ textAlign: 'left' }}>
                <p>The operation that was trying to do requires permission. Please fill tehe next fields</p>
                <h4>CHG_CITY</h4>
                <p>Permite cambiar la información de la ciudad</p>
                <h4>ChangeCity</h4>
                <Row>
                  <Col md={12}>
                    <Label for="userName">User Name</Label>
                    <Input type="text" name="name" id='userName' />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={6}>
                    <Label for="sendNote">
                      <Input type="checkbox" name="check" id="sendNote" checked/>
                    Send note
                  </Label>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={12}>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={12}>
                    <Label for="level">Level</Label>
                    <Input type='select' option={[]} />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={12}>
                    <Label for="authorized">Authorized by:</Label>
                    <Input type='select' option={[]} />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={12}>
                    <Label for="description">Description</Label>
                    <Input type='textarea' name='text' />
                  </Col>
                </Row>
              </Form>
            </Card>
          </SweetAlert>

          <CardBody>
            <TabPane>
              <Row className="d-flex">
                <Col lg="10">
                  <InputUI
                    type="text"
                    placeholder="City name or Zip Code.."
                    name="searchCity"
                    value={searchCity}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col lg="2">
                  <br />
                  <Button
                    size="md"
                    color="primary "
                    className="fas fa-search"
                    onClick={handleSubmitGeographic}
                  ></Button>
                </Col>
              </Row>

              <Row>
                <Col lg="12">

                  <DataTable
                    noHeader
                    rowKey={() => Math.random()}
                    className="table"
                    id="resume-table"
                    columns={columns1}
                    customStyles={customStyles}
                    data={dataTableCity}
                    noDataComponent=''
                    responsive
                    dense
                  />

                </Col>
              </Row>
              <div className="d-flex justify-content-end">

                {buscador == null || buscador.length <= 0 || paginaactual === 1 ? null : (
                  <Button
                    size="md"
                    color="primary "
                    onClick={paginaAnterior}
                  >
                    &laquo; Prev
                  </Button>
                )}

                {buscador == null ||buscador <=0  ?  null : <Button color="secondary">{paginaactual}</Button>}

                {buscador == null ||buscador==[] || buscador.length <= 9 || paginaactual === totalpaginas ? null : (
                  <Button
                    size="md"
                    color="primary"
                    onClick={paginaSiguiente}
                  >
                    Next &raquo;
                  </Button>
                )}

              </div>

            </TabPane>
          </CardBody>
        </ModalBody>
        <ModalFooter>
          <Row>
            <Col lg="6">
              <Button color="secondary" size='lg' onClick={() => { setVisualButtonModal(false); dispatch(cleanGeographicAction()) }}>
                <i class="fas fa-times"></i>
              </Button>
            </Col>
          </Row>

        </ModalFooter>
      </Modal>
    </>
  );
};


export default ModalGeographicLocation