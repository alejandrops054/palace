import React from "react";
import InputButtons from "./InputButtons";
import Input from "../../ui/Input";

const color = {
  color: "white",
};

const FormFinancingPromises = () => {
  return (
    <form>
      <div className="row g-3">
        <Input type="" label="Type refinancing" col={12}/>
        <br />

        <p className="card-text col-12" style={color}>
          Create financing promises
        </p>
        
        <Input type="Number" label="Financing type" col={6} />
        <Input type="Number" label="Payment way" col={6} />
        <Input type="Number" label="Total Payments" col={6} />
        <Input type="Number" label="Periodicity" col={6} />
        <Input type="Number" label="Initial month to pay" col={6} />
        <Input type="Date" label="First payment" col={6} />
        <Input type="Number" label="Periodicity number" placeholder="0" col={6} />
        <Input type="Number" label="Budget" col={6} />
      </div>

      <div className="d-flex justify-content-end mt-5">
        <InputButtons />
      </div>
    </form>
  );
};

export default FormFinancingPromises;
