import React, { useState, useEffect } from 'react';
import { OriginInformation, GuestInformationDates, CoOwner, Beneficiaries } from '../../../components/index'

const GuestInformationView = () => {

    /*Estado de la vista que se enviara por Redux*/
    const [state, setstate] = useState({})

    const coOwners = []

    /*Estados de cada vista que se combinaran para el estado principal que se envía por Redux*/
    const [originInformation, setOriginInformation] = useState({});
    const [guestDataInformation, setguestDataInformation] = useState({});
    const [coownersInformation, setCoownersInformation] = useState([]);
    const [beneficiariesInformation, setBeneficiariesInformation] = useState([]);

    /*Funcion para agregar owner*/
    const addCoOwner = owner => {
        setBeneficiariesInformation([...coownersInformation, owner])
    }
    /*Funcion para agregar Beneficiaries*/
    const addBeneficiaries = beneficiaries => {
        setCoownersInformation([...beneficiariesInformation, beneficiaries])
    }

    // useEffect(() => {
    //     setstate({
    //         originInformation,
    //         guestDataInformation
    //     });
    //     console.log(state);
    // },[originInformation, guestDataInformation])

    return (
        <>
            <OriginInformation setOriginInformation={setOriginInformation} />
            <br />
            <GuestInformationDates setguestDataInformation={setguestDataInformation} />
            <br />
            <CoOwner addCoOwner={addCoOwner}/>
            <br />
            <Beneficiaries addBeneficiaries={addBeneficiaries} />
        </>
    );
}

export default GuestInformationView;