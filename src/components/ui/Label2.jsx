import React from "react";
//etiqueta: string
//placeholder: string
//bold: normal o bold
//fontSize: tamaño en piexeles
//font-wighy: normal, bold, italic
const Etiqueta = ({ etiqueta, bold, color, tamanio}) => {
  return (
      <label style={{fontWeight:'bold', "color":color, "fontSize":tamanio }} >{etiqueta}</label>
  );
};

export default Etiqueta;