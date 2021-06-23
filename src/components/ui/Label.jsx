import React from "react";
//label: string
//placeholder: string
//bold: normal o bold
//fontSize: tamaño en piexeles
//aling: center, right, left
//font-wighy: normal, bold, italic
const Etiqueta = ({ etiqueta, aling, bold, color, tamanio, col }) => {
  return (
      <label className={`col-md-${col} text-${aling}`} style={{fontWeight:'bold', "color":color, "fontSize":tamanio }}>{etiqueta}</label>
  );
};

export default Etiqueta;
