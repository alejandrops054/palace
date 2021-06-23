/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import '../../css/ui/spinner.css';

const Saved = ({ title = "Changes saved succesfully" }) => {
  return (
    <div className="container mx-auto">
      <i className="fa fa-check-circle fa-5x"></i>
      <h6 className="mt-4 text-white">{title}</h6>
    </div>
  );
};

export default Saved;