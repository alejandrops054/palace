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
import ModalCoOwnerSm from "./ModalCoOwnerSM";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { Citys } from "../../redux/actions/buscadorGeographicActions";
import {
  getCoOwnerAction,
  deleteCoOwnerAction,
  editCoOwnerAction,
  deleteSocialMediaAction
} from "../../redux2/actions/memberActions";

import InputGroupWithExtras from "react-bootstrap/esm/InputGroup";
import { ModalGeographicLocation } from '../newgeographic-location/ModalGeographicLocation'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import ModalCoOwnerSM from './ModalCoOwnerSM'

//Mensajes JSON
import LanguagesJSON from '../json/LanguagesEsMx.json'

export const CoOwnerEdit = ({data, setOpen1}) => {
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState("1");
  const [homephone, sethomephone] = useState()
  const [cellphone, setcellphone] = useState()
  const [officephone, setofficephone] = useState()
  const [faxphone, setfaxphone] = useState()

  const toggleNav = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  

  const SMData = useSelector((state) => state.member.SocialMedia.data);
  const coOwnerData = useSelector((state) => state.member.CoOwners.coowner.owneredit);

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

  if (dataNationalityOptions) {
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
    FIRST: "",
    LAST: "",
    ADDRESS: "",
    COUNTRY_CODE: "",
    STATE_CODE: "",
    CITY_CODE: 1,
    ZIP: "",
    HOME_PHONE: "",
    CELL_PHONE: "",
    OFFICE_PHONE: "",
    FAX_PHONE: "",
    EMAIL: "",
    //email_confirm: "",
    REC_ACC: "n",
    CITY_NAME: "",
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
    COMPANY: 5,
    BIRTHDAY: "",
    /*  ELECTRONIC_SIGNATURE_ID: "",
    IDPROFILEOPERA: "2343870",
    COUNTRYNAME: "DEFAULT COUNTRY",
    STATENAME: "DEFAULT STATE ",
    CITYNAME: "DEFAULT CITY ", */
    //ADD_TO_INTERVAL: 0,
    COUNTRY_TEL_CODE: "",
    //AREA_CODE: "269",
    STATUS: "",
    SOCIALMEDIA: "",
    USERSOCIALMEDIA: "",
    TITLE: "",
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
    APPLICATION,
    FIRST,
    LAST,
    ADDRESS,
    COUNTRY_CODE,
    STATE_CODE,
    CITY_CODE,
    ZIP,
    HOME_PHONE,
    CELL_PHONE,
    OFFICE_PHONE,
    FAX_PHONE,
    EMAIL,
    REC_ACC,
    STATUS,
    NATIONALITY,
    SOCIALMEDIA,
    USERSOCIALMEDIA,
    TITLE,
    CITY_NAME,
    SOCIALNETWORKDATA
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

  const handleSubmit_edit = (e) => {
    e.preventDefault();
    if(
      inputs.email !== 
      inputs.email_confirm
      ){
        handledError(true);
        alert('¡El email no coinciden!');
        return;
      }
    if (
      validator.isEmpty(LAST) ||
      validator.isEmpty(FIRST)
      //!validator.isLength(inputs.IDPROFILEOPERA, { min: 1, max: 15 })
    ) {
      /**Si algun campo esta vacio activa el state error */
      handledError(true);
      return;
    }
    /*Se deshabilita la carga del error de los inputs */
    handledError(false);
    /*Se agrega estado que proveniente de el Hook useSelect*/
    STATUS = statusCoSelect;
    defaultDataOwner2.NATIONALITY = SelectNationalityOptions;
    let RECNUM = coOwnerEditar.RECNUM;
    defaultDataOwner2.socialNetworks = SMData;
    COUNTRY_CODE=coOwnerData.COUNTRY_CODE;
    STATE_CODE=coOwnerData.STATE_CODE
    dispatch(deleteSocialMediaAction())
    delete defaultDataOwner2.CITY_NAME;
    defaultDataOwner2.HOME_PHONE = homephone;
    defaultDataOwner2.CELL_PHONE = cellphone;
    defaultDataOwner2.OFFICE_PHONE = officephone;
    defaultDataOwner2.FAX_PHONE = faxphone;
       /*Se agrega la informacion del coOwner a la funcion padre GuestInformationView */
    dispatch(editCoOwnerAction(defaultDataOwner2, RECNUM));
    toggle();
    /*reset a campos input y select */
    // resetForm();
    resetSelectSocialMedia("");
    toggleNav("1");

    // const onEdit = (key) => {
    //     const editCoOwner = coOwnerTableData.filter(
    //       (data) => data.COOWNER_ID === key.profile
    //     );
    //     editCoOwner.map((data) => {
    //       defaultDataOwner2.FIRST = data.FIRST;
    //       defaultDataOwner2.LAST = data.LAST;
    //       defaultDataOwner2.ADDRESS = data.ADDRESS;
    //       defaultDataOwner2.COUNTRY_CODE = data.COUNTRY_CODE;
    //       defaultDataOwner2.STATE_CODE = data.STATE_CODE;
    //       defaultDataOwner2.CITY_CODE = data.CITY_CODE;
    //       defaultDataOwner2.ZIP = data.ZIP;
    //       defaultDataOwner2.HOME_PHONE = data.HOME_PHONE;
    //       defaultDataOwner2.CELL_PHONE = data.CELL_PHONE;
    //       defaultDataOwner2.OFFICE_PHONE = data.OFFICE_PHONE;
    //       defaultDataOwner2.FAX_PHONE = data.FAX_PHONE;
    //       defaultDataOwner2.EMAIL = data.EMAIL;
    //       defaultDataOwner2.TITLE = data.TITLE;
    // defaultDataOwner2.HOME_PHONE = data.HOME_PHONE
    // defaultDataOwner2.CELL_PHONE = data.CELL_PHONE
    // defaultDataOwner2.OFFICE_PHONE = data.OFFICE_PHONE
    // defaultDataOwner2.FAX_PHONE = data.FAX_PHONE
    //     });
    //     //console.log('datos socialmedia: ', editCoOwner[0].STATUS)
    //     resetSelectStatus(editCoOwner[0].STATUS);
    //     getsocialmedia.map((data) => {
    //       defaultDataOwner2.SOCIALMEDIA = data.CodeSocialNetwork;
    //       defaultDataOwner2.USERSOCIALMEDIA = data.UserSocialNetwork;
    //     });
    // sethomephone(defaultDataOwner2.HOME_PHONE)
    // setcellphone(defaultDataOwner2.CELL_PHONE)
    // setofficephone(defaultDataOwner2.OFFICE_PHONE)
    // setfaxphone(defaultDataOwner2.FAX_PHONE)
    //     resetSelectSocialMedia(defaultDataOwner2.SOCIALMEDIA);
    //     dispatch(obtenerCoOwnerEditarAction(editCoOwner[0]));
    //     toggle1();
    //   };


  };


   
      if(coOwnerData){
        const pintaData = _ => {
          FIRST = coOwnerData.FIRST;
            LAST = coOwnerData.LAST;
            ADDRESS = coOwnerData.ADDRESS;
            COUNTRY_CODE = coOwnerData.COUNTRY_CODE;
            STATE_CODE = coOwnerData.STATE_CODE;
            CITY_CODE = coOwnerData.CITY_CODE;
            ZIP = coOwnerData.ZIP;
            HOME_PHONE = coOwnerData.HOME_PHONE;
            CELL_PHONE = coOwnerData.CELL_PHONE;
            OFFICE_PHONE = coOwnerData.OFFICE_PHONE;
            FAX_PHONE = coOwnerData.FAX_PHONE;
            EMAIL = coOwnerData.EMAIL;
            TITLE = coOwnerData.TITLE;
            HOME_PHONE = coOwnerData.HOME_PHONE
            CELL_PHONE = coOwnerData.CELL_PHONE
            OFFICE_PHONE = coOwnerData.OFFICE_PHONE
            FAX_PHONE = coOwnerData.FAX_PHONE
            STATUS = coOwnerData.STATUS
            NATIONALITY=resetSelectNationality
           // setdefaultDataOwner2({STATUS:coOwnerData.STATUS})
            /* getsocialmedia.map((data) => {
            SOCIALMEDIA = data.CodeSocialNetwork;
            USERSOCIALMEDIA = data.UserSocialNetwork;
          }); */
          /* sethomephone(coOwnerData.HOME_PHONE)
          setcellphone(coOwnerData.CELL_PHONE)
          setofficephone(coOwnerData.OFFICE_PHONE)
          setfaxphone(coOwnerData.FAX_PHONE)
          resetSelectSocialMedia(coOwnerData.SOCIALMEDIA); */
        }
        pintaData();
        };
  
  
  return (
    <>
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
                    // className={classnames({ active: activeTab === '1' })}
                    onClick={() => {
                      toggleNav("1");
                    }}
                  >
                    General info
                    </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    // className={classnames({ active: activeTab === '2' })}
                    onClick={() => {
                      toggleNav("2");
                    }}
                  >
                    Contact
                    </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
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
                        placeholder="12345"
                        disabled
                      />
                      {/*error? validator.isEmpty(COOWNER_ID) ? (<p className="text-danger">Required¡</p>) : null: null*/}
                      <Input
                        type="text"
                        label="Title"
                        col={12}
                        name="TITLE"
                        value={TITLE}
                        onChange={handleInputChange_edit}
                      />
                      {/* {error? validator.isEmpty(TITLE) ? (<p className="text-danger">Required¡</p>) : null : null} */}
                      <Input
                        type="text"
                        label="Last name"
                        col={12}
                        name="LAST"
                        value={LAST}
                        onChange={handleInputChange_edit}
                      />
                      {error ? (
                        validator.isEmpty(LAST) ? (
                          <p className="text-danger">Required¡</p>
                        ) : null
                      ) : null}
                    </Col>
                    <Col lg="6">
                      <Input
                        type="text"
                        label="ID Profile Opera"
                        col={12}
                        name="IDPROFILEOPERA"
                        //value={IDPROFILEOPERA}
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
                        name="FIRST"
                        value={FIRST}
                        onChange={handleInputChange_edit}
                      />
                      {error ? (
                        validator.isEmpty(FIRST) ? (
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
                      name="ADDRESS"
                      placeholder=""
                      col={12}
                      value={ADDRESS}
                      onChange={handleInputChange_edit}
                    />
                    {/* {error ? validator.isEmpty(ADDRESS) ? (<p className="text-danger">Required¡</p>) : null: null } */}
                  </Row>
                
                  {/* -----------------------------------modal geographic--------------------------------- */}
                  <Row className="pt-4 pb-4">
                    <Col lg="6">
                      <ModalGeographicLocation />
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
                        name="COUNTRY_CODE"
                        value={COUNTRY_CODE}
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
                        name="STATE_CODE"
                        value={STATE_CODE}
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
                        name="CITY_CODE"
                        value={CITY_CODE}
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
                  <Row>
                    <Col lg="6">
                      <Input
                        icon="fas fa-plus"
                        type="email"
                        label="Email"
                        placeholder="email"
                        col={12}
                        name="EMAIL"
                        value={EMAIL}
                        onChange={handleInputChange_edit}
                      />
                      {/* {error ?validator.isEmpty(EMAIL) ? (<p className="email">Required¡</p>) : null: null } */}
                    </Col>
                    <Col lg="6">
                      <Input
                        type="email"
                        label="Email Confirm"
                        placeholder="email confirm"
                        col={12}
                        name="email_confirm"
                        //value={email_confirm}
                        onChange={handleInputChange_edit}
                      />
                      {/* error ? (
                            validator.isEmpty(email_confirm) ? (
                              <p className="email confirm">Required¡</p>
                            ) : null
                          ) : null */}
                    </Col>
                  </Row>
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
          <Row md={5}>
            <Col lg="6"></Col>
            <Button
              variant="secondary"
              size="lg"
              className="fa fa-times"
              onClick={() => { setOpen1(false); dispatch(deleteSocialMediaAction()) }}
            ></Button>
            <Button
              variant="primary"
              size="lg"
              className="fa fa-check"
              type="submit"
            ></Button>
          </Row>
          {/* <Row>
    <Col md={6} sm={{ size: 10, offset: 5 }}>
      <div className="d-flex justify-content-end">
        <Button
          col={6}
          icon="fas fa-times"
          typebootstrap="secondary"
          type="button"
          onClick={() => setOpen(false)}
        />
        <Button
          col={6}
          icon="fas fa-check"
          typebootstrap="primary "
          type="submit"
        />
      </div>
    </Col>
  </Row> */}
          <br />
        </form>

      </Modal>

    </>
  )
}
