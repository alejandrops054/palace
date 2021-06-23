import React from "react";
import RcTable from "./RcTable";
import VatRateCoOwnerReasons from "./components/VatRateCoOwnerReasons";
import VatRateCoOwnerIdentifications from "./components/VatRateCoOwnerIdentifications";
import VatRateCoOwnerTaxNationality from "./components/VatRateCoOwnerTaxNationality";
import { Hr } from '../index'

//icon: clase de Font-awesome
//type: text | number | password
//label: string
//placeholder: string

const VatRateCoOwner = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <VatRateCoOwnerTaxNationality />
      </div>
      <Hr/>
      <div className="row">
        <VatRateCoOwnerReasons />
      </div>
      <Hr/>
      <div className="row">
        <VatRateCoOwnerIdentifications />
      </div>
      <hr className="w-80"></hr>
      <div className="row">
        <h4>Payment ways</h4>
        <div className="col">
          <RcTable />
        </div>
      </div>
    </div>
  );
};

export default VatRateCoOwner;
