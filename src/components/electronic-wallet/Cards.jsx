import React from 'react';
import {Input, Select, Checkbox} from "../index";
import Button from 'react-bootstrap/Button'
import TextField from '@material-ui/core/TextField';

const Cards = () => {
    
    return(
        <>
        <from>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <Input
                            type="text"
                            label="Card"
                            placeholder=""
                            col={12}
                        />

                    </div>
                    <div className="col-md-5">
                        <Input
                            type="text"
                            label="Card ID"
                            placeholder=""
                            col={12}
                        />
                    </div>
                    <div className="col-md-2">
                        <br/>
                        <Checkbox name="checkRow3" label="Aditional" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Input
                            type="text"
                            label="Name"
                            placeholder=""
                            col={12}
                        />
                    </div>
                    <div className="col-md-6">
                        <Input label="Expedition" type="date" placeholder="" col={12}/>
                    </div>
                    <div className="col-md-6">
                        <Input label="Expiration" type="date" placeholder="" col={12}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-8">
                        <Input
                            type="text"
                            label="Sec Code"
                            placeholder=""
                            col={12}
                        />
                        <Select
                            label=""
                            option="ALTA"
                            col={12}
                        />
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <br/><br/><br/>
                        <Button className="left "variant="dark" >Asign Card</Button>{' '}
                    </div>
                </div>
            </div> 
        </from>
        </>
    )
}
export default Cards