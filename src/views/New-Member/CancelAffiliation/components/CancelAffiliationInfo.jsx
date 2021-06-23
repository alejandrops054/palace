import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
} from "reactstrap";

function CancelAffiliationInfo() {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <Label for="cancel_affiliation">Affiliation:</Label>
          <InputGroup>
            <Input placeholder="4054931" type="text" id="cancel_affiliation" />
            <InputGroupAddon addonType="append">
              <InputGroupText>...</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="col-5">
          <Label for="cancel_name">Name:</Label>
          <InputGroup>
            <Input placeholder="4054931" type="text" id="cancel_name" />
          </InputGroup>
        </div>
        <div className="col-2">
          <Label for="affiliation">Tour Date:</Label>
          <InputGroup>
            <Input placeholder="" type="date" id="cancel_tour" />
          </InputGroup>
        </div>
        <div className="col-2">
          <Label for="cancel_reinstate">Reinstate:</Label>
          <InputGroup>
            <Input placeholder="" type="date" id="cancel_reinstate" />
          </InputGroup>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Label for="cancel_plan">Plan:</Label>
          <InputGroup>
            <Input placeholder="" type="text" id="cancel_plan" />
          </InputGroup>
        </div>
        <div className="col">
          <Label for="cancel_office">Office:</Label>
          <InputGroup>
            <Input placeholder="" type="text" id="cancel_office" />
          </InputGroup>
        </div>
        <div className="col">
          <Label for="cancel_project">Project:</Label>
          <InputGroup>
            <Input placeholder="" type="text" id="cancel_project" />
          </InputGroup>
        </div>
      </div>
    </>
  );
}

export default CancelAffiliationInfo;
