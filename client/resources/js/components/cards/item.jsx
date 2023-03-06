import React, { Component } from 'react';
import axios from "axios";
import Search from "../utils/search";
import Moment from "moment";

const baseURL = "http://172.17.0.37/dashboard/dashboard/";

class Section extends Component {

    state = {
        selected : null,
        selectDate : Moment().format('YYYYMMDD'),
      };

      componentDidMount() {
        this.loadData(baseURL+'getDashboardinfo?&as_on='+this.state.selectDate);
      };

      chooseBranch = (selObj) => {
        console.log(selObj);
        this.setState({ selected:selObj });
        if(selObj){
            this.loadData(baseURL+'GetBrArDivData?br_code='+selObj.value+'&as_on='+this.state.selectDate);
        }else{
            this.loadData(baseURL+'getDashboardinfo?&as_on='+this.state.selectDate);
        }
      };

      loadData = (url)=>{
        var comp = this;
        axios({
            method: 'get',
            url: url,
            responseType: 'stream'
          })
            .then(function (response) {
                const data = JSON.parse(response.data);
                const d = data[0];
              comp.setState({ data:d });
              console.log(comp.state);
            });
      }

      selectDate = (selectedDate) => {
        console.log(selectedDate);
        this.setState({selectDate:Moment(selectedDate).format('YYYYMMDD')});
        if(this.state.selected){
            this.loadData(baseURL+'GetBrArDivData?br_code='+this.state.selected.value+'&as_on='+Moment(selectedDate).format('YYYYMMDD'));
        }else{
            this.loadData(baseURL+'getDashboardinfo?&as_on='+Moment(selectedDate).format('YYYYMMDD'));
        }
      };

  render() {

    return (


        
            <div className="row">
                <Search chooseBranch={this.chooseBranch} selectDate={this.selectDate} />

                {/* <Search /> */}
                <div className="row">
                 <div className="col-12">
                    <div className="col-md-4 col-sm-6">
                       
                    </div>
                    <div className="col-md-6 col-sm-6 ">
                        <h3 className="text-primary"><strong>{this.state.selected?.label}</strong></h3>
                    </div>
                    <div className="col-md-2 col-sm-6">
                    
                    </div>
                </div>
                   </div>
                <br />
                <br />

              
                    <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                    <span className="info-box-icon2 bg-info elevation-1"><i className="fa-solid fa-money-bill-transfer"></i></span>

                    <div className="info-box-content">
                        <span className="info-box-text">Asset/liability</span>
                        <span className="info-box-number">

                        {/*(Math.round(this.state.data?.ASSET * 100) / 100).toFixed(2) */}

                         {((Math.round(this.state.data?.ASSET * 100) / 100)/(10000000)).toFixed(2)}

                        {/* <small>%</small> */}
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                    <span className="info-box-icon bg-info elevation-1"><i className="fa-solid fa-bangladeshi-taka-sign"></i></span>


                    <div className="info-box-content">
                        <span className="info-box-text">deposit</span>
                        <span className="info-box-number">

                        {/*(Math.round(this.state.data?.DEPOSIT * 100) / 100).toFixed(2)*/}

                        {((Math.round(this.state.data?.DEPOSIT * 100) / 100)/(10000000)).toFixed(2)}

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

                        {/*(Math.round(this.state.data?.ADVANCE * 100) / 100).toFixed(2)*/}

                        {((Math.round(this.state.data?.ADVANCE * 100) / 100)/(10000000)).toFixed(2)}

                        {/* <small>%</small> */}
                        </span>
                    </div>
                    </div>
                </div>
            
           
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                        <span className="info-box-icon3 bg-info elevation-1"><i className="fa-solid fa-chart-line"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">classified loan</span>
                            <span className="info-box-number">

                            {/*(Math.round(this.state.data?.CL_BALANCE * 100) / 100).toFixed(2)*/}

                            {((Math.round(this.state.data?.CL_BALANCE * 100) / 100)/(10000000)).toFixed(2)}
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

                            {/* (Math.round(this.state.data?.INCOME * 100) / 100).toFixed(2)*/}

                            {((Math.round(this.state.data?.INCOME * 100) / 100)/(10000000)).toFixed(2)}

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

                            {/*(Math.round(this.state.data?.EXPENDITURE * 100) / 100).toFixed(2)*/}


                            {((Math.round(this.state.data?.EXPENDITURE * 100) / 100)/(10000000)).toFixed(2)}

                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                 <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                        <span className="info-box-icon6 bg-info elevation-1"><i className="fa-solid fa-money-bill-trend-up"></i></span>

                        <div className="info-box-content">
           
           

                            <span className="info-box-text">PROFIT/loss</span>
                            <span className="info-box-number">

                            {/*(Math.round(this.state.data?.PROFIT * 100) / 100).toFixed(2)*/}

                             {((Math.round(this.state.data?.PROFIT * 100) / 100)/(10000000)).toFixed(2)}

                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                  
                  <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                    
                        <span className="info-box-icon7 bg-info elevation-1"><i className="fa fa-bar-chart"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">no of account
</span>
                            <span className="info-box-number">
                            {/*(Math.round(this.state.data?.DEPOSIT_AC
                            * 100) / 100).toFixed(2)*/}
                         {(Math.round(this.state.data?.DEPOSIT_AC
                         * 100) / 100)+(Math.round(this.state.data?.LOAN_AC
                         * 100) / 100)}
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