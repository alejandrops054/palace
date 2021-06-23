/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React,{ useState, useEffect, useMemo } from "react";
import { Select, Input, Flex } from "../index";
import { Link } from 'react-router-dom'

import { useSelect, useForm } from '../../hooks/index'
import useFetchGet from "../../hooks/useFetchGet";

//URL webservice
import {urlOffices,urlProyect} from '../../webservice/memberService';

import {useSelector, useDispatch} from 'react-redux'
import {getMemberAction,getCoOwnerAction,getBeneficiariesAction} from '../../redux2/actions/memberActions'


const OriginInformation = () => {

    const dispatch = useDispatch()

    const {data:dataOfficeSelect, loading, errorOfficeSelect } = useFetchGet(urlOffices);
    const {data:dataProyectSelect} = useFetchGet(urlProyect);
    // const memberbyapplication = useSelector((state) => state.member.data)
    //Select Options Proyect
    const dataSelectProyect = [];
    
    const projectOptions = [
        {recnum:0, name: 'Project #1', value: 'project 1' },
        {recnum:1, name: 'Project #2', value: 'project 2' },
    ];
    // const [localState, setstate] = useState({});
    //console.log(dataProyectSelect)
    if(dataProyectSelect !== null && dataProyectSelect.length >0){
        
        dataProyectSelect.map( (data) => {
            dataSelectProyect.push({recnum:data.RECNUM,name: data.NAME, value: data.NAME})
        })
        //console.log(dataSelectProyect)
        
        var [Proyect, SelectProyect] = useSelect('Project', '', dataSelectProyect ); 
    }else{

        var [Proyect, SelectProyect] = useSelect('Project', '', projectOptions );
    }

    //Select Options Office
    const dataSelectOffice = [];
    const selectOfficeOptions = [
        {recnum:0, name: 'Office #1', value: 'Office 1'},
        {recnum:1, name: 'Office #2', value: 'Office 2'},
        {recnum:2, name: 'Office #3', value: 'Office 3'},
    ];

    //console.log(dataOfficeSelect)
    if(dataOfficeSelect !== null && dataOfficeSelect.length >0){
        dataOfficeSelect.map( (data) => {
            dataSelectOffice.push({recnum:data.RECNUM, name: data.NAME, value: data.NAME})
        })        
        var [office, SelectOffice] = useSelect('Office', '', dataSelectOffice ); 
    }else{
        var [office, SelectOffice] = useSelect('Office', '', selectOfficeOptions );
    }

    const [defaultDataOriginInformation, setDefaultDataOriginInformation]=useState({
        application: '',
        previusApplication: '',
        nextAplication: '',
    })

    const { inputs, handleInputChange, handleSubmit,reset } = useForm({
        defaultDataOriginInformation
    });


    const { application, previusApplication, nextAplication } = inputs;

    const setApplication = application =>{
        if(application==undefined) return
        if(application.length > 6) dispatch(getMemberAction(application))
        // if(memberbyapplication !== null){
        //     dispatch(getCoOwnerAction())
        //     dispatch(getBeneficiariesAction())
        // }
    }

    useEffect(() => {
        setApplication(application)
    },[application]);

    return (
        <div className="container card mb-4" style={{border:'none', padding:'1rem'}}>
            <div>
            <div className="container">
                <div className="d-flex flex-row bd-highlight mb-3">
                <Flex title="Origin information"/>
                </div>
                <div className="row">
                <div id="gm-group" className='col-lg-6 mb-3'>
                    <SelectOffice />
                </div>
                <div id="gm-group" className="col-lg-6 mb-3">
                    <SelectProyect/>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <Input
                        type="text"
                        label="Application"
                        placeholder=""
                        col={12}
                        name='application'
                        value={ application }
                        onChange={ handleInputChange }
                    />
                    </div>
                    <div className="col-md-4">
                    <Input
                        type="text"
                        label="Previous application"
                        placeholder=""
                        col={12}
                        name='previusApplication'
                        value={ previusApplication }
                        onChange={ handleInputChange }
                    />
                    </div>
                    <div className="col-md-4">
                    <Input
                        type="text"
                        label="Next application"
                        placeholder=""
                        col={12}
                        name='nextAplication'
                        value={ nextAplication }
                        onChange={ handleInputChange }
                    />
                    </div>
                </div>
                <div className="col">
                    <Link to="#" className="btn btn-link">
                        <i className="fas fa-user-check mr-2"></i>{' '}Included by Referral
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OriginInformation;
