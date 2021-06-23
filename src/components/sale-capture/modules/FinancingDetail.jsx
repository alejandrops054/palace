/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import { React, useState, useEffect } from "react";
import { Select, Input, Checkbox } from "../../index";

// Custome hooks
import { useForm, useSelect } from "../../../hooks";

const FinancingDetail = ({setFinancingDetailInformation}) => {
  //para simular el consumo desde una BD
  const options = [{ name: "US Dolar", value: "Us Dolar" }];

  const options2 = [
    {
      name: "5 - Palace Elite S.A de C.V",
      value: "5 - Palace Elite S.A de C.V",
    },
  ];

  const checkboxes1 = [
    { label: "Closed by 'Exit Closer'", name: "closedByExitCloser" },
    { label: "Mexican", name: "mexican" },
    { label: "Deposit ", name: "deposit" },
    { label: "Rci", name: "rci" },
    { label: "Rci Plus", name: "rciPlus" },
    { label: "Rci Platinum", name: "rciPlatinum" },
    { label: "Processable", name: "processable" },
    { label: "Wholesaler", name: "wholesaler" },
  ];

  const checkboxes2 = [
    { label: "Regen", name: "regen" },
    { label: "Interval", name: "interval" },
    { label: "Interval Platinum", name: "intervalPlatinum" },
    { label: "Interval Previous", name: "intervalPrevious" },
  ];

  /*Selects */
  const [currencyFDSelect, SelectCurrency, resetSelectCurrency] = useSelect(
    "Currency",
    "",
    options
  );
  const [CompanyFDSelect, SelectCompany, resetSelectCompany] = useSelect(
    "Company",
    "",
    options2
  );

  const defaultDataFD = {
    discount: "0",
    date: "",
    dg: "",
    closedByExitCloser: "",
    mexican: "",
    deposit: "",
    rci: "",
    rciPlus: "",
    rciPlatinum: "",
    processable: "",
    wholesaler: "",
    regen: "",
    interval: "",
    intervalPlatinum: "",
    intervalPrevious: "",
    currencyFD: "",
    companyFD: "",
  };
  const [error, handledError] = useState(false);

  const financingDetailSubmit = () => {
    if (
      // validator.isNumeric(inputs.priority) ||
      validator.isEmpty(inputs.discount) ||
      validator.isEmpty(inputs.date) ||
      validator.isEmpty(inputs.dg) ||
    /*   validator.isEmpty(inputs.closedByExitCloser) ||
      validator.isEmpty(inputs.mexican) ||
      validator.isEmpty(inputs.deposit) ||
      validator.isEmpty(input.rci) ||
      validator.isEmail(input.rciPlus) ||
      validator.isEmpty(inputs.rciPlatinum) ||
      validator.isEmpty(inputs.processable) ||
      validator.isEmpty(inputs.wholesaler) ||
      validator.isEmpty(inputs.regen) ||
      validator.isEmpty(inputs.interval) ||
      validator.isEmpty(inputs.intervalPlatinum) ||
      validator.isEmpty(inputs.intervalPrevious) || */
      validator.isEmpty(inputs.office_phone) ||
      validator.isEmpty(currencyFDSelect) ||
      validator.isEmpty(CompanyFDSelect)
    ) {
      /**Se algun campo esta vacio activa el state error */
      handledError(true);
      return;
    }
    /*Se deshabilita la carga del error de los inputs */
    handledError(false);
    /*Se agrega estado que proveniente de el Hook useSelect*/
    inputs.currencyFD = currencyFDSelect;
    inputs.companyFD = CompanyFDSelect;
    /*Se agrega la informacion del coOwner a la funcion padre GuestInformationView */
    addCoOwner(inputs);
    /*Se genera alerta para verificar informacion ---SOLO PRUEBAS ----*/
    alert(JSON.stringify(inputs, null, 2));
    /*Se crea Objeto para agregar informacion a el estado de la tabla y pueda pintarse*/
    /*const tableOwner = {
            priority: inputs.priority,
            id: inputs.id,
            first: inputs.first_name,
            last: inputs.last_name
        }*/
    /*Se agrega la info a el estado de la tabla*/
    /* setDataTable([
            ...data,
            tableOwner
        ])*/
    /*reset a campos input y select */
    reset();
    resetSelectCurrency("");
    resetSelectCompany("");
  };

  const { inputs, handleInputChange, handleSubmit, reset } = useForm(
    defaultDataFD,
    financingDetailSubmit
  );

  const {
    discount,
    date,
    dg,
    /* closedByExitCloser,
    mexican,
    deposit,
    rci,
    rciPlus,
    rciPlatinum,
    processable,
    wholesaler,
    regen,
    interval,
    intervalPlatinum,
    intervalPrevious, */
    office_phone,
    intervalNumber,
  } = inputs;

  useEffect(() => {
    setFinancingDetailInformation({
        discount,
        date,
        dg,
        intervalNumber,
        currencyFDSelect,
        CompanyFDSelect
    });
},[discount, date, dg, intervalNumber, currencyFDSelect, CompanyFDSelect]);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Financing detail</h3>
        <div className="row">
          <div className="col-6">
            <SelectCurrency />
            {error ? (
              validator.isEmpty(currencyFDSelect) ? (
                <p className="text-danger">Required¡</p>
              ) : null
            ) : null}
          </div>
          <div className="col-6">
            <SelectCompany />
            {error ? (
              validator.isEmpty(CompanyFDSelect) ? (
                <p className="text-danger">Required¡</p>
              ) : null
            ) : null}
          </div>
          <Input
            label="Discount (%)"
            placeholder="0"
            name="discount"
            onChange={handleInputChange}
          />
          {error ? (
            validator.isEmpty(discount) ? (
              <p className="text-danger">Required¡</p>
            ) : null
          ) : null}
          <Input
            label="Date"
            type="date"
            placeholder="26/11/2020"
            name="date"
            onChange={handleInputChange}
          />
          {error ? (
            validator.isEmpty(date) ? (
              <p className="text-danger">Required¡</p>
            ) : null
          ) : null}
          <Input
            label="DG 100%"
            placeholder=""
            name="dg"
            onChange={handleInputChange}
          />
          {error ? (
            validator.isEmpty(dg) ? (
              <p className="text-danger">Required¡</p>
            ) : null
          ) : null}
          <div className="col-lg-3 ">
            {checkboxes1.map((checkbox) => (
              <Checkbox
                key={checkbox.label}
                name={checkbox.name}
                label={checkbox.label}
                onChange={handleInputChange}
              />
            ))}
          </div>
          <div className="col-lg-3 ">
            {checkboxes2.map((checkbox) => (
              <Checkbox
                key={checkbox.label}
                name={checkbox.name}
                label={checkbox.label}
                onChange={handleInputChange}
              />
            ))}
          </div>
          <div className="col-lg-6">
            <Input
              label="Interval number"
              placeholder="Interval number"
              col="12"
              onChange={handleInputChange}
              name="intervalNumber"
            />
            {error ? (
              validator.isEmpty(intervalNumber) ? (
                <p className="text-danger">Required¡</p>
              ) : null
            ) : null}
          </div>
        </div>
      </form>
    </>
  );
};

export default FinancingDetail;
