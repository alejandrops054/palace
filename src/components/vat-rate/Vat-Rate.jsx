/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
//Components
import Etiqueta from '../ui/Label';
import Select from '../ui/Select';
import Input from '../ui/Input';
import VatRateCoOwner from '../vat-rate-coOwner/VatRateCoOwner';
//import Card from '../ui/Card';
import Checkbox from '../ui/Checkbox';
import { Accordionn } from "..";

const VatRate = () => {
  return (
    <div className="vat-rate card m-1 mb4 " >
        <div className={"row"} >
          <Etiqueta etiqueta={"Member information"} bold={true} color={"white"} tamanio={28} col={6} />
        </div>
        <div className={"row"} >
          <Select label={"Value-Added Tax(%)"} option={[0,1,2,3,4,5,6]} col={4} />
          <Input label={"Nationality"} type={"date"} col={4}/>
        </div>
        <div className={"row"} >
          <Select label={"Downgrade Type"} option={[0]} col={4} />
          <Input label={"Portfolio"} type={"text"} col={4}/>
          <Input label={"Purchase Date"} type={"date"} col={4}/>
        </div>
        <div className={"row"} >
          <Select label={"Origin"} option={["In house"]} col={4} />
          <div className="col">
            <div className="row">
              <Checkbox label={"Pay Commisision"} value={0} col={4}/>
            </div>
            <div className="row">
              <Checkbox label={"Request Invoice"} value={0} col={4}/>
            </div>
          </div>
        </div>

        <div id="accordion" className="mb-5 row">
					<h2>Acordeones</h2>
					<Accordionn title='Owner' component={VatRateCoOwner}/>
          <Accordionn title='CoOwner' component={VatRateCoOwner}/>
          <Accordionn title='Beneficiaries' component={VatRateCoOwner}/>
				</div>
    </div>
  )
}
export default VatRate