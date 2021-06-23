/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Search from './components/Search'
import Accordion from './components/Accordion'
import  './css/new-partner-five.css'

const NewPartnerFive = () => {

  const SubTitle = ({ subTitle }) => { return (<h4> {subTitle}</h4>) }


  return (
    <div className="view">
        <SubTitle subTitle={'Member Information'} />
        <Search/>
        <Accordion/>
    </div>
   )
}

export default NewPartnerFive