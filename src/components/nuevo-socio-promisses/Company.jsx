import React from "react";
import {InfoMembers} from "../index";

/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

const Company = () => {
  return (
    <div className="border-top border-secondary">
      <div className="container">
        <br />
        <div className="row">
          <div className="col-2">
            <InfoMembers title="Company" text="7" />
          </div>

          <div className="col-2">
            <InfoMembers title="Application" text="1234567" />
          </div>

          <div className="col-3">
            <InfoMembers title="Amount financed CC" text="$0,000,000,000.00" />
          </div>

          <div className="col-3">
            <InfoMembers
              title="Nount to be finnanced"
              text="$0,000,000,000.00"
            />
          </div>
          <div className="col-2">
            <InfoMembers title="Total payments" text="0" />
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <InfoMembers title="Periodicity" text="char" />
          </div>

          <div className="col-2">
            <InfoMembers title="Periodicity number" text="0" />
          </div>

          <div className="col-3">
            <InfoMembers title="Member name" text="John Doe" />
          </div>

          <div className="col-3">
            <InfoMembers
              title="Price level"
              text="From $55,000.00 to $75,698.99 (8)"
            />
          </div>
          <div className="col-2">
            <InfoMembers
              title="Price level (NS)"
              text="From $55,000.00 to $75,698.99 (8)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
