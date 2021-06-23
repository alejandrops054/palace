/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { useState, useEffect } from "react";
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
import {
  Input,
  Select,
  TextArea,
  Checkbox,
  MenuButton
} from "../index";
import Button from "react-bootstrap/Button";
import Table from "rc-table";
import validator from "validator";
import ModalBeneficiariesSM from "./ModalBeneficiariesSM";
import ModalCoOwnerSM from "../coOwner/ModalCoOwnerSM"
import useFetchGet from "../../hooks/useFetchGet";
import { Dropdown, Menu } from "antd";
import { BeneficiariesCreate } from './BeneficiariesCreate'

// Data Table
import { columns } from "./DataBeneficiaries";
// Custome hooks
import { useForm, useSelect } from "../../hooks";


//conexion microservice
import { urlNationality, urlSocialMedia } from "../../webservice/memberService";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { CitysAction } from "../../redux/actions/buscadorGeographicActions";
import {
  getBeneficiariesAction,
  postBeneficiariesAction,
  deleteBeneficiariesAction,
  editBeneficiariesAction
} from "../../redux2/actions/memberActions";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import classnames from 'classnames';
import CoOwnerEmail from '../coOwner/CoOwnerEmail'
import ModalGeographicLocation from '../newgeographic-location/ModalGeographicLocation'
import DataTable from 'react-data-table-component';
import { deleteGeoAction } from '../../redux/actions/buscadorGeographicActions'
import { deleteEmailAction } from '../../redux/actions/emailActions'


const Beneficiaries = ({ addBeneficiaries }) => {
  const [homephone, sethomephone] = useState()
  const [cellphone, setcellphone] = useState()
  const [officephone, setofficephone] = useState()
  const [edithomephone, setedithomephone] = useState()
  const [editcellphone, seteditcellphone] = useState()
  const [editofficephone, seteditofficephone] = useState()
  const dispatch = useDispatch();
  const [searchCity, set_city_name] = useState();

  const [chargedGeographic, setChargedGeographic] = useState(false)


  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  //const SMData = useSelector((state) => state.socialMedia.socialMedia);
  const SMData = []
  const EmailData = []


  const [dataTableCity, setdataTableCities] = useState([])
  let dataTableCities = [];
  let TableCities = {};
  let citiesTablaFilter = []

  const [open1, setOpen1] = useState(false);
  const toggle1 = () => { setOpen1(!open1); setChargedGeographic(false) }

  const beneficiariesTableData = useSelector(
    (state) => state.member.Beneficiaries.data
  );

  //const beneficiariesEditar = useSelector((state) => state.member.Beneficiaries.beneficiariesedit);
  //const getsocialmedia = useSelector((state) => state.coowner.socialmedia)
  const getsocialmedia = []
  let selectGeoTable = useSelector((state) => state.member.Ciudad.selectedCity);



  let tableBeneficiaries = {};
  let dataTableBeneficiaries = [];

  if (beneficiariesTableData.length > 0) {
    beneficiariesTableData.map((beneficiary) => {
      tableBeneficiaries = {
        priority: beneficiary.PRIORITY,
        id: beneficiary.BENEFICIARY_ID,
        profile: beneficiary.IDPROFILEOPERA,
        first: beneficiary.FIRTS,
        last: beneficiary.LAST,
        recnum: beneficiary.RECNUM,
        application: beneficiary.APPLICATION
      };
      dataTableBeneficiaries.push(tableBeneficiaries);
    });
  }

  useEffect(() => {
    // Consultar microservicios method GET CoOwners
    const cargarBeneficiaries = () => dispatch(getBeneficiariesAction());
    cargarBeneficiaries();
    // eslint-disable-next-line
  }, [open1, setdataTableCities]);

  /** Valores que se pintan en <Select/> */
  const statusOptions = [
    { recnum: 0, name: "Alta", value: "A" },
    { recnum: 1, name: "Baja", value: "B" },
  ];
  const nationalityOptions = [
    { recnum: 0, name: "Mexican", value: "Mexican" },
    { recnum: 1, name: "japan", value: "japan" },
    { recnum: 2, name: "Brazilian", value: "Brazilian" },
    { recnum: 3, name: "American", value: "American" },
  ];

  const {
    data: dataNationalityOptions,
    loading,
    errorOfficeSelect,
  } = useFetchGet(urlNationality);

  const dataNationality = [];
  if (dataNationalityOptions !== null && dataNationalityOptions.length > 0) {
    dataNationalityOptions.map((data) => {
      dataNationality.push({ recnum: data.RECNUM, name: data.DESCRIPTION, value: data.DESCRIPTION });
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

  const optionsSM = [
    { recnum: 0, name: 'FACEBOOK', value: 'FACEBOOK' },
    { recnum: 1, name: 'GOOGLE', value: 'GOOGLE' },
    { recnum: 2, name: 'INSTAGRAM', value: 'INSTAGRAM' },
    { recnum: 3, name: 'TWITTER', value: 'TWITTER' }
  ]

  const {
    data: dataSocialMediaOptions,
    loading: loading1,
    error: error1
  } = useFetchGet(urlSocialMedia);

  const dataSocialMedia = [];

  if (dataSocialMediaOptions !== null && dataSocialMediaOptions.length > 0) {
    dataSocialMediaOptions.map((data) => {
      dataSocialMedia.push({ recnum: data.Recnum, name: data.DescripcionSocialNetwork, value: data.CodeSocialNetwork });
    });


    var [
      SelectSocialMediaOptions,
      SelectSocialMedia,
      resetSelectSocialMedia,
    ] = useSelect("Social Media", "", dataSocialMedia);
  } else {

    var [SelectSocialMediaOptions, SelectSocialMedia, resetSelectSocialMedia] = useSelect('Social media', '', optionsSM)
  }

  /*Selects */
  const [statusSelect, SelectStatus, resetSelectStatus] = useSelect(
    "Status",
    "",
    statusOptions
  );



  const [defaultDataBeneficiaries2, setdefaultDataOwner2] = useState({
    /* RECNUM: "",
    COOWNER_ID: "12345", */
    APPLICATION: "1000049",
    BENEFICIARY_ID: "",
    FIRTS: "",
    LAST: "",
    ADDRESS: "",
    COUNTRY_CODE: "1",
    COUNTRYNAME: "",
    STATE_CODE: "",
    STATENAME: "",
    CITY_CODE: 12,
    CITYNAME: "",
    ZIP: "10900",
    HOME_PHONE: "",
    CELL_PHONE: "",
    OFFICE_PHONE: "",
    //FAX_PHONE: "",
    EMAIL: "",
    EMAIL_CONFIRM: "",
    //REC_ACC: "n",
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
    // COMPANY: 5,
    //BIRTHDAY: "1975-08-28",
    /*  ELECTRONIC_SIGNATURE_ID: "",
    IDPROFILEOPERA: "2343870",
    COUNTRYNAME: "DEFAULT COUNTRY",
    STATENAME: "DEFAULT STATE ",
    CITYNAME: "DEFAULT CITY ", */
    //ADD_TO_INTERVAL: 0,
    COUNTRY_TEL_CODE: "",
    //AREA_CODE: "269",
    ESTATUS: "A",
    SOCIALMEDIA: "",
    USERSOCIALMEDIA: "",
    LADA_HOME: "",
    LADA_OFFICE: "",
    LADA_CELL: "",
    TITLE: "",
    NATIONALITY: ""
    //   USER: "CA"
    /* area_code: "",
    title: null,
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

  let { APPLICATION, BENEFICIARY_ID, FIRTS, LAST, ADDRESS, COUNTRY_CODE, COUNTRYNAME, STATE_CODE, STATENAME, CITY_CODE, CITYNAME, ZIP, HOME_PHONE, CELL_PHONE, OFFICE_PHONE, EMAIL, COUNTRY_TEL_CODE, ESTATUS, SOCIALMEDIA, USERSOCIALMEDIA, LADA_HOME, LADA_OFFICE, LADA_CELL, TITLE } = defaultDataBeneficiaries2;

  const [data, setDataTable] = useState([]);



  const [error, handledError] = useState(false);

  /* Hook useForm recibe Objeto->datos iniciales, Funcion->Submit*/

  /* Destructurin inputs valores que vienen del useForm y se agregan a cada componente <Input value={valor}/> */


  const handleInputChange_edit = (e) => {
    setdefaultDataOwner2({
      ...defaultDataBeneficiaries2,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault()

    // if (
    //   inputs.email !==
    //   inputs.email_confirm
    // ) {
    //   alert('¡El email no coinciden!');
    //   handledError(true);
    //   return;
    // }

    if (

      validator.isEmpty(LAST) ||
      validator.isEmpty(FIRTS)
      //!validator.isLength(inputs.IDPROFILEOPERA, { min: 1, max: 15 })
    ) {
      /**Si algun campo esta vacio activa el state error */
      handledError(true);
      return;
    }
    /*Se deshabilita la carga del error de los inputs */
    handledError(false);
    /*Se agrega estado que proveniente de el Hook useSelect*/

    defaultDataBeneficiaries2.ESTATUS = statusSelect
    defaultDataBeneficiaries2.NATIONALITY = SelectNationalityOptions
    let RECNUM = defaultDataBeneficiaries2.RECNUM
    delete defaultDataBeneficiaries2.RECNUM


    if (selectGeoTable && chargedGeographic) {
      const { EstadoDescripcion, ESTATUS, IDCIUDAD, IDESTADO, IDPAIS, NOMBRE, PaisDescripcion, PostalCode } = selectGeoTable
      defaultDataBeneficiaries2.COUNTRY_CODE = IDPAIS;
      defaultDataBeneficiaries2.STATE_CODE = IDESTADO;
      defaultDataBeneficiaries2.CITY_CODE = IDCIUDAD;
      defaultDataBeneficiaries2.ZIP = PostalCode;
      defaultDataBeneficiaries2.CITYNAME = NOMBRE;
      defaultDataBeneficiaries2.COUNTRYNAME = PaisDescripcion;
      defaultDataBeneficiaries2.STATENAME = EstadoDescripcion;
    } else {
      defaultDataBeneficiaries2.COUNTRY_CODE = "";
      defaultDataBeneficiaries2.STATE_CODE = "";
      defaultDataBeneficiaries2.CITY_CODE = "";
      defaultDataBeneficiaries2.ZIP = "";
      defaultDataBeneficiaries2.CITYNAME = "";
      defaultDataBeneficiaries2.COUNTRYNAME = "";
      defaultDataBeneficiaries2.STATENAME = "";
    }
    let smdatapost = [{
      "prevCodesocialn": "INSTA",
      "codesocialnetwork" : "FACE",
      "usersocialnetwork": "www.FACE.com/MS-face"
    }];
    defaultDataBeneficiaries2.socialNetworks = smdatapost;
    //defaultDataBeneficiaries2.socialNetworks = dataTablesm;

    /*Proceso de asignacion de telefonos */
    let edithp, editcp, editop = "";
    edithp = edithomephone;
    editcp = editcellphone;
    editop = editofficephone;

    defaultDataBeneficiaries2.LADA_HOME = (edithp !== "" ? edithp.substr(0, 3) : "")
    defaultDataBeneficiaries2.LADA_CELL = (editcp !== "" ? editcp.substr(0, 3) : "")
    defaultDataBeneficiaries2.LADA_OFFICE = (editop !== "" ? editop.substr(0, 3) : "")
    defaultDataBeneficiaries2.HOME_PHONE = (edithp !== "" ? edithp.substr(3, 17) : "")
    defaultDataBeneficiaries2.CELL_PHONE = (editcp !== "" ? editcp.substr(3, 17) : "")
    defaultDataBeneficiaries2.OFFICE_PHONE = (editop !== "" ? editop.substr(3, 17) : "")

    defaultDataBeneficiaries2.idrelacionclubprofile = "262728"
    defaultDataBeneficiaries2.company = "5"
    /*Se agrega la informacion del coOwner a la funcion padre GuestInformationView */
    dispatch(editBeneficiariesAction(defaultDataBeneficiaries2, RECNUM));
    resetSelectSocialMedia('')
    toggleNav("1")
    toggle1()
    setChargedGeographic(false)

  }

  const onEdit = (key) => {
    const editBeneficiaries = beneficiariesTableData.filter(data => data.BENEFICIARY_ID === key)
    editBeneficiaries.map(data => {
      defaultDataBeneficiaries2.FIRTS = data.FIRTS
      defaultDataBeneficiaries2.APPLICATION = data.APPLICATION
      defaultDataBeneficiaries2.BENEFICIARY_ID = data.BENEFICIARY_ID
      defaultDataBeneficiaries2.LAST = data.LAST
      defaultDataBeneficiaries2.ADDRESS = data.ADDRESS
      defaultDataBeneficiaries2.COUNTRY_CODE = data.COUNTRY_CODE
      defaultDataBeneficiaries2.STATE_CODE = data.STATE_CODE
      defaultDataBeneficiaries2.CITY_CODE = data.CITY_CODE
      defaultDataBeneficiaries2.COUNTRYNAME = data.COUNTRYNAME
      defaultDataBeneficiaries2.STATENAME = data.STATENAME
      defaultDataBeneficiaries2.CITYNAME = data.CITYNAME
      defaultDataBeneficiaries2.ZIP = data.ZIP
      defaultDataBeneficiaries2.LADA_HOME = data.LADA_HOME
      defaultDataBeneficiaries2.HOME_PHONE = data.HOME_PHONE
      defaultDataBeneficiaries2.LADA_CELL = data.LADA_CELL
      defaultDataBeneficiaries2.CELL_PHONE = data.CELL_PHONE
      defaultDataBeneficiaries2.LADA_OFFICE = data.LADA_OFFICE
      defaultDataBeneficiaries2.OFFICE_PHONE = data.OFFICE_PHONE
      defaultDataBeneficiaries2.COUNTRY_TEL_CODE = data.COUNTRY_TEL_CODE
      defaultDataBeneficiaries2.EMAIL = data.EMAIL
      defaultDataBeneficiaries2.RECNUM = data.RECNUM
      defaultDataBeneficiaries2.TITLE = data.TITLE
    })
    getsocialmedia.map(data => {
      defaultDataBeneficiaries2.SOCIALMEDIA = data.CodeSocialNetwork
      defaultDataBeneficiaries2.USERSOCIALMEDIA = data.UserSocialNetwork
    })


    let homephone = defaultDataBeneficiaries2.LADA_HOME + defaultDataBeneficiaries2.HOME_PHONE;
    let cellphone = defaultDataBeneficiaries2.LADA_CELL + defaultDataBeneficiaries2.CELL_PHONE;
    let officephone = defaultDataBeneficiaries2.LADA_OFFICE + defaultDataBeneficiaries2.OFFICE_PHONE;
    setedithomephone(homephone)
    seteditcellphone(cellphone)
    seteditofficephone(officephone)
    resetSelectSocialMedia(defaultDataBeneficiaries2.SOCIALMEDIA)
    resetSelectNationality(editBeneficiaries[0].NATIONALITY)
    resetSelectStatus(editBeneficiaries[0].ESTATUS)
    toggle1()
    toggleNav("1");
    dispatch(deleteGeoAction());
    dispatch(deleteEmailAction());
  }


  /*tabs*/
  const [activeTab, setActiveTab] = useState("1");
  const toggleNav = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const onDelete = (key) => {
    dispatch(deleteBeneficiariesAction(key));
  };

  const columns = [
    {
      name: "Priority",
      selector: "priority",
      sortable: true,
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
        fontSize: '20px',
        fontHeight: 600,
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
  if (selectGeoTable && chargedGeographic) {
    const { EstadoDescripcion, ESTATUS, IDCIUDAD, IDESTADO, IDPAIS, NOMBRE, PaisDescripcion, PostalCode } = selectGeoTable
    const setInputGeo = _ => {
      COUNTRYNAME = PaisDescripcion;
      STATENAME = EstadoDescripcion;
      CITYNAME = NOMBRE;
      ZIP = PostalCode;
    }
    setInputGeo()
  }





  return (
    <>
      <Container>
        <Card style={{ border: "none" }}>
          <Row>
            <Col lg="6">
              <CardTitle tag="h3">Beneficiaries</CardTitle>
            </Col>
            <Col lg="6" className="d-flex justify-content-end tables">
              {/* <Button col="1.5" icon="fas fa-users" typebootstrap="link" type="button" />
              <Button col="1.5" icon="fas fa-upload" typebootstrap="link" type="button" /> */}
              <BeneficiariesCreate />
              {/*<Button col="1.5" onClick={() => toggle()} icon="fas fa-plus" typebootstrap="link" type="button" />*/}
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
              data={dataTableBeneficiaries}
              noDataComponent=''
            />
          </CardBody>
        </Card>


        {/* -------------------------Editar coowner----------------------------------------  */}


        <Modal isOpen={open1} toggle={toggle1} size="lg">
          {" "}
          <form onSubmit={handleSubmitEdit}>
            <ModalHeader>Beneficiaries information Edit</ModalHeader>
            <ModalBody className="p-0 ">
              <Card>
                {" "}
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
                          disabled
                          type="text"
                          label="Beneficiaries ID"
                          col={12}
                          name="beneficiary_id"
                          value={BENEFICIARY_ID}
                          onChange={handleInputChange_edit}
                        />{" "}
                        {/* {error ? validator.isEmpty(beneficiariesId) ? (<p className="text-danger">Required¡</p>) : null : null} */}
                        <Input
                          type="text"
                          label="Title"
                          col={12}
                          name="TITLE"
                          value={TITLE}
                          onChange={handleInputChange_edit}
                        />{" "}
                        {/* {error ? validator.isEmpty(title) ? (<p className="text-danger">Required¡</p>) : null : null} */}
                        <Input
                          type="text"
                          label="Last name"
                          col={12}
                          name="LAST"
                          value={LAST}
                          onChange={handleInputChange_edit}
                        />{" "}
                        {error ? (
                          validator.isEmpty(LAST) ? (
                            <p className="text-danger">Required¡</p>
                          ) : null
                        ) : null}
                        <Input
                          type="text"
                          label="Tax Id"
                          col={12}
                          name="tax_id"
                          // value={tax_id}
                          onChange={handleInputChange_edit}
                        />{" "}
                        {/* {error ? validator.isEmpty(tax_id) ? (<p className="text-danger">Required¡</p>) : null : null} */}{" "}
                      </Col>
                      <Col lg="6">
                        <Input
                          disabled
                          type="text"
                          label="ID Profile Opera"
                          col={12}
                          name="IDPROFILEOPERA"
                          //value={IDPROFILEOPERA}
                          onChange={handleInputChange_edit}
                        />{" "}
                        {/* {error ? validator.isEmpty(id_profile) ? (<p className="text-danger">Required¡</p>) : null : null} */}
                        <SelectStatus />{" "}
                        {/* {error?
                            validator.isEmpty(statusSelect) ? (<p className="text-danger">Required¡</p>) : null : null} */}
                        <Input
                          type="text"
                          label="First name"
                          col={12}
                          name="FIRTS"
                          value={FIRTS}
                          onChange={handleInputChange_edit}
                        />{" "}
                        {error ? (
                          validator.isEmpty(FIRTS) ? (
                            <p className="text-danger">Required¡</p>
                          ) : null
                        ) : null}
                        <br />
                      </Col>
                    </Row>

                    <Row lg="12">
                      <TextArea
                        label="Address"
                        name="ADDRESS"
                        placeholder=""
                        col={12}
                        value={ADDRESS}
                        onChange={handleInputChange_edit}
                      />{" "}
                      {/* {error ?  validator.isEmpty(address) ? (<p className="text-danger">Required¡</p>) : null : null } */}{" "}
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
                          name="COUNTRYNAME"
                          value={COUNTRYNAME}
                          onChange={handleInputChange_edit}
                          disabled
                        />
                        {/* {error ?validator.isEmpty(COUNTRYNAME) ? (<p className="text-danger">Required¡</p>) : null: null} */}
                      </Col>
                      <Col lg="6">
                        <Input
                          type="text"
                          label="State"
                          placeholder=""
                          col={12}
                          name="STATENAME"
                          value={STATENAME}
                          onChange={handleInputChange_edit}
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
                          name="CITYNAME"
                          value={CITYNAME}
                          onChange={handleInputChange_edit}
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
                          name="ZIP"
                          value={ZIP}
                          onChange={handleInputChange_edit}
                          disabled
                        />
                        {/* {error ?validator.isEmpty(ZIP) ? (<p className="text-danger">Required¡</p>) : null: null } */}
                      </Col>
                    </Row>                    <Row>
                      <Col lg="6">
                        {/* <Select label="Nationality" opciones={nationalityOptions} col={12} name="nationality" value={nationality}/> */}
                        <SelectNationality />{" "}
                        {/* {error? validator.isEmpty(nationality) ? (<p className="text-danger">Required¡</p>) : null : null} */}{" "}
                      </Col>
                    </Row>
                    <Row>
                      {" "}
                      {/* <Col lg='6'>
                      <Checkbox label="Accounting" name="check1" value={check1} onChange={handleInputChange_edit}/> </Col> */}{" "}
                    </Row>

                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col lg="6">
                        <Label>Home phone</Label>
                        <PhoneInput
                          international
                          placeholder=""
                          value={edithomephone}
                          onChange={setedithomephone} />
                      </Col>
                      <Col lg="6">
                        <Label>Cell phone</Label>
                        <PhoneInput
                          international
                          placeholder=""
                          value={editcellphone}
                          onChange={seteditcellphone} />
                      </Col>
                      <Col lg="6">
                        <Label>Office phone</Label>
                        <PhoneInput
                          international
                          placeholder=""
                          value={editofficephone}
                          onChange={seteditofficephone} />
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
              />
            </div>
          </ModalFooter> */}
            <br />
            <Row md={5}>
              <Col lg="6"></Col>
              <Button
                variant="secondary"
                size="lg"
                className="fa fa-times"
                onClick={() => { setOpen1(false); dispatch(deleteGeoAction()); dispatch(deleteEmailAction()); }
                }
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
    </>
  );
};
export default Beneficiaries;
