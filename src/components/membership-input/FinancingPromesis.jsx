/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Select, Input, Payment, Button } from "../index";

export default function FinancingPromesis(props) {
  return (
    <div className="card">
      <div className="row">
        <div id="gm-group" className="col-lg-6 mb-3">
          <Payment label="Down payment remaining " price={82500} />
        </div>
        <div id="gm-group" className="col-lg-6 mb-3">
          <Payment label="Principal remaining " price={38500} />
        </div>
      </div>
      <div className="row">
        <div id="gm-group" className="col-lg-12 mb-3">
          <Select label="Type refinancing" col={12} option="" />
        </div>
      </div>
      <div className="row">
        <div className="input-group">
          <label>Creating financing promesis</label>
        </div>
      </div>
      <div className="row">
        <div id="gm-group" className="col-lg-6 mb-3">
          <Select label="Finacing Type" col={12} option="" />
          <Select label="Total payments" col={12} option="1" />
          <Select label="Initial month to pay" col={12} option="" />
          <Select label="Periodicity number" col={12} option="" />
        </div>
        <div id="gm-group" className="col-lg-6 mb-3">
          <Select label="Payment way" col={12} option="" />
          <Select label="Periodicity" col={12} option="" />
          <Input type="date" label="First payment" col={12} option="" />
          <Select label="Budget" col={12} option="" />
        </div>
      </div>
      <div id="gm-group" className="col-lg-12 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-sm"></div>
            <div className="col-sm">
              <Button icon="fas fa-times mr-2" />
            </div>
            <div className="col-sm">
              <Button icon="fas fa-check" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
