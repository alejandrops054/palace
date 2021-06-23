import React from "react";
import { Link } from "react-router-dom";
//label: string
//option: string
//col: css de bootstrap para ajustar el tamaño de la columna
//colIcon : la suma de col y colIcon tiene que ser igual a 12 que es el tamaño total de row
//si no tiene icono las propiedades son col={12} colIcon={0}

const Select = ({ icon, label, option, col, colIcon, iconlabel, url }) => {
  return (
    <div className={`col-${col} col-md-${colIcon}`}>
      <label>
        {label} {iconlabel ? <i className={iconlabel}></i> : null}
      </label>
      <div className="input-group">
        <select id={label} className="form-control">
          <option selected>{option}</option>
          <option value="1">{option}</option>
          <option value="2">{option}</option>
          <option value="3">{option}</option>
        </select>
        {icon ? (
          url ? (
            <div className="input-group-append">
              <Link to={url}>
                <button
                  className={`p-2 m-0 bg-primary text-white rounded ${icon}`}
                  htmlFor={label}
                >
                  {" "}
                </button>
              </Link>
            </div>
          ) : (
            <div className="input-group-append">
              <button
                className={`p-2 m-0 bg-primary text-white rounded ${icon}`}
                htmlFor={label}
              >
                {" "}
              </button>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Select;
