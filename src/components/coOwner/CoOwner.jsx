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
  ModalFooter,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
  Row,
  Col,
  CardFooter,
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Form,
  Label
} from "reactstrap";
import ReactDOM from 'react-dom';
import { Input, Checkbox, TextArea, MenuButton } from "../index";

import Button from "react-bootstrap/Button";
import { Dropdown } from "antd";
import Table from "rc-table";
import validator from "validator";
import useFetchGet from "../../hooks/useFetchGet";
// Data CoOwner
// import {columns} from "./DataCoOwner";
// Custome hooks
import { useForm, useSelect } from "../../hooks";
//conexion microservice
import { urlNationality, urlSocialMedia } from "../../webservice/memberService";
//import { ModalCoOwnerSm } from "./ModalCoOwnerSM";
import ModalCoOwnerSM from './ModalCoOwnerSM'
// Redux
import { useSelector, useDispatch } from "react-redux";
import { Citys } from "../../redux/actions/buscadorGeographicActions";
import {
  getCoOwnerAction,
  deleteCoOwnerAction,
  editCoOwnerAction,
  deleteSocialMediaAction,
  deleteEmailAction
} from "../../redux2/actions/memberActions";
import InputGroupWithExtras from "react-bootstrap/esm/InputGroup";
import ModalGeographicLocation from '../newgeographic-location/ModalGeographicLocation'
import { CoOwnerCreate } from "./CoOwnerCreate";
//import { CoOwnerEdit } from "./CoOwnerEdit"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CoOwnerEmail from './CoOwnerEmail'
//Mensajes JSON
import LanguagesJSON from '../json/LanguagesEsMx.json'
import classnames from 'classnames';
import CoOwnerEmailEdit from './CoOwnerEmailEdit'
import DataTable from 'react-data-table-component';
import { deleteGeoAction } from '../../redux/actions/buscadorGeographicActions'


const CoOwner = () => {
  const dispatch = useDispatch();
  const [homephone, sethomephone] = useState()
  const [cellphone, setcellphone] = useState()
  const [officephone, setofficephone] = useState()
  const [faxphone, setfaxphone] = useState()
  const [searchCity, set_city_name] = useState();

  
  const [chargedGeographic, setChargedGeographic] = useState(false)


  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);


  const [dataTableCity, setdataTableCities] = useState([]);
  let dataTableCities = [];
  let TableCities = {};
  let citiesTablaFilter = [];

  const [open1, setOpen1] = useState(false);
  const toggle1 = () => { setOpen1(!open1); setChargedGeographic(false) }

  const coOwnerTableData = useSelector((state) => state.member.CoOwners.data);
  const getsocialmedia = useSelector((state) => state.member.CoOwners.socialMedia);
  const SMData = useSelector((state) => state.member.SocialMedia.data);
  const EmailData = useSelector((state) => state.member.Email.email);
  // const coOwnerTableData = useSelector((state) => state.coowner.coOwners);
  // const getsocialmedia = useSelector((state) => state.coowner.socialmedia);
  // const SMData = useSelector((state) => state.socialMedia.socialMedia);
  // const EmailData = useSelector((state) => state.email.email);
   let selectGeoTable = useSelector((state) => state.member.Ciudad.selectedCity);

  let dataTableCoOwner = [];
  let tableOwner = {};
  if (coOwnerTableData.length > 0) {
    coOwnerTableData.map((coowner) => {
      tableOwner = {
        priority: coowner.application,
        id: coowner.coowner_id,
        profile: coowner.idprofileopera,
        first: coowner.first,
        last: coowner.last,
        recnum: coowner.recnum,
      };
      dataTableCoOwner.push(tableOwner);
    });
  }
  const handleInputChange_edit = (e) => {
    setdefaultDataOwner2({
      ...defaultDataOwner2,
      [e.target.name]: e.target.value,
    });
  };
  const [defaultDataOwner2, setdefaultDataOwner2] = useState({
    /* RECNUM: "",
    COOWNER_ID: "12345", */
    //APPLICATION: "1000049",
    first: "",
    last: "",
    address: "",
    country_code: "",
    countryname:"",
    state_code: "",
    statename:"",
    city_code: 1,
    cityname:"",
    zip: "",
    home_phone: "",
    cell_phone: "",
    office_phone: "",
    fax_phone: "",
    email: "",
    //email_confirm: "",
    rec_acc: "n",
    /* FECHA_ALTA: "2014-01-20T13:58:47.793Z",
    HORA_ALTA: Date.now,
    CVEALTA: "ANA MARISELA YA",
    FECHA_BAJA: "1753-01-01T00:00:00.000Z",
    HORA_BAJA: "",
    CVEBAJA: "",
    FECHA_MODIF: "1753-01-01T00:00:00.000Z",
    HORA_MODIF: "",
    CVEMODIF: "", */
    //user: "",
    company: 5,
    birthday: "",
    /*  ELECTRONIC_SIGNATURE_ID: "",
    IDPROFILEOPERA: "2343870",
    COUNTRYNAME: "DEFAULT COUNTRY",
    STATENAME: "DEFAULT STATE ",
    CITYNAME: "DEFAULT CITY ", */
    //ADD_TO_INTERVAL: 0,
    country_tel_code: "",
    //AREA_CODE: "269",
    status: "",
    socialmedia: "",
    usersocialmedia: "",
    title: "",
    nationality: ""
    //   USER: "CA"
    /* area_code: "",
    didreinvestment: false,
    socialsecuritynumber: "",
    ssnreason: 0,
    priority: 0,
    lada_home: "",
    lada_office: "",
    lada_cell: "",
    lada_fax: "",
    nationality: "", */
  });

  let {
    application,
    first,
    last,
    address,
    country_code,
    countryname,
    state_code,
    statename,
    city_code,
    cityname,
    zip,
    home_phone,
    cell_phone,
    office_phone,
    fax_phone,
    email,
    rec_acc,
    status,
    nationality,
    socialmedia,
    usersocialmedia,
    title,
    socialnetworkdata,
    lada_home,
    lada_cell,
    lada_office,
    lada_fax,
    coowner_id
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
    lada_fax,
    nationality, */
  } = defaultDataOwner2;

  useEffect(() => {
   const cargarCoOwners = () => dispatch(getCoOwnerAction());
   cargarCoOwners();
    //eslint-disable-next-line
  }, [open1, setdataTableCities]);



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
    { recnum: 0, name: "MEXICANA", value: "MEXICANA" },
    { recnum: 1, name: "CUBANA", value: "CUBANA" },
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

  const [error, handledError] = useState(false);

  /*tabs*/
  const [activeTab, setActiveTab] = useState("1");
  const toggleNav = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const onDelete = (key) => {
    dispatch(deleteCoOwnerAction(key));
  };
  //******************************************input edit **************************************** */
  const handleSubmit_edit = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(last) ||
      validator.isEmpty(first)
      //!validator.isLength(inputs.IDPROFILEOPERA, { min: 1, max: 15 })
    ) {
      /**Si algun campo esta vacio activa el state error */
      handledError(true);
      return;
    }
    /*Se deshabilita la carga del error de los inputs */
    handledError(false);
    /*Se agrega estado que proveniente de el Hook useSelect*/

    // defaultDataOwner2.STATUS = statusCoSelect
    // defaultDataOwner2.NATIONALITY = SelectNationalityOptions
    let RECNUM = defaultDataOwner2.recnum;
    let dataTablesm = [];
    let datasm = {};

    if (SMData.length > 0) {
       SMData.map((e) => {
         datasm = {
           prevCodesocialn: "",
           codesocialnetwork: e.codesocialnetwork,
           usersocialnetwork: e.usersocialnetwork
         };
         dataTablesm.push(datasm);
       });
     }
    defaultDataOwner2.socialNetworks = dataTablesm;
    let smdatapost =[{
      "prevCodesocialn": "INSTA",
      "codesocialnetwork" : "FACE",
      "usersocialnetwork": "www.FACE.com/MS-face"
    }];
    defaultDataOwner2.socialNetworks = smdatapost;
    
    dispatch(deleteSocialMediaAction())
    dispatch(deleteEmailAction())

  

    if(selectGeoTable && chargedGeographic){
      const {EstadoDescripcion,ESTATUS, IDCIUDAD, IDESTADO,IDPAIS,NOMBRE,PaisDescripcion,PostalCode}= selectGeoTable
      defaultDataOwner2.country_code = IDPAIS;
      defaultDataOwner2.state_code = IDESTADO;
      defaultDataOwner2.city_code = IDCIUDAD;
      defaultDataOwner2.zip = PostalCode;
      defaultDataOwner2.cityname = NOMBRE;
      defaultDataOwner2.countryname= PaisDescripcion
      defaultDataOwner2.statename= EstadoDescripcion
      }
    
      defaultDataOwner2.nationality = SelectNationalityOptions
      defaultDataOwner2.status = statusCoSelect

    /*Proceso de asignacion de telefonos */
    let homepc, cellpc, officepc,faxpc = "";
    homepc = homephone;
    cellpc = cellphone;
    officepc = officephone;
    faxpc = faxphone;

    defaultDataOwner2.lada_home = (homepc !== "" ? homepc.substr(0, 3) : "")
    defaultDataOwner2.lada_cell = (cellpc !== "" ? cellpc.substr(0, 3) : "")
    defaultDataOwner2.lada_office = (officepc !== "" ? officepc.substr(0, 3) : "")
    defaultDataOwner2.lada_fax = (faxpc !== "" ? faxpc.substr(0, 3) : "")
    defaultDataOwner2.home_phone = (homepc !== "" ? homepc.substr(3, 17) : "")
    defaultDataOwner2.cell_phone = (cellpc !== "" ? cellpc.substr(3, 17) : "")
    defaultDataOwner2.office_phone = (officepc !== "" ? officepc.substr(3, 17) : "")
    defaultDataOwner2.fax_phone = (faxpc !== "" ? faxpc.substr(3, 17) : "")

    delete defaultDataOwner2.recnum;

    delete defaultDataOwner2.email;
    delete defaultDataOwner2.rec_acc;
    delete defaultDataOwner2.country_tel_code;
    delete defaultDataOwner2.birthday;
    delete defaultDataOwner2.socialmedia;
    delete defaultDataOwner2.usersocialmedia;
    delete defaultDataOwner2.coowner_id;
    defaultDataOwner2.idrelacionclubprofile = '';
    defaultDataOwner2.application = "1000049";


    // {
    // "email":"","rec_acc":"n",
    // "birthday":"","country_tel_code":"",
    // }
    /*Se agrega la informacion del coOwner a la funcion padre GuestInformationView */
    dispatch(editCoOwnerAction(defaultDataOwner2, RECNUM));
    toggle1();
    /*reset a campos input y select */
    // resetForm();
    resetSelectSocialMedia("");
    toggleNav("1");
    setChargedGeographic(false)
    dispatch(deleteGeoAction())

  };

  const onEdit = (key) => {
    const editCoOwner = coOwnerTableData.filter(
      (data) => data.coowner_id === key
    );
    editCoOwner.map((data) => {
      defaultDataOwner2.first = data.first;
      defaultDataOwner2.last = data.last;
      defaultDataOwner2.address = data.address;
      defaultDataOwner2.country_code = data.country_code;
      defaultDataOwner2.state_code = data.state_code;
      defaultDataOwner2.city_code = data.city_code;
      defaultDataOwner2.countryname = data.countryname;
      defaultDataOwner2.statename = data.statename;
      defaultDataOwner2.cityname = data.cityname;
      defaultDataOwner2.zip = data.zip;
      defaultDataOwner2.home_phone = data.home_phone;
      defaultDataOwner2.cell_phone = data.cell_phone;
      defaultDataOwner2.office_phone = data.office_phone;
      defaultDataOwner2.fax_phone = data.fax_phone;
      defaultDataOwner2.email = data.email;
      defaultDataOwner2.title = data.title;
      defaultDataOwner2.lada_home = data.lada_home
      defaultDataOwner2.lada_cell = data.lada_cell
      defaultDataOwner2.lada_office = data.lada_office
      defaultDataOwner2.lada_fax = data.lada_fax
      defaultDataOwner2.recnum = data.recnum
      defaultDataOwner2.coowner_id = data.coowner_id

    });
    //console.log('datos socialmedia: ', editCoOwner[0].STATUS)
    resetSelectStatus(editCoOwner[0].status);
    resetSelectNationality(editCoOwner[0].nationality)

    getsocialmedia.map((data) => {
      defaultDataOwner2.socialmedia = data.CodeSocialNetwork;
      defaultDataOwner2.usersocialmedia = data.UserSocialNetwork;
    });
    let homephone = defaultDataOwner2.lada_home + defaultDataOwner2.home_phone;
    let cellphone = defaultDataOwner2.lada_cell + defaultDataOwner2.cell_phone;
    let officephone = defaultDataOwner2.lada_office + defaultDataOwner2.office_phone;
    let faxphone = defaultDataOwner2.lada_fax + defaultDataOwner2.fax_phone;
    sethomephone(homephone)
    setcellphone(cellphone)
    setofficephone(officephone)
    setfaxphone(faxphone)
    resetSelectSocialMedia(defaultDataOwner2.socialmedia);
    toggleNav("1");
    toggle1();
    dispatch(deleteEmailAction());
    dispatch(deleteGeoAction());
  };

  const columns = [
    {
      name: "Priority",
      selector: "priority",
      sortable: true
    },
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Profile",
      selector: "profile",
      sortable: true,
    },
    {
      name: "First name",
      selector: "first",
      sortable: true,
    },
    {
      name: "Last name",
      selector: "last",
      sortable: true,
    },
    {
      name: <i className="fas fa-ellipsis-v"></i>,
      selector: "but",
      button: true,
      cell: row => (
        <MenuButton
          onclickDelete={(e) => {
            onDelete(row.recnum);
          }}
          onclickEdit={(e) => {
            onEdit(row.id);
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
        fontSize:'20px',
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        fontSize:'15px',
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

  if (selectGeoTable && chargedGeographic) {
    console.log('dsta ciudades selec', selectGeoTable)
    const { EstadoDescripcion, ESTATUS, IDCIUDAD, IDESTADO, IDPAIS, NOMBRE, PaisDescripcion, PostalCode } = selectGeoTable
    const setInputGeo = _ => {
      countryname= PaisDescripcion;
      statename = EstadoDescripcion;
      cityname = NOMBRE;
      zip = PostalCode;
    }
    setInputGeo()
  }

  return (
    <>
      <Container className="mb-4">
        <Card style={{ border: "none" }}>
            <Row>
              <Col lg="6">
                <CardTitle tag="h3">CoOwner</CardTitle>
                {LanguagesJSON.map((datos) => {
                  if ({ dataTableCoOwner } >= 5) {
                    return (
                      <P className="text text-danger">{datos.msgAddCoownerReinvestment}</P>
                    );
                  }
                })}
              </Col>
              <Col lg="6" className=" d-flex justify-content-end tables">
                <CoOwnerCreate />
              </Col>
            </Row>
          <CardBody>
            <DataTable
              noHeader
              className="table"
              id="resume-table"
              rowKey={() => Math.random()}
              customStyles={customStyles}
              columns={columns}
              data={dataTableCoOwner}
              noDataComponent=''
            />
          </CardBody>
        </Card>

        {/* -------------------------Editar coowner-----------  */}

        {/* <CoOwnerEdit data={defaultDataOwner2} toggle1={toggle1} /> */}
        <Modal isOpen={open1} toggle={toggle1} size="lg">
          <form onSubmit={handleSubmit_edit}>
            <ModalHeader>CoOwner information Edit</ModalHeader>
            <ModalBody className="p-0 ">
              <Card>
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
                          name="coowner_id"
                          value={coowner_id}
                          /*onChange={handleInputChange}*/
                          placeholder="12345"
                          disabled
                        />
                        {/*error? validator.isEmpty(COOWNER_ID) ? (<p className="text-danger">Required¡</p>) : null: null*/}
                        <Input
                          type="text"
                          label="Title"
                          col={12}
                          name="title"
                          value={title}
                          onChange={handleInputChange_edit}
                        />
                        {/* {error? validator.isEmpty(TITLE) ? (<p className="text-danger">Required¡</p>) : null : null} */}
                        <Input
                          type="text"
                          label="Last name"
                          col={12}
                          name="last"
                          value={last}
                          onChange={handleInputChange_edit}
                        />
                        {error ? (
                          validator.isEmpty(last) ? (
                            <p className="text-danger">Required¡</p>
                          ) : null
                        ) : null}
                      </Col>
                      <Col lg="6">
                        <Input
                          type="text"
                          label="ID Profile Opera"
                          col={12}
                          name="idprofileopera"
                          //value={idprofileopera}
                          onChange={handleInputChange_edit}
                          disabled
                        />
                        {/* error ? (
                            !validator.isLength(IDPROFILEOPERA, {
                              min: 1,
                              max: 15,
                            }) ? (
                              <p className="text-danger">Required¡</p>
                            ) : null
                          ) : null */}
                        <SelectStatus />
                        {/* {error? validator.isEmpty(statusCoSelect) ? (<p className="text-danger">Required¡</p>) : null : null} */}
                        <Input
                          type="text"
                          label="First name"
                          col={12}
                          name="first"
                          value={first}
                          onChange={handleInputChange_edit}
                        />
                        {error ? (
                          validator.isEmpty(first) ? (
                            <p className="text-danger">Required¡</p>
                          ) : null
                        ) : null}
                      </Col>
                      {/*<Col lg="6">
                        <Input
                          type="text"
                          label="RFC"
                          col={12}
                          name="SSNReason"
                          //value={SSNReason}
                          onChange={handleInputChange_edit}
                          disabled
                        />
                        {{error ? validator.isEmpty(SSNReason) ? (<p className="text-danger">Required¡</p>) : null : null} }
                      </Col>*/}
                    </Row>
                    <Row lg="12">
                      <TextArea
                        label="Address"
                        name="address"
                        placeholder=""
                        col={12}
                        value={address}
                        onChange={handleInputChange_edit}
                      />
                      {/* {error ? validator.isEmpty(address) ? (<p className="text-danger">Required¡</p>) : null: null } */}
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
                          name="countryname"
                          value={countryname}
                          onChange={handleInputChange_edit}
                          disabled
                        />
                        {/* {error ?validator.isEmpty(countryname) ? (<p className="text-danger">Required¡</p>) : null: null} */}
                      </Col>
                      <Col lg="6">
                        <Input
                          type="text"
                          label="State"
                          placeholder=""
                          col={12}
                          name="statename"
                          value={statename}
                          onChange={handleInputChange_edit}
                          disabled
                        />
                        {/* {error ?validator.isEmpty(statename) ? (<p className="text-danger">Required¡</p>) : null: null */}
                      </Col>
                      <Col lg="6">
                        <Input
                          type="text"
                          label="City"
                          placeholder=""
                          col={12}
                          name="cityname"
                          value={cityname}
                          onChange={handleInputChange_edit}
                          disabled
                        />
                        {/* { error ?validator.isEmpty(cityname) ? (<p className="text-danger">Required¡</p>) : null: null } */}
                      </Col>
                      <Col lg="6">
                        <Input
                          type="text"
                          label="Zip code"
                          placeholder=""
                          col={12}
                          name="zip"
                          value={zip}
                          onChange={handleInputChange_edit}
                          disabled
                        />
                        {/* {error ?validator.isEmpty(zip) ? (<p className="text-danger">Required¡</p>) : null: null } */}
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
                    <CoOwnerEmailEdit />
                  </TabPane>
                  <TabPane tabId="3">
                    <ModalCoOwnerSM />
                  </TabPane>
                </TabContent>
              </Card>
            </ModalBody>
            <Row md={5}>
              <Col lg="6"></Col>
              <Button
                variant="secondary"
                size="lg"
                className="fa fa-times"
                onClick={() => { setOpen1(false); dispatch(deleteSocialMediaAction()); dispatch(deleteEmailAction());dispatch(deleteGeoAction())
                }}
              ></Button>
              <Button
                variant="primary"
                size="lg"
                className="fa fa-check"
                type="submit"
              ></Button>
            </Row>
            <br />
          </form>

        </Modal>
      </Container>
      {/* <Modal isOpen={open1} toggle={toggle1} size="lg">
        <CoOwnerEdit data={defaultDataOwner2} setOpen1={setOpen1}/>
      </Modal> */}
    </>
  );
};

export default CoOwner;
