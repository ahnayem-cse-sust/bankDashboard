import React, { Component } from 'react';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

      componentDidMount() {
        
      }

  render() {
    return (
        
        <div className="card">
        <div className="card-header border-transparent">
          <h3 className="card-title">Latest Updates</h3>
        </div>
        <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table m-0">
                    <thead>
                    <tr>
                      <th>SL No</th>
                      <th>Item Name</th>
                      <th>Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>01</td>
                      <td>Deposit</td>
                      <td>
                        <div className="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>Loan</td>
                      <td>
                        <div className="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                      </td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>Expenditure</td>
                      <td>
                        <div className="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>Income</td>
                      <td>
                        <div className="sparkbar" data-color="#00c0ef" data-height="20">90,80,-90,70,-61,83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>Profit</td>
                      <td>
                        <div className="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                      </td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>Profit</td>
                      <td>
                        <div className="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                      </td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>Profit</td>
                      <td>
                        <div className="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
        </div>
            
    );
  }
}

export default Table;