/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from "react";
import Hr from "../ui/Hr";
import Etiqueta from "../ui/Label2";

const Office = () => {
    return (
    <div>
      <div className={"d-flex justify-content-between"}>
        <Etiqueta etiqueta={"Office"} bold={"normal"} color={"grey"} tamanio={18} />
        <Etiqueta etiqueta={"Sunrise"} bold={"bold"} color={"white"} tamanio={18} />
      </div>
      <Hr col={12} />
      <div className={"d-flex justify-content-between"} >
        <Etiqueta etiqueta={"Project"} bold={"false"} color={"grey"} tamanio={18} />
        <Etiqueta etiqueta={"Palace Elit"} bold={"true"} color={"white"} tamanio={18} col={2} />
      </div>
      <Hr col={12} />
      <div className={"d-flex justify-content-between"} >
        <Etiqueta etiqueta={"Application"} bold={"false"} color={"grey"} tamanio={18} col={9} />
        <Etiqueta etiqueta={"1234567"} bold={"true"} color={"white"} tamanio={18} col={2} />
      </div>
      <Hr col={12} />
      <div className={"d-flex justify-content-between"} >
        <Etiqueta etiqueta={"Previous aplication"} bold={"false"} color={"grey"} tamanio={18} col={9} />
        <Etiqueta etiqueta={" - "} bold={"true"} color={"white"} tamanio={18} col={2} />
      </div>
    </div>
    )
  }
  export default Office