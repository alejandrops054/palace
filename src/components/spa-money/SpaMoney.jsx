import React from "react";
import { Input, Label, Button } from "../index";

const SpaMoney = () => {
  return (
    <>
      <div className="card mb-4">
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="mb-3">
              <Input type="text" label="Psm" col={12} />
              <div className="mt-1">
                <Button title="Print Detail" typebootstrap="primary" col="6" />
              </div>
            </div>

            <Input type="text" label="Purchased" placeholder="" col={12} />
            <Input type="text" label="Eamed" col={12} placeholder="0" />
            <Input type="text" label="Used" col={12} />
          </div>
          <div id="gm-group" className="col-lg-6 mb-3">
            <Input type="text" label="Psm Mpays" col={12} />
            <div className='mt-5 pt-4'>
                <Input type="text" label="Diputed Amount" col={12} />
                <Input type="text" label="Available" col={12} />
                <Input type="text" label="Refunded Amount" col={12} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaMoney;
