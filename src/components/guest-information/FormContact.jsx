/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React,{ useState, useEffect } from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import TextArea from "../ui/TextArea";

import { useForm, useSelect } from '../../hooks/index'

// const color = {
//   color: "white",
// };

const FormContact = ({ setContact }) => {

  const languageOptions = [
    {name: 'Spanish', value: 'spanish'},
    {name: 'English', value: 'english'},
    {name: 'Portuguese', value: 'portuguese'}
  ]

  const [language, SelectLanguage] = useSelect('Language', '', languageOptions);

  const { handleInputChange, inputs } = useForm({
    email: '',
    city: '',
    statecontact: '',
    country: '',
    nationality: '',
    id0: '',
    taxadress: '',
    zipcode: '',
    cellphone: '',
    officecontact: '',
    home: '',
  });

  const { email, city, statecontact, country, nationality, id0, taxadress, zipcode, cellphone, officecontact, home } = inputs;

  useEffect(() => {
    setContact({
      email,
      city,
      statecontact,
      country,
      nationality,
      language,
      id0,
      taxadress,
      zipcode,
      cellphone,
      officecontact,
      home,
    });
  },[email, city, statecontact, country, nationality, language, id0, taxadress, zipcode, cellphone, officecontact, home]);


  return (
    <form>
      <div className="row g-3" >
        <Input
          type=""
          label="email"
          col={10}
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <div className="input-group-append col-2" >
          <span className="input-group-text mt-4" style={{color:'#ffffff'}}>Welcome</span>
        </div>

        <Input
          type="text"
          label="City"
          col={6}
          name="city"
          value={city}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="State"
          col={6}
          name="statecontact"
          value={statecontact}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Country"
          col={6}
          name="country"
          value={country}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Nationality"
          col={6}
          name="nationality"
          value={nationality}
          onChange={handleInputChange}
        />
        {/* <Select type="text" label="Lenguage" col={3} /> */}
        <div className='col-6'>
          <SelectLanguage />
        </div>
        <Input
          type="text"
          label="{ 0 }"
          col={6}
          name="id0"
          value={id0}
          onChange={handleInputChange}
        />
        <TextArea
          label="Tax Adress"
          name="taxadress"
          value={taxadress}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="ZIP Code"
          placeholder=""
          col={6}
          name="zipcode"
          value={zipcode}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Cell phone"
          col={6}
          name="cellphone"
          value={cellphone}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Office"
          placeholder=""
          col={6}
          name="officecontact"
          value={officecontact}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Home"
          col={6}
          name="home"
          value={home}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

export default FormContact;
