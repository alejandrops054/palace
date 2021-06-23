/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Input } from "../index";

const PalaceEliteGolf = () => {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Palace Elite Golf</h5>
                <div className="row">
                    <Input label="Total Membership Fee" type="text" col={4} />
                    <Input label="" type="text" col={4} />
                    <Input label="" type="text" col={4} />

                    <Input label="Affiliation Vat" type="text" col={4} />
                    <Input label="" type="text" col={4} />
                    <Input label="" type="text" col={4} />

                    <Input label="Affiliation Fee" type="text" col={4} />
                    <Input label="" type="text" col={4} />
                    <Input label="" type="text" col={4} />

                    <Input label="Golf Rounds" type="text" col={6} />
                    <Input label="Golf Rounds Access" type="text" col={6} />
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Golf Rounds</h5>
                            <div className="row">
                                <Input label="Earned" type="text" col={4} />
                                <Input label="Check In" type="text" col={4} />
                                <Input label="Reserved" type="text" col={4} />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Certificate Rounds Golf </h5>
                            <div className="row">
                                <Input label="Earned" type="text" col={4} />
                                <Input label="Check In" type="text" col={4} />
                                <Input label="Reserved" type="text" col={4} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PalaceEliteGolf;
