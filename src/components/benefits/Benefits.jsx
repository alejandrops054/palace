/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import Nav from './NavBenefits'
import TablePromotions from './TablePromotions'
import Certificates from './Certificates'
import RefProgram from './ReferralProgram'
import DiscountProductsTable from '../discount-products/DiscountProductsTable'


const Benefits = () => {
    return (
        <form>
            <div className="row col-lg-12">
                <TablePromotions />
                <DiscountProductsTable/>
                <Certificates />
                <RefProgram />
            </div>
        </form>
    )
}

export default Benefits
