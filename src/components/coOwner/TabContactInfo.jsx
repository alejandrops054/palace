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

const TabContactInfo = () =>{
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
        email_confirm,
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
    const {priority, id, coOwnerId, title, last_name, rfc, check1, check2, id_profile, statusCo, first_name, email, email_confirm, address,
          city, state, country, zip, nationalityCo, home, office_phone, cell_phone, fax_phone} = inputs
    return (
        <Form>
            <Row>
                <Col lg="6">
                    <Input type="text" label="Home phone" placeholder=""
                        col={12}
                        name="home"
                        value={home}
                        onChange={handleInputChange}/>
                        {error ?
                        validator.isEmpty(home) ? (<p className="text-danger">Required¡</p>) : null
                        : null }
                    <Input type="text" label="Office phone" placeholder=""
                        col={12}
                        name="office_phone"
                        value={office_phone}
                        onChange={handleInputChange}/>
                        {error ?
                        validator.isEmpty(office_phone) ? (<p className="text-danger">Required¡</p>) : null
                        : null }
                </Col>
                <Col lg="6">
                    <Input type="text" label="Cell phone" placeholder=""
                        col={12}
                        name="cell_phone"
                        value={cell_phone}
                        onChange={handleInputChange}/>
                        {error ?
                        validator.isEmpty(cell_phone) ? (<p className="text-danger">Required¡</p>) : null
                        : null }
                    <Input type="text" label="Fax phone" placeholder=""
                        col={12}
                        name="fax_phone"
                        value={fax_phone}
                        onChange={handleInputChange}/>
                        {error ?
                        validator.isEmpty(fax_phone) ? (<p className="text-danger">Required¡</p>) : null
                        : null }
                </Col>
            </Row>
            <Row>
                <Col lg='6'>
                    <Input type="email" label="Email" placeholder="email"
                        col={12}
                        name="email"
                        value={email}
                        onChange={handleInputChange}/>
                        {error ?
                        validator.isEmpty(email) ? (<p className="email">Required¡</p>) : null
                        : null }
                </Col>
                <Col lg='6'>
                <Input type="email" label="Email Confirm" placeholder='email confirm'
                        col={12}
                        name="email-confirm"
                        value={email_confirm}
                        onChange={handleInputChange}/>
                        {error ?
                        validator.isEmpty(email_confirm) ? (<p className="email confirm">Required¡</p>) : null
                        : null }
                </Col>
            </Row>
        </Form>

    )
}

export default TabContactInfo