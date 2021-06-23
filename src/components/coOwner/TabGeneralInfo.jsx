import React, {useState} from 'react'
import { Form, Row, Col } from 'reactstrap'
import {Input,Checkbox,Button,TextArea} from "../index";
import validator from 'validator';
import useFetchGet from "../../hooks/useFetchGet";
// Data CoOwner
import {columns} from "./DataCoOwner";
// Custome hooks
import {useForm, useSelect} from '../../hooks'

//conexion microservice
import {urlNationality} from '../../webservice/memberService';


const TabGeneralInfo = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    /** Valores que se pintan en <Select/> */
    const statusOptions = [
        {name: 'Alta', value: 'Alta'}, 
        {name: 'Baja', value: 'Baja'}
    ];

    const nationalityOptions = [
        {name:'Mexico', value:'Mexico'},
        {name:'CUBA', value:'CUBA'}
    ];

    const {data:dataNationalityOptions, loading, errorOfficeSelect } = useFetchGet(urlNationality)

    const dataNationality = [];
    // const [localState, setstate] = useState({});
    //console.log(dataNationalityOptions)
    if(dataNationalityOptions){
        
        dataNationalityOptions.map( (data) => {
            dataNationality.push({name: data.DESCRIPTION, value: data.DESCRIPTION})
        })
        //console.log(dataNationality)
        
        var [SelectNationalityOptions,SelectNationality, resetSelectNationality] = useSelect('Nationality', '', dataNationality ); 
    }else{

        var [SelectNationalityOptions,SelectNationality, resetSelectNationality] = useSelect('Nationality', '', nationalityOptions );

    }

    /*Selects */
    const [statusCoSelect, SelectStatus, resetSelectStatus] = useSelect('Status', '', statusOptions);


    const defaultDataOwner = {
        priority: '1',
        id: '1',
        coOwnerId: '',
        title: '',
        last_name: '',
        rfc: '',
        check1: false,
        check2: false,
        id_profile: '',
        statusCo:'',
        first_name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zip: '',
        nationalityCo:'',
        home: '',
        office_phone: '',
        cell_phone:'',
        fax_phone:''
    }

    const [error, handledError] = useState(false);
    const [data, setDataTable] = useState([])

    const OwnerSubmit = () => {
        if(
            // validator.isNumeric(inputs.priority) ||
            validator.isEmpty(inputs.coOwnerId) ||
            validator.isEmpty(inputs.title) ||
            validator.isEmpty(inputs.last_name) ||
            validator.isEmpty(inputs.rfc) ||
            validator.isEmpty(inputs.id_profile) ||
            validator.isEmpty(inputs.first_name) ||
            validator.isEmpty(statusCoSelect) || 
            validator.isEmpty(inputs.email) ||
            validator.isEmpty(inputs.address)||
            validator.isEmpty(inputs.city) ||
            validator.isEmpty(inputs.state) ||
            validator.isEmpty(inputs.country) ||
            validator.isEmpty(inputs.zip) ||
            validator.isEmpty(SelectNationalityOptions) || 
            validator.isEmpty(inputs.home) ||
            validator.isEmpty(inputs.office_phone) ||
            validator.isEmpty(inputs.cell_phone) ||
            validator.isEmpty(inputs.fax_phone)
        ) {
            /**Si algun campo esta vacio activa el state error */
            handledError(true)
            return
        } 
            /*Se deshabilita la carga del error de los inputs */
            handledError(false)
            /*Se agrega estado que proveniente de el Hook useSelect*/
            inputs.statusCo = statusCoSelect
            inputs.nationalityCo = SelectNationalityOptions
            /*Se agrega la informacion del coOwner a la funcion padre GuestInformationView */

            /*Se genera alerta para verificar informacion ---SOLO PRUEBAS ----*/
            alert(JSON.stringify(inputs, null, 2));
            /*Se crea Objeto para agregar informacion a el estado de la tabla y pueda pintarse*/
            const tableOwner = {
                priority: inputs.priority,
                id: inputs.id,
                first: inputs.first_name,
                last: inputs.last_name
            }
            /*Se agrega la info a el estado de la tabla*/
            setDataTable([
                ...data,
                tableOwner
            ])
            /*reset a campos input y select */
            reset()
            resetSelectStatus('')
            resetSelectNationality('')
    };
    
    /* Hook useForm recibe Objeto->datos iniciales, Funcion->Submit*/ 
    const {inputs, handleInputChange, handleSubmit, reset} = useForm(defaultDataOwner, OwnerSubmit);
    /* Destructuring inputs valores que vienen del useForm y se agregan a cada componente <Input value={valor}/> */
    const {priority, id, coOwnerId, title, last_name, rfc, check1, check2, id_profile, statusCo, first_name, email, address,
          city, state, country, zip, nationalityCo, home, office_phone, cell_phone, fax_phone} = inputs

    return(
        <Form>
            <Row className="justify-content-start">
                <Col lg="6">
                    <Input type="text" label="CoOwner ID"
                        col={12}
                        name="coOwnerId"
                        value={coOwnerId}
                        onChange={handleInputChange}/> 
                        {error?
                        validator.isEmpty(coOwnerId) ? (<p className="text-danger">Required¡</p>) : null
                        : null}
                    <Input type="text" label="Title"
                        col={12}
                        name="title"
                        value={title}
                        onChange={handleInputChange}/>
                        {error?
                        validator.isEmpty(title) ? (<p className="text-danger">Required¡</p>) : null
                        : null}
                    <Input type="text" label="Last name"
                        col={12}
                        name="last_name"
                        value={last_name}
                        onChange={handleInputChange}/>
                        {error?
                        validator.isEmpty(last_name) ? (<p className="text-danger">Required¡</p>) : null
                        : null}
                </Col>
                <Col lg="6">
                    <Input type="text" label="ID Profile Opera"
                        col={12}
                        name="id_profile"
                        value={id_profile}
                        onChange={handleInputChange}/> 
                        {error ?
                        validator.isEmpty(id_profile) ? (<p className="text-danger">Required¡</p>) : null
                        : null }
                    <SelectStatus/> 
                        {error?
                        validator.isEmpty(statusCoSelect) ? (<p className="text-danger">Required¡</p>) : null
                        : null}
                    <Input type="text" label="First name"
                        col={12}
                        name="first_name"
                        value={first_name}
                        onChange={handleInputChange}/>
                        {error ?
                        validator.isEmpty(first_name) ? (<p className="text-danger">Required¡</p>) : null
                        : null}
                </Col>
            </Row>
            <Row className="m-3">
                <TextArea label="Address" name="address" placeholder=""
                    col={12}
                    value={address}
                    onChange={handleInputChange}/>
                    {error ?
                    validator.isEmpty(address) ? (<p className="text-danger">Required¡</p>) : null
                    : null }
            </Row>
            <Row>
                <Col lg="4">
                    <Input icon="fas fa-plus" type="text" label="City" placeholder=""
                        col={12}
                        name="city"
                        value={city}
                        onChange={handleInputChange}/>
                        { error ?
                        validator.isEmpty(city) ? (<p className="text-danger">Required¡</p>) : null
                        : null }
                </Col>
                <Col lg="4">
                    <Input icon="fas fa-plus" type="text" label="State" placeholder=""
                        col={12}
                        name="state"
                        value={state}
                        onChange={handleInputChange}/>
                        {error ?
                        validator.isEmpty(state) ? (<p className="text-danger">Required¡</p>) : null
                        : null }
                </Col>
                <Col lg="4">
                    <Input icon="fas fa-plus" type="text" label="Country" placeholder=""
                        col={12}
                        name="country"
                        value={country}
                        onChange={handleInputChange}/>
                        {error ?
                        validator.isEmpty(country) ? (<p className="text-danger">Required¡</p>) : null
                        : null}
                </Col>
            </Row>
            <Row>
                <Col lg="6">
                    <Input icon="fas fa-plus" type="text" label="Zip code" placeholder=""
                        col={12}
                        name="zip"
                        value={zip}
                        onChange={handleInputChange}/>
                        {error ?
                        validator.isEmpty(zip) ? (<p className="text-danger">Required¡</p>) : null
                        : null }
                </Col>
                <Col lg="6">
                    {/* <Select label="Nationality" opciones={nationalityOptions} col={12} name="nationality" value={nationality}/> */}
                    <SelectNationality/>
                    {error?
                    validator.isEmpty(nationalityCo) ? (<p className="text-danger">Required¡</p>) : null
                    : null}
                </Col>
            </Row>
            <Row>
                {/* <Col lg='6'>
                    <Checkbox label="Accounting" name="check1"
                        value={check1}
                        onChange={handleInputChange}/>
                </Col> */}
                <Col lg='6'>
                    <Input type="text" label="RFC"
                        col={12}
                        name="rfc"
                        value={rfc}
                        onChange={handleInputChange}/>
                        {error ?
                        validator.isEmpty(rfc) ? (<p className="text-danger">Required¡</p>) : null 
                        : null}
                </Col>
            </Row>
        </Form>
    )
}

export default TabGeneralInfo