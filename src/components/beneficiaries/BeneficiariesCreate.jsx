

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
import ModalBeneficiariesSm from "./ModalBeneficiariesSM";
import useFetchGet from "../../hooks/useFetchGet";
import { Dropdown, Menu } from "antd";

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
  postBeneficiariesAction
} from "../../redux2/actions/memberActions";
import { deleteSocialMediaAction } from '../../redux/actions/socialMediaActions'
import { deleteEmailAction, postEmailAction } from '../../redux/actions/emailActions'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import ModalCoOwnerSM from '../coOwner/ModalCoOwnerSM'
import classnames from 'classnames';
import CoOwnerEmail from '../coOwner/CoOwnerEmail'
import ModalGeographicLocation from '../newgeographic-location/ModalGeographicLocation'
import { deleteGeoAction } from '../../redux/actions/buscadorGeographicActions'


export const BeneficiariesCreate = () => {

  const dispatch = useDispatch();
  const [edithomephone, setedithomephone] = useState()
  const [editcellphone, seteditcellphone] = useState()


  const [open, setOpen] = useState(false);
  const toggle = () => { setOpen(!open); setChargedGeographic(false) }
  const [homephone, sethomephone] = useState()
  const [cellphone, setcellphone] = useState()
  const [officephone, setofficephone] = useState()
  const [faxphone, setfaxphone] = useState()
  const [chargedGeographic, setChargedGeographic] = useState(false)

  const beneficiariesTableData = useSelector(
    (state) => state.member.Beneficiaries.data
  );
  const SMData = []
  const EmailData = []
  let selectGeoTable = useSelector((state) => state.member.Ciudad.selectedCity);

  // const SMData = useSelector((state) => state.socialMedia.socialMedia);

  const [activeTab, setActiveTab] = useState("1");
  const toggleNav = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const defaultDataBeneficiaries = {
    beneficiary_id: "",
    application: "1000049",
    estatus: 'A',
    company: "5",
    vipunlgolf: "",
    idprofileopera: "",
    firts: "",
    last: "",
    email: "",
    socialsecuritynumber: "",
    ssnreason: 1234,
    priority: 1,
    address: "",
    city_code: 12,
    state_code: "",
    country_code: "",
    zip: "",
    nationality: "",
    lada_home: "",
    home_phone: "",
    lada_office: "",
    office_phone: "",
    lada_cell: "",
    cell_phone: "",
    country_tel_code: "",
    idrelacionclubprofile: 262734,
    title: ''
  };

  const resetForm = (_) => {
    reset();
    resetSelectStatus("A");
    resetSelectNationality("");
    handledError(false);
  };

  const agregarBeneficiaries = (Beneficiaries) => dispatch(postBeneficiariesAction(Beneficiaries));

  const BeneficiariesSubmit = () => {
    if (
      validator.isEmpty(inputs.firts) ||
      validator.isEmpty(inputs.last)
    ) {
      handledError(true);
      return;
    }
    handledError(false);
    let smdatapost = [{
      "codesocialnetwork": "FACE",
      "usersocialnetwork": "www.FACE.com/MS-face"
    }];
    inputs.socialNetworks = smdatapost;
    //inputs.socialNetworks = SMData
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

    delete inputs.beneficiary_id
    delete inputs.fax_phone
    inputs.user = ""
    inputs.city_code = ""
    inputs.country_code = ""
    inputs.state_code = ""
    inputs.zip = ""
    dispatch(deleteSocialMediaAction())

    inputs.status = statusCoSelect;
    inputs.nationality = SelectNationalityOptions;

    /*Proceso de asignacion de telefonos */
    let homep, cellp, officep = "";
    homep = homephone;
    cellp = cellphone;
    officep = officephone;

    inputs.lada_home = (homep !== undefined ? homep.substr(0, 3) : "")
    inputs.lada_cell = (cellp !== undefined ? cellp.substr(0, 3) : "")
    inputs.lada_office = (officep !== undefined ? officep.substr(0, 3) : "")
    inputs.home_phone = (homep !== undefined ? homep.substr(3, 17) : "")
    inputs.cell_phone = (cellp !== undefined ? cellp.substr(3, 17) : "")
    inputs.office_phone = (officep !== undefined ? officep.substr(3, 17) : "")

    if (selectGeoTable) {
      const { EstadoDescripcion, ESTATUS, IDCIUDAD, IDESTADO, IDPAIS, NOMBRE, PaisDescripcion, PostalCode } = selectGeoTable
      inputs.country_code = IDPAIS;
      inputs.state_code = IDESTADO;
      inputs.city_code = IDCIUDAD;
      inputs.zip = PostalCode;
      inputs.cityname = NOMBRE;
      inputs.statename = EstadoDescripcion;
      inputs.countryname = PaisDescripcion;
    } {
      inputs.country_code = "";
      inputs.state_code = "";
      inputs.city_code = "";
      inputs.zip = "";
      inputs.cityname = "";
      inputs.statename = "";
      inputs.countryname = "";
    }
    //agregarEmailCoOwner(dataTableEmail);
    agregarBeneficiaries(inputs)

    dispatch(deleteEmailAction())
    dispatch(deleteGeoAction())
    sethomephone('')
    setcellphone('')
    setofficephone('')
    setfaxphone('')
    resetForm();
    toggleNav("1")
    setChargedGeographic(false)

  };

  const { inputs, handleInputChange, handleSubmit, reset } = useForm(
    defaultDataBeneficiaries,
    BeneficiariesSubmit
  );

  let {
    beneficiary_id,
    application,
    name,
    family_rel,
    estatus,
    hora_alta,
    cvealta,
    hora_baja,
    cvebaja,
    hora_modif,
    cvemodif,
    vipunlgolf,
    idprofileopera,
    firts,
    last,
    email,
    email_confirm,
    socialsecuritynumber,
    ssnreason,
    priority,
    address,
    codesocialnetwork,
    usersocialnetwork,
    idrelacionclubprofile,
    company,
    city_code,
    state_code,
    country_code,
    zip,
    cityname,
    lada_home,
    lada_office,
    lada_cell,
    socialNetwork,
    home_phone,
    cell_phone,
    office_phone,
    fax_phone,
    title
  } = inputs;

  const [error, handledError] = useState(false);

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
  useEffect(() => {
    resetSelectStatus("A");
  })

  if (selectGeoTable && chargedGeographic) {
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

  return (
    <>
      <Button
        disabled={(beneficiariesTableData.length >= 5 ? true : false)}
        variant="link"
        typebootstrap="link main"
        className="fas fa-plus"
        onClick={() => { toggle(); dispatch(deleteEmailAction()); }}
      ></Button>
      <Modal isOpen={open} toggle={toggle} size="lg">
        {" "}
        <form onSubmit={handleSubmit}>
          <ModalHeader>Beneficiaries information</ModalHeader>
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
                        value={beneficiary_id}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col lg="6">
                      <Input
                        disabled
                        type="text"
                        label="ID Profile Opera"
                        col={12}
                        name="idprofileopera"
                        value={idprofileopera}
                        onChange={handleInputChange}
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
                          <p className="text-danger">Required¡</p>
                        ) : null
                      ) : null}
                    </Col>
                    <Col lg="6">
                      <Input
                        type="text"
                        label="First name"
                        col={12}
                        name="firts"
                        value={firts}
                        onChange={handleInputChange}
                      />
                      {error ? (
                        validator.isEmpty(firts) ? (
                          <p className="text-danger">Required¡</p>
                        ) : null
                      ) : null}
                    </Col>
                    <Col lg="6">
                      <Input
                        type="text"
                        label="Tax Id"
                        col={12}
                        name="tax_id"
                        // value={tax_id}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                  <Row lg="12">
                    <TextArea
                      label="Address"
                      name="address"
                      placeholder=""
                      col={12}
                      value={address}
                      onChange={handleInputChange}
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
                        label="City"
                        placeholder=""
                        col={12}
                        name="cityname"
                        value={cityname}
                        onChange={handleInputChange}
                        disabled
                      />{" "}
                      {/* { error ? validator.isEmpty(city) ? (<p className="text-danger">Required¡</p>) : null : null } */}{" "}
                    </Col>
                    <Col lg="6">
                      <Input type="text" label="State" placeholder=""
                        col={12}
                        name="state_code"
                        value={state_code}
                        disabled
                        onChange={handleInputChange}
                        disabled />
                      {/* {error ? validator.isEmpty(state) ? (<p className="text-danger">Required¡</p>) : null : null */}
                    </Col>
                    <Col lg="6">
                      <Input
                        label="Country"
                        col={12}
                        name="country_code"
                        value={country_code}
                        onChange={handleInputChange}
                        disabled
                      />

                      {/* {error ? validator.isEmpty(country) ? (<p className="text-danger">Required¡</p>) : null : null*/}
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
                      />{" "}
                      {/* {error ? validator.isEmpty(zip) ? (<p className="text-danger">Required¡</p>) : null : null } */}{" "}
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      {/* <Select label="Nationality" opciones={nationalityOptions} col={12} name="nationality" value={nationality}/> */}
                      <SelectNationality />{" "}
                      {/* {error? validator.isEmpty(nationality) ? (<p className="text-danger">Required¡</p>) : null : null} */}{" "}
                    </Col>
                  </Row>
                  <Row>
                    {" "}
                    {/* <Col lg='6'>
                      <Checkbox label="Accounting" name="check1" value={check1} onChange={handleInputChange}/> </Col> */}{" "}
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
              onClick={() => { setOpen(false); dispatch(deleteSocialMediaAction()); dispatch(deleteEmailAction()); dispatch(deleteGeoAction()) }}
            ></Button>
            <Button
              disabled={(beneficiariesTableData.length >= 5 ? true : false)}
              variant="primary"
              size="lg"
              className="fa fa-check"
              type="submit"
            ></Button>
          </Row>
          <br />
        </form>
      </Modal>

    </>
  )
}
