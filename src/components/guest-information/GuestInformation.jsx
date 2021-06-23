/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from "react";
//Components
import Card from "../ui/Card";
import ElementosCard from './ElementosCard';

const GuestInformation = () => {
  return (
    <div div id="guest-information" className="guest-information" >
      <Card title={"Jane Doe"} size={5} col={12} component={<ElementosCard/> }/>
    </div>
  )
}
export default GuestInformation