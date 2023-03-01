import React, { Component } from 'react';
import axios from "axios";
import Search from "../utils/search";

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
                <Search />
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                    <span className="info-box-icon bg-info elevation-1"><i className="fa-solid fa-bangladeshi-taka-sign"></i></span>


                    <div className="info-box-content">
                        <span className="info-box-text">Total deposit</span>
                        <span className="info-box-number">
                        {(Math.round(this.state.data?.DEPOSIT * 100) / 100).toFixed(2)}
                        {/* <small>%</small> */}
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                    <span className="info-box-icon bg-info elevation-1"><i className="fas fa-dice-d20"></i></span>


                    <div className="info-box-content">
                        <span className="info-box-text">Total Asset</span>
                        <span className="info-box-number">
                        {(Math.round(this.state.data?.ASSET * 100) / 100).toFixed(2)}
                        {/* <small>%</small> */}
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                    <span className="info-box-icon bg-info elevation-1"><i className="fa-solid fa-money-bill-1-wave"></i></span>

                    <div className="info-box-content">
                        <span className="info-box-text">Total ADVANCE</span>
                        <span className="info-box-number">
                        {(Math.round(this.state.data?.ADVANCE * 100) / 100).toFixed(2)}
                        {/* <small>%</small> */}
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                        <span className="info-box-icon bg-info elevation-1"><i className="fa-solid fa-money-bill-transfer"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">Total LIABILITY</span>
                            <span className="info-box-number">
                            {(Math.round(this.state.data?.LIABILITY * 100) / 100).toFixed(2)}
                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                        <span className="info-box-icon bg-info elevation-1"><i className="fa-solid fa-money-bill-trend-up"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">Total PROFIT</span>
                            <span className="info-box-number">
                            {(Math.round(this.state.data?.PROFIT * 100) / 100).toFixed(2)}
                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                        <span className="info-box-icon bg-info elevation-1"><i className="far fa-money-bill-alt"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">Total INCOME</span>
                            <span className="info-box-number">
                            {(Math.round(this.state.data?.INCOME * 100) / 100).toFixed(2)}
                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                        <span className="info-box-icon bg-info elevation-1"><i className="fas fa-chart-pie"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">Total EXPENDITURE</span>
                            <span className="info-box-number">
                            {(Math.round(this.state.data?.EXPENDITURE * 100) / 100).toFixed(2)}
                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                  
                  <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                        <span className="info-box-icon bg-info elevation-1"><i className="fas fa-landmark"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">Total deposit account
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