import React from "react";
import Select from "../../ui/Select";

function VatRateCoOwnerTaxNationality() {
  return (
    <>
      <div className="col-4">
        <div className="form-check form-switch row">
          <div className="row">
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Tax recidence manifest
            </label>
          </div>
          <div className="row justify-content-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </div>
      <div className="col-4">
        <Select label="Nationality" option="Foreign" />
      </div>
    </>
  );
}

export default VatRateCoOwnerTaxNationality;
