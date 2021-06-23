import React from 'react'
import {Input, Hr, Button} from '../index'

const AdminFee = props => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                        <h3>Admin Fee</h3>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <Input type="text" label="Admin Fee Requiered"
                                col={12}
                                placeholder='275.00'
                                icon='fas fa-dollar-sign'/>
                        </div>
                        <div className="col-lg-6">
                            <Input type="text" label="Admin Fee"
                                col={12}
                                icon='fas fa-dollar-sign'
                                placeholder='0.00'/>
                            <Input type="text" label="Discount Products"
                                col={12}
                                icon='fas fa-dollar-sign'
                                placeholder='275.00'/>
                            <Input type="text" label="Waiver"
                                col={12}
                                icon='fas fa-dollar-sign'
                                placeholder='0.00'/>
                            <Hr/>
                            <Input type="text" label="Total"
                                col={12}
                                icon='fas fa-dollar-sign'
                                placeholder='275.00'/>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-center">


                    <Button title='Cancel'
                        col={3}
                        icon='fas fa-times'
                        typebootstrap='secondary'
                        type='button'/>


                    <Button title='Accept'
                        col={3}
                        icon='fas fa-check'
                        typebootstrap='primary '
                        type='button'/>

                </div>
            </div>
        </div>
    )
}


export default AdminFee

