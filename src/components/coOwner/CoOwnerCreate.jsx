/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Label,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";
import { Input, TextArea } from "../index";

import Button from "react-bootstrap/Button";
import validator from "validator";
import useFetchGet from "../../hooks/useFetchGet";
// Data CoOwner
// import {columns} from "./DataCoOwner";
// Custome hooks
import { useForm, useSelect } from "../../hooks";
//conexion microservice
import { urlNationality, urlSocialMedia } from "../../webservice/memberService";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { postCoOwnerAction,deleteSocialMediaAction, deleteEmailAction, postEmailAction } from "../../redux2/actions/memberActions";
import InputGroupWithExtras from "react-bootstrap/esm/InputGroup";
import ModalGeographicLocation from '../newgeographic-location/ModalGeographicLocation'
import ModalCoOwnerSM from './ModalCoOwnerSM'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CoOwnerEmail from './CoOwnerEmail'
import { deleteGeoAction } from '../../redux/actions/buscadorGeographicActions'

//Mensajes JSON
import classnames from 'classnames';
import LanguagesJSON from '../json/LanguagesEsMx.json'

export const CoOwnerCreate = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const toggle = () => { setOpen(!open); setChargedGeographic(false) }
  const [homephone, sethomephone] = useState()
  const [cellphone, setcellphone] = useState()
  const [officephone, setofficephone] = useState()
  const [faxphone, setfaxphone] = useState()
  const [chargedGeographic, setChargedGeographic] = useState(false)

  const SMData = useSelector((state) => state.member.SocialMedia.data);
  const coOwnerTableData = useSelector((state) => state.member.CoOwners.data);
  const emailData = useSelector((state) => state.member.Email.email);
  // const coOwnerTableData = useSelector((state) => state.coowner.coOwners);
  // let selectGeoTable = useSelector((state) => state.geographicLocation.selectCity);
  let selectGeoTable = useSelector((state) => state.member.Ciudad.selectedCity);


  const [activeTab, setActiveTab] = useState("1");
  const toggleNav = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  // const SMData = useSelector((state) => state.socialMedia.socialMedia);
  // const EmailData = useSelector((state) => state.email.email);


  const resetForm = (_) => {
    reset();
    resetSelectStatus("A");
    resetSelectNationality("");
    handledError(false);
    country_code = '';
    state_code = '';
    city_code = '';
    zip = '';
    cityname = '';
  };

  const defaultDataOwner = {
    /* RECNUM: ,
    COOWNER_ID: "12345", */
    application: "1000049",
    first: "",
    last: "",
    address: "",
    country_code: "",
    state_code: "",
    city_code: "",
    zip: "",
    home_phone: "",
    cell_phone: "",
    office_phone: "",
    fax_phone: "",
    email: "",
    email_confirm: "",
    company: 5,
    birthday: "",
    add_to_interval: 0,
    country_tel_code: "",
    area_code: "",
    user: "",
    codesocialnetwork: "",
    usersocialnetwork: "",
    idrelacionclubprofile: 262726,
    title: "",
    cityname: "",
    lada_home: "",
    lada_office: "",
    lada_cell: "",
    lada_fax: "",
    rec_acc: "n",
    socialsecuritynumber: "123456"
  }
  // socialNetworkData: []
  /* area_code: "",
  didreinvestment: false,
  socialsecuritynumber: "",
//  ssnreason: 0,
 // priority: 0,
  lada_home: "",
  lada_office: "",
  lada_cell: "",
  lada_fax: "",
  rec_acc:''
};
*/

  const OwnerSubmit = () => {
    if (
      validator.isEmpty(inputs.last) ||
      validator.isEmpty(inputs.first)
      //!validator.isLength(inputs.IDPROFILEOPERA, { min: 1, max: 15 })
    ) {
      /**Si algun campo esta vacio activa el state error */
      handledError(true);
      return;
    }
    /*Se deshabilita la carga del error de los inputs */
    handledError(false);
    /*Se agrega estado que proveniente de el Hook useSelect*/
    inputs.status = statusCoSelect;
    inputs.nationality = SelectNationalityOptions;
    inputs.codesocialnetwork = SelectSocialMediaOptions;
    let smdatapost = [{
      "codesocialnetwork": "FACE",
      "usersocialnetwork": "www.FACE.com/MS-face"
    }];

    //inputs.socialNetworks = SMData;
    inputs.socialNetworks = smdatapost;
    dispatch(deleteSocialMediaAction())

    delete inputs.cityname;
    delete inputs.usersocialnetwork;
    delete inputs.codesocialnetwork;


    /*Proceso de asignacion de telefonos */
    let homepc, cellpc, officepc, faxpc = "";
    homepc = homephone;
    cellpc = cellphone;
    officepc = officephone;
    faxpc = faxphone;
    inputs.lada_home = (homepc !== undefined ? homepc.substr(0, 3) : "")
    inputs.lada_cell = (cellpc !== undefined ? cellpc.substr(0, 3) : "")
    inputs.lada_office = (officepc !== undefined ? officepc.substr(0, 3) : "")
    inputs.lada_fax = (faxpc !== undefined ? faxpc.substr(0, 3) : "")
    inputs.home_phone = (homepc !== undefined ? homepc.substr(3, 17) : "")
    inputs.cell_phone = (cellpc !== undefined ? cellpc.substr(3, 17) : "")
    inputs.office_phone = (officepc !== undefined ? officepc.substr(3, 17) : "")
    inputs.fax_phone = (faxpc !== undefined ? faxpc.substr(3, 17) : "")
    inputs = {
      ...inputs,
      socialNetworkData: SMData

    }
    /*se agrega la informacion de email y se manda el post */
    let dataTableEmail = [];
    let dataemail = {};

    if (EmailData.length > 0) {
      EmailData.map((e) => {
        dataemail = {
          email: e.email,
          company: "5",
          application: "1000049",
          idrelacionclubprofile: "",
          anexoa: "",
          sendpromotions: "",
          Idprofileopera: e.idprofileopera
        };
        dataTableEmail.push(dataemail);
      });
    }

    if (selectGeoTable.length > 0) {
      const { EstadoDescripcion, ESTATUS, IDCIUDAD, IDESTADO, IDPAIS, NOMBRE, PaisDescripcion, PostalCode } = selectGeoTable
      inputs.country_code = IDPAIS;
      inputs.state_code = IDESTADO;
      inputs.city_code = IDCIUDAD;
      inputs.zip = PostalCode;
      inputs.cityname = NOMBRE;
      inputs.countryname = PaisDescripcion
      inputs.statename = EstadoDescripcion
    }else {
      inputs.country_code = "";
      inputs.state_code = "";
      inputs.city_code = "";
      inputs.zip = "";
      inputs.cityname = "";
      inputs.countryname = ""
      inputs.statename = ""
    }
    /*Se agrega la informacion del coOwner a la funcion padre GuestInformationView */
    agregarCoOwner(inputs);
    //agregarEmailCoOwner(dataTableEmail);

    dispatch(deleteEmailAction())
    dispatch(deleteGeoAction())
    /*reset a campos input y select */
    sethomephone('')
    setcellphone('')
    setofficephone('')
    setfaxphone('')
    resetForm();
    resetSelectSocialMedia("");
    toggleNav("1");
    setChargedGeographic(false)
  };

  useEffect(() => {
    resetSelectStatus("A");

  }, []);
  function Alertpost() {
    {/*funcion de despliegue de mensajes de aler de se guardaron datos*/ }
    if (validator.isEmpty(inputs.last) || validator.isEmpty(inputs.first) && inputs.lada_home && inputs.lada_cell && inputs.lada_office) {
      {
        LanguagesJSON.map((datos) => {
          alert(JSON.stringify(datos.msgLostUnsavedChange));
        })
      }
      handledError(true);
      return;
    } else {
      {
        LanguagesJSON.map((datos) => {
          alert(JSON.stringify(datos.msgChangeSaved));
        })
      }
    }
  }

  const { inputs, handleInputChange, handleSubmit, reset } = useForm(
    defaultDataOwner,
    OwnerSubmit
  );

  let {
    application,
    first,
    last,
    address,
    country_code,
    state_code,
    city_code,
    accoutin,
    zip,
    home_phone,
    cell_phone,
    office_phone,
    fax_phone,
    email,
    email_confirm,
    codesocialnetwork,
    usersocialnetwork,
    idrelacionclubprofile,
    rec_acc,
    title,
    cityname,
    lada_home,
    lada_office,
    lada_cell,
    lada_fax,
    socialNetworkData
    /* status,
    user, */
    /* ,
    didreinvestment,
    socialsecuritynumber,
    ssnreason,
    priority,
    lada_home,
    lada_office,
    lada_cell,
    lada_fax*/
  } = inputs;



  const agregarCoOwner = (coOwner) => dispatch(postCoOwnerAction(coOwner));
  const agregarEmailCoOwner = (email) => dispatch(postEmailAction(email));
  const [error, handledError] = useState(false);

  const optionsSM = [
    { recnum: 0, name: "FACEBOOK", value: "FACEBOOK" },
    { recnum: 1, name: "GOOGLE", value: "GOOGLE" },
    { recnum: 2, name: "INSTAGRAM", value: "INSTAGRAM" },
    { recnum: 3, name: "TWITTER", value: "TWITTER" },
  ];
  const {
    data: dataSocialMediaOptions,
    loading: loading1,
    error: error1,
  } = useFetchGet(urlSocialMedia);

  const dataSocialMedia = [];

  if (dataSocialMediaOptions !== null && dataSocialMediaOptions.length > 0) {
    dataSocialMediaOptions.map((data) => {
      dataSocialMedia.push({
        recnum: data.Recnum,
        name: data.DescripcionSocialNetwork,
        value: data.CodeSocialNetwork,
      });
    });

    var [
      SelectSocialMediaOptions,
      SelectSocialMedia,
      resetSelectSocialMedia,
    ] = useSelect("Social Media", "", dataSocialMedia);
  } else {
    var [
      SelectSocialMediaOptions,
      SelectSocialMedia,
      resetSelectSocialMedia,
    ] = useSelect("Social media", "", optionsSM);
  }

  /** Valores que se pintan en <Select/> */
  const statusOptions = [
    { recnum: 0, name: "Alta", value: "A" },
    { recnum: 1, name: "Baja", value: "B" },
  ];

  const nationalityOptions = [
    { recnum: 0, name: "Mexico", value: "Mexico" },
    { recnum: 1, name: "CUBA", value: "CUBA" },
  ];

  const {
    data: dataNationalityOptions,
    loading,
    errorOfficeSelect,
  } = useFetchGet(urlNationality);

  const dataNationality = [];

  if (dataNationalityOptions !== null && dataNationalityOptions.length > 0) {
    dataNationalityOptions.map((data) => {
      dataNationality.push({
        recnum: data.RECNUM,
        name: data.DESCRIPTION,
        value: data.DESCRIPTION,
      });
    });

    var [
      SelectNationalityOptions,
      SelectNationality,
      resetSelectNationality,
    ] = useSelect("Nationality", "", dataNationality);
  } else {
    var [
      SelectNationalityOptions,
      SelectNationality,
      resetSelectNationality,
    ] = useSelect("Nationality", "", nationalityOptions);
  }

  /*Selects */
  const [statusCoSelect, SelectStatus, resetSelectStatus] = useSelect(
    "Status",
    "",
    statusOptions
  );

  if (selectGeoTable && chargedGeographic) {
    //console.log('dsta ciudades selec',selectGeoTable)
    const { EstadoDescripcion, ESTATUS, IDCIUDAD, IDESTADO, IDPAIS, NOMBRE, PaisDescripcion, PostalCode } = selectGeoTable
    const setInputGeo = _ => {
      country_code = PaisDescripcion;
      state_code = EstadoDescripcion;
      city_code = NOMBRE;
      zip = PostalCode;
      cityname = NOMBRE;
    }
    setInputGeo()
  }

  const openmodal = () => {
    toggle()
    toggleNav("1")
  }

  {/*
    function errorLimit(){
    {/*Funcion de despriegue de msgAddCoownerReinvestment */}
  {/*if(coOwnerTableData.length >= 5){
      {LanguagesJSON.map((datos)=>{ 
        alert(JSON.stringify(datos.msgAddCoownerReinvestment));
      })}
    }
  }
  */}

  return (
    <>

      <Button
        disabled={(coOwnerTableData.length >= 5 ? true : false)}
        variant="link"
        typebootstrap="link main"
        className="fas fa-plus"
        onClick={() => { openmodal(); dispatch(deleteEmailAction()); }}
      ></Button>

      <Modal isOpen={open} toggle={toggle} size="lg">
        <form onSubmit={handleSubmit}>
          <ModalHeader>CoOwner information</ModalHeader>
          <ModalBody className="p-0 ">
            <Card>

              {/*LanguagesJSON.map((datos)=>{
              if(handleSubmit >= 1){
                return(
                  <Col lg="12" className="alert alert-primary">
                    <p>{datos.msgChangeSaved}</p>
                  </Col>
                    )
                  }
              
              })*/}

              {/* <Row>
                    <Col md={6}>
                      <Table className="table" id="resume-table" columns={columns} data={data} scroll={{ x:100 }}  style={{ width:750}}/>
                    </Col>
                  </Row> */}
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => {
                      toggleNav("1");
                    }}
                  >
                    General info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => {
                      toggleNav("2");
                    }}
                  >
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '3' })}
                    onClick={() => {
                      toggleNav("3");
                    }}
                  >
                    Social Media
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row className="justify-content-start">
                    <Col lg="6">
                      <Input
                        type="text"
                        label="CoOwner ID"
                        col={12}
                        name="COOWNER_ID"
                        //value={COOWNER_ID}
                        /*onChange={handleInputChange}*/
                        placeholder="0"
                        disabled
                      />
                    </Col>
                    <Col lg="6">
                      <Input
                        type="text"
                        label="ID Profile Opera"
                        col={12}
                        name="IDPROFILEOPERA"
                        //value={IDPROFILEOPERA}
                        onChange={handleInputChange}
                        disabled
                      />
                    </Col>
                    <Col lg="6">
                      <Input
                        type="text"
                        label="Title"
                        col={12}
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col lg="6">
                      <SelectStatus />
                    </Col>
                    <Col lg="6">
                      <Input
                        type="text"
                        label="Last name"
                        col={12}
                        name="last"
                        value={last}
                        onChange={handleInputChange}
                      />
                      {error ? (
                        validator.isEmpty(last) ? (
                          <p className="text-danger">Required!</p>
                        ) : null
                      ) : null}
                    </Col>

                    <Col lg="6">
                      <Input
                        type="text"
                        label="First name"
                        col={12}
                        name="first"
                        value={first}
                        onChange={handleInputChange}
                      />
                      {error ? (
                        validator.isEmpty(first) ? (
                          <p className="text-danger">Required!</p>
                        ) : null
                      ) : null}
                    </Col>


                  </Row>
                  <Row lg="12">
                    <emailInvalido />
                  </Row>
                  <Row lg="12">
                    <TextArea
                      label="Address"
                      name="address"
                      placeholder=""
                      col={12}
                      value={address}
                      onChange={handleInputChange}
                    />
                    {/* {error ? validator.isEmpty(ADDRESS) ? (<p className="text-danger">Required¡</p>) : null: null } */}
                  </Row>
                  {/* -----------------------------------modal geographic--------------------------------- */}
                  <Row className="pt-4 pb-4">
                    <Col lg="6">
                      <ModalGeographicLocation setChargedGeographic={setChargedGeographic} />
                               Geographic Location
                        </Col>
                  </Row>
                  {/* -----------------------------------modal geographic--------------------------------- */}

                  <Row>
                    <Col lg="6">
                      <Input
                        type="text"
                        label="Country"
                        placeholder=""
                        col={12}
                        name="country_code"
                        value={country_code}
                        onChange={handleInputChange}
                        disabled
                      />
                      {/* {error ?validator.isEmpty(COUNTRYNAME) ? (<p className="text-danger">Required¡</p>) : null: null */}
                    </Col>
                    <Col lg="6">
                      <Input
                        type="text"
                        label="State"
                        placeholder=""
                        col={12}
                        name="state_code"
                        value={state_code}
                        onChange={handleInputChange}
                        disabled
                      />
                      {/* {error ?validator.isEmpty(STATENAME) ? (<p className="text-danger">Required¡</p>) : null: null */}
                    </Col>
                    <Col lg="6">
                      <Input
                        type="text"
                        label="City"
                        placeholder=""
                        col={12}
                        name="cityname"
                        value={cityname}
                        onChange={handleInputChange}
                        disabled
                      />
                      {/* { error ?validator.isEmpty(CITYNAME) ? (<p className="text-danger">Required¡</p>) : null: null } */}
                    </Col>
                    <Col lg="6">
                      <Input
                        type="text"
                        label="Zip code"
                        placeholder=""
                        col={12}
                        name="zip"
                        value={zip}
                        onChange={handleInputChange}
                        disabled
                      />
                      {/* {error ?validator.isEmpty(ZIP) ? (<p className="text-danger">Required¡</p>) : null: null } */}
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      {/* <Select label="Nationality" opciones={nationalityOptions} col={12} name="nationality" value={nationality}/> */}
                      <SelectNationality />
                      {/* {error? validator.isEmpty(SelectNationalityOptions) ? (<p className="text-danger">Required¡</p>) : null: null} */}
                    </Col>
                    <Col lg="6">
                      {/*<br/>
                          <Checkbox name="checkRow3"  col={12}name="accoutin" value={accoutin} label=" Accoutin" />*/}
                    </Col>
                  </Row>
                  <Row>
                    {/* <Col lg='6'>
                          <Checkbox label="Accounting" name="check1"value={check1}onChange={handleInputChange}/>
                        </Col> */}
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col lg="6">
                      <Label>Home phone</Label>
                      <PhoneInput
                        international
                        placeholder=""
                        value={homephone}
                        onChange={sethomephone} />
                    </Col>
                    <Col lg="6">
                      <Label>Cell phone</Label>
                      <PhoneInput
                        international
                        placeholder=""
                        value={cellphone}
                        onChange={setcellphone} />
                    </Col>
                    <Col lg="6">
                      <Label>Office phone</Label>
                      <PhoneInput
                        international
                        placeholder=""
                        value={officephone}
                        onChange={setofficephone} />
                    </Col>
                    <Col lg="6">
                      <Label>Fax phone</Label>
                      <PhoneInput
                        international
                        placeholder=""
                        value={faxphone}
                        onChange={setfaxphone} />
                    </Col>
                  </Row>
                   <CoOwnerEmail /> 
                </TabPane>
                <TabPane tabId="3">
                   <ModalCoOwnerSM /> 
                </TabPane>
              </TabContent>
            </Card>
          </ModalBody>
          {/* <ModalFooter>
              <div className='d-flex justify-content-end'>
                  <Button 
                      icon='fas fa-plus'
                      title='Add New'
                      typebootstrap='primary'
                      type='button'
                      onClick={()=>resetForm()}
                    />
                </div>
            </ModalFooter> */}
          {/*Footer */}
          <Row md={5}>
            <Col lg="6"></Col>
            <Button
              variant="secondary"
              size="lg"
              className="fa fa-times"
              onClick={() => {
                setOpen(false); dispatch(deleteSocialMediaAction()); dispatch(deleteEmailAction()); dispatch(deleteGeoAction())
              }}
            ></Button>
            <Button
              disabled={(coOwnerTableData.length >= 5 ? true : false)}
              variant="primary"
              size="lg"
              onClick={() => { setOpen(true); Alertpost() }}
              className="fa fa-check"
              type="submit"
            ></Button>
          </Row>

          <br />
        </form>
      </Modal>
    </>
  );
};
