import React from 'react'
import {Input} from '../index'


const MemberCommissionsDetails = ()=> {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                        <h3>Member Commissions Details</h3>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8">
                        <Input type="text" label="Commission Down Payment Required" col={12} icon='fas fa-percentage' placeholder='10.00' />
                        </div>
                        <div className="col-md-4">
                        <Input type="text" label="   " col={12} icon='fas fa-dollar-sign' placeholder='410.00' />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-6  ">
                        <Input type="text" label="Commission Total Amount" col={12} icon='fas fa-dollar-sign' placeholder='4,100.00' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default MemberCommissionsDetails
