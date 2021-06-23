import React from 'react';
import {Input, Select, Checkbox} from "../index";
import Button from 'react-bootstrap/Button'

import {useForm, useSelect} from '../../hooks'


const Account = () => {
      /** Valores que se pintan en <Select/> */
      const statusOptions = [
        {name: 'Alta', value: 'Alta'}, 
        {name: 'Baja', value: 'Baja'}
    ];
    //Select
    const [statusCoSelect, SelectStatus, resetSelectStatus] = useSelect(' ', '', statusOptions);

    const AccountDefault={
     previousAffiliation:'',
     name_card:'',
     creation:'',
     status:''
    }
    const onSubmit=_=>{
       
        


    }
    const {inputs, handleInputChange, handleSubmit, reset} = useForm(AccountDefault, onSubmit);
    const {previousAffiliation, name_card, creation, status} = inputs
    return(
        <form onSubmit={handleSubmit}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                    <Input type="text" label="Previous Affiliation" col={12} name="previousAffiliation" value={previousAffiliation} onChange={handleInputChange}/> 
                    <Button variant="dark" >Assign Account</Button>{' '}
                    </div>
                    <div className="col-md-5">
                        <Input
                            type="text"
                            label="Account number"
                            placeholder=""
                            col={12}
                        />  
                    </div>
                    <div className="col-md-2">
                        <br/>
                        <Button variant="secondary">...</Button>{' '}
                    </div>
                </div>
                <br/>
                <from>
                    <div className="row">
                        <div className="col-md-12">
                        <Input type="text" label="Name" col={12} name="name_card" value={name_card} onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                        <Input type="date" label="Creation" col={12} name="creation" value={creation} onChange={handleInputChange}/> 
                        </div>

                        <div className="col-md-5">
                            <SelectStatus />
                        </div>
                        <div className="col-md-2">
                            <br/>
                            <Button variant="secondary">Save Changes</Button>{' '}
                        </div>
                    </div>
                </from>
            </div> 
        </form>
    )
}

export default Account