/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from "react";
import AccordionnInformation from './AccordionnInformation';
import { Accordionn } from "..";

const VatRateGuestInformation = () => {
  return (
    <div div id="vat-rate" className="container accordion" >

        <div className="mb-5 row">
					<Accordionn title="Owner" component={AccordionnInformation}/>
          <Accordionn title="CoOwner" component={AccordionnInformation}/>
					<Accordionn title="Beneficiary" component={AccordionnInformation}/>
				</div>
    </div>
  )
}
export default VatRateGuestInformation;