import React from "react";
import Hr from "../ui/Hr";
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import Etiqueta from "../ui/Label2";

const Guest = () => {
    return (
    <div>
      <div className={"d-flex justify-content-between"}>
        <Etiqueta etiqueta={"Guest ID"} bold={"normal"} color={"grey"} tamanio={18} />
        <Etiqueta etiqueta={"1234"} bold={"bold"} color={"white"} tamanio={18} />
      </div>
      <Hr col={12} />
      <div className={"d-flex justify-content-between"} >
        <Etiqueta etiqueta={"Guest Name"} bold={"false"} color={"grey"} tamanio={18} />
        <Etiqueta etiqueta={"John Doe"} bold={"true"} color={"white"} tamanio={18} col={2} />
      </div>
      <Hr col={12} />
      <div className={"d-flex justify-content-between"} >
        <Etiqueta etiqueta={"Profile ID"} bold={"false"} color={"grey"} tamanio={18} col={9} />
        <Etiqueta etiqueta={"2345"} bold={"true"} color={"white"} tamanio={18} col={2} />
      </div>
      <Hr col={12} />
      <div className={"d-flex justify-content-between"} >
        <Etiqueta etiqueta={"Profile Name"} bold={"false"} color={"grey"} tamanio={18} col={9} />
        <Etiqueta etiqueta={"John"} bold={"true"} color={"white"} tamanio={18} col={2} />
      </div>
      <Hr col={12} />
      <div className={"d-flex justify-content-between"} >
        <Etiqueta etiqueta={"Owner ID"} bold={"false"} color={"grey"} tamanio={18} col={9} />
        <Etiqueta etiqueta={"323232"} bold={"true"} color={"white"} tamanio={18} col={2} />
      </div>
      <Hr col={12} />
      <div className={"d-flex justify-content-between"} >
        <Etiqueta etiqueta={"Title"} bold={"false"} color={"grey"} tamanio={18} col={9} />
        <Etiqueta etiqueta={"Owner"} bold={"true"} color={"white"} tamanio={18} col={2} />
      </div>
      <Hr col={12} />
      <div className={"d-flex justify-content-between"} >
        <Etiqueta etiqueta={"Owner Name"} bold={"false"} color={"grey"} tamanio={18} col={9} />
        <Etiqueta etiqueta={"John Doe"} bold={"true"} color={"white"} tamanio={18} col={2} />
      </div>

    </div>
    )
  }
  export default Guest