/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
const FinancigPromises = () =>{
    return(
        <div id="modal" className="mb-5">
       
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Financing promises</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-6 mb-3">
                                <p>Down payment remainig</p>
                                <h5>$48,250.00</h5>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <p>Principal remainig</p>
                                <h5>$48,250.00</h5>
                            </div>
                        </div>

                        <div className="row">
					        <div className="col-lg-12 mb-3">
							    <label for="application">Type refinancing</label>
							    <select id="office" className="form-control">
									<option></option>
								</select>
						    </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <label>Create financing promises</label>
                            </div>

                            <div className="col-lg-6">
                                <label>Financing type</label>
                                <select id="office" className="form-control">
									<option></option>
								</select>

                                <label>Total payments</label>
                                <select id="office" className="form-control">
									<option>1</option>
								</select>

                                <label>Inital month</label>
                                <select id="office" className="form-control">
									<option></option>
								</select>

                                <label>Periodicity number</label>
                                <select id="office" className="form-control">
									<option></option>
								</select>
                            </div>
                            <div className="col-lg-6">
                            <label>Payment way</label>
                                <select id="office" className="form-control">
									<option></option>
								</select>

                                <label>Periodicity</label>
                                <select id="office" className="form-control">
									<option></option>
								</select>

                                <label>First payment</label>
                                <select id="office" className="form-control">
									<option>MM/DD/YY</option>
								</select>

                                <label>Sudget</label>
                                <select id="office" className="form-control">
									<option></option>
								</select>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default FinancigPromises;