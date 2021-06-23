import React from 'react'
import {
    InputGroup,
    Input,
    Label,
  } from "reactstrap";

function CancelAffiliationRefund() {
    return (
        <div>
            <div className="row mt-5">
      <div className="col">
          <Label for="cancel_amount_refund">Amount Refund:</Label>
          <InputGroup>
            <Input placeholder="" type="text" id="cancel_amount_refund" />
          </InputGroup>
        </div>
        <div className="col">
          <Label for="cancel_refund_with">Refund With:</Label>
          <InputGroup>
            <Input placeholder="" type="text" id="cancel_refund_with" />
          </InputGroup>
        </div>
        <div className="col">
          <Label for="cancel_bank">Bank:</Label>
          <InputGroup>
            <Input placeholder="" type="checkbox" id="cancel_bank" />
          </InputGroup>
        </div>
        <div className="col">
          <Label for="cancel_rci">Cancel RCI:</Label>
          <InputGroup>
            <Input placeholder="" type="checkbox" id="cancel_rci" />
          </InputGroup>
        </div>
        <div className="col">
          <Label for="cancel_rci_date">RCI Cancel Date:</Label>
          <InputGroup>
            <Input placeholder="" type="date" id="cancel_rci_date" />
          </InputGroup>
        </div>
      </div>
      <div className="row">
      <div className="col">
          <Label for="cancel_monthlies_paid">Monthlies paid:</Label>
          <InputGroup>
            <Input placeholder="" type="number" id="cancel_monthlies_paid" />
          </InputGroup>
        </div>
        <div className="col">
          <Label for="cancel_monthlies_due">Monthlies Due:</Label>
          <InputGroup>
            <Input placeholder="" type="number" id="cancel_monthlies_due" />
          </InputGroup>
        </div>
        <div className="col float-right">
          <Label for="cancel_monthlies_due">Authorized By:</Label>
          <InputGroup>
            <Input placeholder="" type="text" id="cancel_monthlies_due" />
          </InputGroup>
        </div>
      </div>
      <div className="row">
      <div className="col">
          <Label for="cancel_downpayment_due">Downpayment Due:</Label>
          <InputGroup>
            <Input placeholder="" type="number" id="cancel_downpayment_due" />
          </InputGroup>
        </div>
        <div className="col">
          <Label for="cancel_department">Cancel Department:</Label>
          <InputGroup>
            <Input placeholder="" type="text" id="cancel_department" />
          </InputGroup>
        </div>
        <div className="col float-right">
          <Label for="cancel_resort">Resort:</Label>
          <InputGroup>
            <Input placeholder="" type="text" id="cancel_resort" />
          </InputGroup>
        </div>
      </div>
    
        </div>
    )
}

export default CancelAffiliationRefund
