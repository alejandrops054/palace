/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody } from 'reactstrap';
import { Accordionn, CreateBenefitType, CreateBenefit } from '../index'
function CreateBenefits() {

    return (
        <>
            <Card>
                <CardBody>
                    <Accordionn title="Create benefit type" component={CreateBenefitType} />
                    <Accordionn title="Create benefit" component={CreateBenefit} />
                </CardBody>
            </Card>
        </>
    );
}

export default CreateBenefits;