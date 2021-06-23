/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react'
import { Row, Input, Container } from 'reactstrap'
import {useSelect} from '../../hooks'
import useFetchGet from "../../hooks/useFetchGet";
import { urlSocialMedia } from "../../webservice/memberService";

const BeneficiariesSM = () => {


    const optionsSM = [
        {recnum:0, name:'FACEBOOK', value:'FACEBOOK'},
        {recnum:1,name:'GOOGLE', value:'GOOGLE'},
        {recnum:2,name:'INSTAGRAM', value:'INSTAGRAM'},
        {recnum:3,name:'TWITTER', value:'TWITTER'}
    ]

    const {
        data: dataSocialMediaOptions,
        loading,
        error
    } = useFetchGet(urlSocialMedia);

    const dataSocialMedia = [];

    if (dataSocialMediaOptions) {
        dataSocialMediaOptions.map((data) => {
        dataSocialMedia.push({recnum:data.Recnum, name: data.DescripcionSocialNetwork, value: data.CodeSocialNetwork });
        });


        var [
        SelectSocialMediaOptions,
        SelectSocialMedia,
        resetSelectSocialMedia,
        ] = useSelect("Social Media", "", dataSocialMedia);
    } else{

        var [SelectSocialMediaOptions, SelectSocialMedia, resetSelectSocialMedia]=useSelect('Social media','', optionsSM )
    }
    return (
        <>
            <Container>
                <Row>
                    <SelectSocialMedia/>
                </Row>
            </Container>
        </>
    )
}

export default BeneficiariesSM