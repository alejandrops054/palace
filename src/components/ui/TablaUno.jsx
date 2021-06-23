import React from 'react'
import { Link } from "react-router-dom";


const Morado = {
    color: "#9BA2C6"
}
const Verde = {
    color: "#00af9f"
}

const TablaUno = () => {

    
    return (
        <div className="border-top border-secondary" >
            <br/>
            <br/>
            

            <div className="d-flex flex-row bd-highlight ">
                <h5 className="p-2 flex-grow-1 bd-highlight"> Promises <span style={Verde}>$000.000.000.00</span></h5>
                <Link to='/FinancingPromises'>
                <h5 style={Verde}><i className="fas fa-plus p-2 bd-highlight"></i> Add promise</h5>
                </Link>
                <h5 className="p-2 bd-highlight " style={Morado}><i className="fas fa-plus "></i> Add credit card</h5>
                <h5 className="p-2 bd-highlight " style={Morado}><i className="fas fa-trash "></i> Add Delete credit card</h5>
                <h5 className="p-2 bd-highlight " style={Morado}><i className="fas fa-book "></i> Log</h5>
                <h5 className="p-2 bd-highlight " style={Morado}><i className="fas fa-sync "></i> Replace</h5>
            </div>


            <div className="table-responsive-lg">
                <table className="table">
                    <thead>
                        <tr>
                            <th><div className="checkbox_input"><input type="checkbox" name="checkRow3" checked /><span className="checkmark"></span></div></th>
                            <th scope="col">Priority</th>
                            <th scope="col"> Payment ID</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Down</th>
                            <th scope="col">Admin Fee</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col"><button className="btn btn-link"><i className="fas fa-ellipsis-v"></i></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><div className="checkbox_input"><input type="checkbox" name="checkRow3" /><span className="checkmark"></span></div></td>
                            <th scope="row">0</th>
                            <td>1</td>
                            <td>$2.50.00</td>
                            <td>$2.50.00</td>
                            <td>$0.00</td>
                            <td>12/25-2020</td>
                            <td>Alta</td>
                            <th scope="col"><button className="btn btn-link"><i className="fas fa-ellipsis-v"></i></button></th>
                        </tr>
                        <tr>
                            <td><div className="checkbox_input"><input type="checkbox" name="checkRow3" /><span className="checkmark"></span></div></td>
                            <th scope="row">0</th>
                            <td>2</td>
                            <td>$2.50.00</td>
                            <td>$2.50.00</td>
                            <td>$0.00</td>
                            <td>12/25-2020</td>
                            <td>Alta</td>
                            <th scope="col"><button className="btn btn-link"><i className="fas fa-ellipsis-v"></i></button></th>
                        </tr>
                        <tr>
                            <td><div className="checkbox_input"><input type="checkbox" name="checkRow3" /><span className="checkmark"></span></div></td>
                            <th scope="row">0</th>
                            <td>3</td>
                            <td>$2.50.00</td>
                            <td>$2.50.00</td>
                            <td>$0.00</td>
                            <td>12/25-2020</td>
                            <td>Alta</td>
                            <th scope="col"><button className="btn btn-link"><i className="fas fa-ellipsis-v"></i></button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
       
    )
}




export default TablaUno;
