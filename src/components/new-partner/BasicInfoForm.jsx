/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react'

import { Select, Checkbox, Input} from '../index'

const BasicInfoForm = () =>{
    return(
        <>
        <form>
            <div className='row'>
                <div className='col'>
                    <Input
                        label='Search provision'
                        type='text'
                        icon='fas fa-search'
                    />
                </div>
                <div className='col'>
                    <Select
                        label='Provision ID'
                    />
                </div>
                <div className='col'>
                    <Select
                        label='Quantity'
                    />
                </div>
            </div>
                <div className='row'>
                    <div className='col'>
                        <Checkbox className='mr-sm-2'
                            name='replacement'
                            value=''
                            label='Replacement cost by cost'
                        />
                    </div>
                </div>
        </form>
    </>
    )
}

export default BasicInfoForm