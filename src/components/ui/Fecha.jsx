import React from "react";
//label: string
//placeholder: string
//bold: normal o bold
//fontSize: tamaño en piexeles
const Fecha = ({ etiqueta, bold, color, tamanio, col }) => {
  return (
    <div className={`col-lg-${col} mb-3`}>
    <label style={{"font-weighy":bold?"bold":"normal","fontColor:":color, "fontSize":tamanio }}>{etiqueta}</label>
  </div>
  );
};

export default Fecha;