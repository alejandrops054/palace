/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React, { useState, useEffect } from "react";
import Hr from "../ui/Hr";
import Etiqueta from "../ui/Label2";
import Etiqueta1 from "../ui/Label";
import Guest from "./Gest";
import Contact from "./Contact";

const ElementosCard = () => {
    const [subComponente, setComponente ]=useState(<Guest/>);
    const [activa, setActiva ]=useState("guest");
    useEffect(()=>{
      if (activa==="guest"){
        document.getElementById("labelguest").style.color="cyan";
        document.getElementById("labelcontact").style.color="white";
      }else{
        document.getElementById("labelguest").style.color="white";
        document.getElementById("labelcontact").style.color="cyan";
      }
    });
    return (
    <div>
      <br></br>
      <div className={"row"}>
        <Etiqueta1 etiqueta={"Origin Information"} bold={"bold"} color={"white"} aling={"left"} tamanio={18} col={12} />
      </div>
      <div className={"d-flex justify-content-between"}>
        <Etiqueta etiqueta={"Office"} bold={"normal"} color={"grey"} tamanio={18} />
        <Etiqueta etiqueta={"Surise"} bold={"bold"} color={"white"} tamanio={18} />
      </div>
      <Hr col={12} />
      <div className={"d-flex justify-content-between"} >
        <Etiqueta etiqueta={"Project"} bold={"false"} color={"grey"} tamanio={18} />
        <Etiqueta etiqueta={"Palace Elite"} bold={"true"} color={"white"} tamanio={18} col={2} />
      </div>
      <Hr col={12} />
      <div className={"d-flex justify-content-between"} >
        <Etiqueta etiqueta={"Application"} bold={"false"} color={"grey"} tamanio={18} col={9} />
        <Etiqueta etiqueta={"1,323,384"} bold={"true"} color={"white"} tamanio={18} col={2} />
      </div>
      <Hr col={12} />
      <div className={"d-flex justify-content-between"} >
        <Etiqueta etiqueta={"Previous Application"} bold={"false"} color={"grey"} tamanio={18} col={9} />
        <Etiqueta etiqueta={"-"} bold={"true"} color={"white"} tamanio={18} col={2} />
      </div>
      <Hr col={12} />
      <div className={"d-flex justify-content-between"} >
        <Etiqueta etiqueta={"Next Application"} bold={"false"} color={"grey"} tamanio={18} col={9} />
        <Etiqueta etiqueta={"-"} bold={"true"} color={"white"} tamanio={18} col={2} />
      </div>
      <Hr col={12} />
      <br></br>
      <div className={"row"}>
        <label id={"labelguest"} className={"col-6"} style={{"font-weighy":"bold", "color":"white", "fontSize":25 }} onClick={( ()=> { setComponente(<Guest/>); setActiva("guest"); } )} >Guest Information</label>
        <label id={"labelcontact"} className={"col-6"} style={{"font-weighy":"bold", "color":"white", "fontSize":25 }} onClick={( ()=>{ setComponente(<Contact/>); setActiva("contact"); } )}>Contact Information</label>
      </div>
      {
        subComponente
      }
    </div>
    )
  }
  export default ElementosCard