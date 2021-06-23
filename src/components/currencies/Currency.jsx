import React, {useState} from 'react';
import {Input, Select, Button} from "../index";

export default function Currency(){

    return(
        <div className="container">
        <h3>Currency</h3>
        <div className="row">
            <div className="col-md-2">
                <Input type="text" label='Code' col={12} />
            </div>
            <dev className="col-md-4">
                <Input type="text" label='Description' col={12} />
            </dev>
            <div className="col-md-4">
                <Select label="Country" option="Canada" col={12} />
            </div>
            <div className="col-md-2">
                <Select label="Status" option="Baja" col={12} />
            </div>
        </div>
        <div className="row">
            <label col={12}>Fiscal</label>
            <div className="col-md-3">
                <Input type="text" label='Exchange Rate' col={12} />
            </div>
            <div className="col-md-3">
                <Input type="date" label='Date' col={12} />
            </div>
            <div className="col-md-3">
                <Input type="text" label='Hour' col={12} />
            </div>
            <div className="col-md-3">
                <Input type="text" label='User' col={12} />
            </div>
        </div>
        <div className="row">
            <label col={12}>Sale</label>
            <div className="col-md-3">
                <Input type="text" label='Exchange Rate' col={12} />
            </div>
            <div className="col-md-3">
                <Input type="date" label='Date' col={12} />
            </div>
            <div className="col-md-3">
                <Input type="text" label='Hour' col={12} />
            </div>
            <div className="col-md-3">
                <Input type="text" label='User' col={12} />
            </div>
        </div>
        <div className="row">
            <label col={12}>Purchase</label>
            <div className="col-md-3">
                <Input type="text" label='Exchange Rate' col={12} />
            </div>
            <div className="col-md-3">
                <Input type="date" label='Date' col={12} />
            </div>
            <div className="col-md-3">
                <Input type="text" label='Hour' col={12} />
            </div>
            <div className="col-md-3">
                <Input type="text" label='User' col={12} />
            </div>
        </div>
    </div>
    )
   
}