/*Sistema Intelligence 2.0
  Módulo Contratos
  Versión 1.0
  Author: IntregraIT Contratos
  Comentarios: xxxxx
*/
import React from "react";

//falta modificar tabla
function TableMemberInquiry() {
  return (
    <main>
      <article className="content-area">
        <h2 className="mt-5 mb-5">Date Range</h2>
        <div>
          <table id="resume-table" className="table">
            <form>
              <div className="form-group">
                <div className="row">
                  <div
                    id="gm-group"
                    className="input-group get-member col-lg-6 mb-3"
                  >
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Get member"
                      aria-describedby="Get member"
                      placeholder="Get member..."
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        id="get-member"
                      >
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                    <button
                      type="button"
                      id="btn-filters"
                      className="btn btn-link ml-2"
                      alt="Filters"
                      title="Filters"
                      onclick="return openFilters()"
                    >
                      <i className="fas fa-filter"></i>
                    </button>
                  </div>

                  <div className="col-lg-6 mb-3 text-right">
                    <button type="button" className="btn btn-primary">
                      <i className="fas fa-user-plus mr-2"></i>New member
                    </button>
                  </div>

                  <div id="filters-container" className="filters-container col">
                    <div className="row">
                      <div className="col-lg-3 mb-3">
                        <label for="office">Office</label>
                        <select id="office" className="form-control">
                          <option>Select an office</option>
                          <option>Sunrise</option>
                        </select>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <label for="application">Application</label>
                        <input
                          type="text"
                          name="application"
                          id="application"
                          placeholder="1234567"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-3 mb-3">
                        <label for="application">Date</label>
                        <input
                          type="date"
                          name="application"
                          id="application"
                          placeholder="1234567"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <thead>
              <tr>
                <th>
                  <div className="checkbox_input">
                    <input type="checkbox" name="checkRow3" checked />
                    <span className="checkmark"></span>
                  </div>
                </th>
                <th scope="col">Fin.ID</th>
                <th scope="col">Payment ID</th>
                <th scope="col">Amount</th>
                <th scope="col">Admin Fee</th>
                <th scope="col">Amount Paid</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="checkbox_input">
                    <input type="checkbox" name="checkRow3" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>21757</td>
                <td>1</td>
                <td>$534.72</td>
                <td>$0.00</td>
                <td>$0.00</td>
                <td>02/15/2020</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>
                  <div className="checkbox_input">
                    <input type="checkbox" name="checkRow3" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>21757</td>
                <td>1</td>
                <td>$534.72</td>
                <td>$0.00</td>
                <td>$0.00</td>
                <td>02/15/2020</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>
                  <div className="checkbox_input">
                    <input type="checkbox" name="checkRow3" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>21757</td>
                <td>1</td>
                <td>$534.72</td>
                <td>$0.00</td>
                <td>$0.00</td>
                <td>02/15/2020</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>
                  <div className="checkbox_input">
                    <input type="checkbox" name="checkRow3" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>21757</td>
                <td>1</td>
                <td>$534.72</td>
                <td>$0.00</td>
                <td>$0.00</td>
                <td>02/15/2020</td>
                <td>Alta</td>
              </tr>
            </tbody>
          </table>

          <div className="table-footer">
            <small id="table-meta">4 of 2000 registers</small>

            <nav aria-label="Page navigation">
              <ul className="table-pagination">
                <li className="tp-item">
                  <a className="tp-link" href="#">
                    <i className="fas fa-step-backward"></i>
                  </a>
                </li>
                <li className="tp-item">
                  <a className="tp-link active" href="#">
                    1
                  </a>
                </li>
                <li className="tp-item">
                  <a className="tp-link" href="#">
                    2
                  </a>
                </li>
                <li className="tp-item">
                  <a className="tp-link" href="#">
                    3
                  </a>
                </li>
                <li className="tp-item">
                  <a className="tp-link" href="#">
                    <i className="fas fa-step-forward"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </article>
    </main>
  );
}

export default TableMemberInquiry;
