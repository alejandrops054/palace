import React from "react";
import {
    InputGroup,
    Input,
    Label,
    Button,
    Row,
    Col
  } from "reactstrap";

function CancelAffiliationType() {
  return (
    <>
      <div className="row mt-5">
        <div className="row">
          <div className="col">
            <Label for="cancel_type">Cancel Type:</Label>
          </div>
        </div>
        <div className="col-4">
          <InputGroup size="sm">
            <Input placeholder="4054931" type="select" id="cancel_type">
              <option value="">Others</option>
            </Input>
          </InputGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Label for="cancel_date">Cancel Date:</Label>
          <InputGroup>
            <Input placeholder="" type="date" id="cancel_date" />
          </InputGroup>
        </div>
        <div className="col-2">
          <Label for="cancel_code">Cancel Code:</Label>
          <InputGroup>
            <Input placeholder="" type="text" id="cancel_code" />
          </InputGroup>
        </div>
        <div className="col-4">
          <Label for="cancel_select"></Label>
          <InputGroup>
            <Input placeholder="" type="select" id="cancel_select">
              <option value="">ZZZ</option>
            </Input>
          </InputGroup>
        </div>
        <div className="col-2">
          <Label for="cancel_nextapp">Next Application:</Label>
          <InputGroup>
            <Input placeholder="" type="text" id="cancel_nextapp" />
          </InputGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Label for="cancel_reason">Cancel Date:</Label>
          <InputGroup>
            <Input placeholder="" type="input" id="cancel_reason" />
          </InputGroup>
        </div>
        <div className="col-5">
          <Label for="">Cancel Date:</Label>
          <InputGroup>
            <Input placeholder="" type="select" id="" />
          </InputGroup>
        </div>
        <div className="col-2">
          <Label for="cancel_assignedto">Assigned to:</Label>
          <InputGroup>
            <Input placeholder="" type="input" id="cancel_assignedto" />
          </InputGroup>
        </div>
        <div className="col-2">
          <Button>Change</Button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Label for="cancel_location">Location:</Label>
          <InputGroup>
            <Input placeholder="" type="select" id="cancel_location">
              <option value="">Moon Palace Sunrise</option>
            </Input>
          </InputGroup>
        </div>
        <div className="col">
          <Label for="cancel_refund_date">Refund Date:</Label>
          <InputGroup>
            <Input placeholder="" type="date" id="cancel_refund_date">
              <option value="">Moon Palace Sunrise</option>
            </Input>
          </InputGroup>
        </div>
        <div className="col">
          <Label for="cancel_reason">SPA MONEY:</Label>
          <small></small>
        </div>
        <div className="col">
          <Label for="cancel_disputed_amount">Disputed Amount:</Label>
          <InputGroup>
            <Input
              placeholder="0.00"
              type="number"
              id="cancel_disputed_amount"
            />
          </InputGroup>
        </div>
        <div className="col">
          <Label for="cancel_refunded_amount">Cancel Date:</Label>
          <InputGroup>
            <Input
              placeholder="0.00"
              type="number"
              id="cancel_refunded_amount"
            />
          </InputGroup>
        </div>
      </div>
    </>
  );
}

export default CancelAffiliationType;
