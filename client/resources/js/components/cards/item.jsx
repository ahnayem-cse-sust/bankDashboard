import React, { Component } from 'react';
import axios from "axios";
// import Search from "../utils/search";

const baseURL = "http://172.17.0.37/dashboard/";

class Section extends Component {

    state = {
        
      }

      componentDidMount() {
        var comp = this;
        axios({
            method: 'get',
            url: baseURL+'dashboard/index',
            responseType: 'stream'
          })
            .then(function (response) {
                const data = JSON.parse(response.data);
                const d = data[0];
              comp.setState({ data:d });
              console.log(comp.state);
            });
      }

  render() {

    return (
        
            <div className="row">
                <div className='col-md-12'>
                {/* <Select
                    name="form-field-name"
                    value="one"
                    options={options}
                    onChange={logChange}
                    /> */}
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                    <span className="info-box-icon bg-info elevation-1"><i class="fa-solid fa-bangladeshi-taka-sign"></i></span>

                    <div className="info-box-content">
                        <span className="info-box-text">Total Advance</span>
                        <span className="info-box-number">
                        {(Math.round(this.state.data?.TOTAL_ADVANCE * 100) / 100).toFixed(2)}
                        {/* <small>%</small> */}
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                    <span className="info-box-icon bg-info elevation-1"><i class="fa-solid fa-bangladeshi-taka-sign"></i></span>

                    <div className="info-box-content">
                        <span className="info-box-text">Total Asset</span>
                        <span className="info-box-number">
                        {(Math.round(this.state.data?.TOTAL_ASSET * 100) / 100).toFixed(2)}
                        {/* <small>%</small> */}
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                    <span className="info-box-icon bg-info elevation-1"><i class="fa-solid fa-bangladeshi-taka-sign"></i></span>

                    <div className="info-box-content">
                        <span className="info-box-text">Total Deposit</span>
                        <span className="info-box-number">
                        {(Math.round(this.state.data?.TOTAL_DEPOSIT * 100) / 100).toFixed(2)}
                        {/* <small>%</small> */}
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                    <span className="info-box-icon bg-info elevation-1"><i class="fa-solid fa-bangladeshi-taka-sign"></i></span>

                    <div className="info-box-content">
                        <span className="info-box-text">Total Liabilities</span>
                        <span className="info-box-number">
                        {(Math.round(this.state.data?.TOTAL_LIABILITIES * 100) / 100).toFixed(2)}
                        {/* <small>%</small> */}
                        </span>
                    </div>
                    </div>
                </div>
            </div>
            
    );
  }
}

export default Section;