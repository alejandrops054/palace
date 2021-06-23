/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react'

import { Select, Checkbox} from '../index'


const UnlimitedForm = () =>{
    return(
        <>
            <form>
                <div className='row'>
                    <div className='col'>
                        <Select
                            label='Payment amount'
                        />
                    </div>
                    <div className='col'>
                        <Select
                            label='Max persons'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Checkbox className='mr-sm-2'
                            name='pay'
                            value=''
                            label='Pay'
                        />
                    </div>
                    <div className='col'>
                        <Checkbox className='mr-sm-2'
                            name='free'
                            value=''
                            label='Free'
                        />
                    </div>
                </div>
            </form>
        </>
    )
}

export default UnlimitedForm