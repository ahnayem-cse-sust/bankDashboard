import React, { Component } from 'react';
import axios from "axios";
import Search from "../utils/search";

const baseURL = "http://172.17.0.37/dashboard/dashboard/";

class Section extends Component {

    state = {
        
      };

      componentDidMount() {
        var comp = this;
        axios({
            method: 'get',
            url: baseURL+'index',
            responseType: 'stream'
          })
            .then(function (response) {
                const data = JSON.parse(response.data);
                const d = data[0];
              comp.setState({ data:d });
              console.log(comp.state);
            });
      };

      chooseBranch = (br_code) => {
        console.log(br_code);
        var comp = this;
        axios({
            method: 'get',
            url: baseURL+'GetBrArDivData/'+br_code,
            responseType: 'stream'
          })
            .then(function (response) {
                const data = JSON.parse(response.data);
                const d = data[0];
              comp.setState({ data:d });
              console.log(comp.state);
            });
      };

  render() {

    return (
        
            <div className="row">
                <Search chooseBranch={this.chooseBranch} />
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                    <span className="info-box-icon bg-info elevation-1"><i className="fa-solid fa-bangladeshi-taka-sign"></i></span>


                    <div className="info-box-content">
                        <span className="info-box-text">deposit</span>
                        <span className="info-box-number">
                        {(Math.round(this.state.data?.DEPOSIT * 100) / 100).toFixed(2)}
                        {/* <small>%</small> */}
                        </span>
                    </div>
                    </div>
                </div>
                     <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                    <span className="info-box-icon1 bg-info elevation-1"><i className="fa-solid fa-money-bill-1-wave"></i></span>

                    <div className="info-box-content">
                        <span className="info-box-text">ADVANCE</span>
                        <span className="info-box-number">
                        {(Math.round(this.state.data?.ADVANCE * 100) / 100).toFixed(2)}
                        {/* <small>%</small> */}
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                    <span className="info-box-icon2 bg-info elevation-1"><i className="fa-solid fa-money-bill-transfer"></i></span>


                    <div className="info-box-content">
                        <span className="info-box-text">Asset/liability</span>
                        <span className="info-box-number">
                        {(-1)*(Math.round(this.state.data?.ASSET * 100) / 100).toFixed(2)}
                        {/* <small>%</small> */}
                        </span>
                    </div>
                    </div>
                </div>
           
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                        <span className="info-box-icon3 bg-info elevation-1"><i className="fa-solid fa-money-bills"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">classified loan</span>
                            <span className="info-box-number">
                            {(Math.round(this.state.data?.CL_BALANCE * 100) / 100).toFixed(2)}
                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                 
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                        <span className="info-box-icon4 bg-info elevation-1"><i className="far fa-money-bill-alt"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">INCOME</span>
                            <span className="info-box-number">
                            {(Math.round(this.state.data?.INCOME * 100) / 100).toFixed(2)}
                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                        <span className="info-box-icon5 bg-info elevation-1"><i className="fas fa-chart-pie"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">EXPENDITURE</span>
                            <span className="info-box-number">
                            {(Math.round(this.state.data?.EXPENDITURE * 100) / 100).toFixed(2)}
                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                 <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                        <span className="info-box-icon6 bg-info elevation-1"><i className="fa-solid fa-money-bill-trend-up"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">PROFIT</span>
                            <span className="info-box-number">
                            {(Math.round(this.state.data?.PROFIT * 100) / 100).toFixed(2)}
                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                  
                  <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                        <span className="info-box-icon7 bg-info elevation-1"><i className="fas fa-landmark"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">deposit account
</span>
                            <span className="info-box-number">
                            {(Math.round(this.state.data?.DEPOSIT_AC
 * 100) / 100).toFixed(2)}
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