import React from "react";
import '../../css/ui/TableLine.css'
function TableLine({ title, data, colDescription=5, colOther=2  }) {
  return (
    <>
      <h4>{title}</h4>
          {data.map(e => 
            <div className="row table-line" key={e.key}>
              <div className={`col-lg-${colDescription} text-left`}>{e.description}</div>
              <div className={`col-lg-${colOther} text-left`}><div className="checkbox_input"><input type="checkbox" name="checkRow3" /><span className="checkmark" /></div></div>
              <div className={`col-lg-1 table-line-amount text-rigth`}>$</div>
              <div className={`col-lg-${colOther} table-line-amount text-rigth`}>{e.amount}</div>
              <div className={`col-lg-${colOther} text-right`}>{e.date}</div>
            </div>  
          )}
    </>
  );
};

export default TableLine;