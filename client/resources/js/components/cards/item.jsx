import React, { Component } from 'react';
import axios from "axios";
import Search from "../utils/search";
import Moment from "moment";
import BranchInfo from '../infoItems/branchInfo';

const baseURL = "http://172.17.0.37/dashboard/dashboard/";



class Section extends Component {



    state = {
        selected : null,
        selectDate : Moment('20230228').format('YYYYMMDD'),
        loading : true

      };

      componentDidMount() {
        this.loadData(baseURL+'getDashboardinfo?&as_on='+this.state.selectDate);
        let selObj = {};
        selObj.label = '';
        selObj.value = 'WHOLE BANK';
        this.setState({ selected:selObj });
      };

      chooseBranch = (selObj) => {
        console.log(selObj);
        if(selObj){
            this.loadData(baseURL+'GetBrArDivData?br_code='+selObj.value+'&as_on='+this.state.selectDate);
        }else{
            this.loadData(baseURL+'getDashboardinfo?&as_on='+this.state.selectDate);
        }
        if(selObj === null || selObj === undefined){
            selObj = {};
            selObj.label = '';
            selObj.value = 'WHOLE BANK';
        }
        this.setState({ selected:selObj });
      };

      loadData = (url)=>{
        var comp = this;
        this.setState({ loading:true });
        axios({
            method: 'get',
            url: url,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
                },
            responseType: 'stream'
          })
            .then(function (response) {
                const data = JSON.parse(response.data);
                const d = data[0];
              comp.setState({ data:d });
              console.log(comp.state);
              comp.setState({ loading:false });
            });
      }

      selectDate = (selectedDate) => {
        console.log(selectedDate);
        this.setState({selectDate:Moment(selectedDate).format('YYYYMMDD')});
        let br_code = this.state.selected.value;
        if(br_code = 'WHOLE BANK'){
            br_code = '';
        }
        if(br_code){
            this.loadData(baseURL+'GetBrArDivData?br_code='+br_code+'&as_on='+Moment(selectedDate).format('YYYYMMDD'));
        }else{
            this.loadData(baseURL+'getDashboardinfo?&as_on='+Moment(selectedDate).format('YYYYMMDD'));
        }
      }

    numberFormatter = (value) => {
        return parseFloat(parseFloat(value).toFixed(2)).toLocaleString(
        "en-IN",
        {
            useGrouping: true,
        }
        );
    }

      
   

  render() {

    return (
            <div className="row">
                
                <Search chooseBranch={this.chooseBranch} selectDate={this.selectDate} />        

                <BranchInfo selectedBranch={this.state.selected} />               
                <br />            

                
                { this.state.loading && <div class="loader"></div>} 
                { !this.state.loading && 
                <div>
                    <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                    <span className="info-box-icon bg-info elevation-1"><i className="fa fa-cubes blackiconcolor"></i></span>

                    <div className="info-box-content">
                        <span className="info-box-text">Asset/liability</span>
                        <span className="info-box-number">
                        {this.numberFormatter(((this.state.data?.ASSET * 100) / 100)/(10000000))} <span className="crore">Crore</span>
                        </span>
                    </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                    <span className="info-box-icon1 bg-info elevation-1"><i className="fa-solid fa-bangladeshi-taka-sign blackiconcolor"></i></span>


                    <div className="info-box-content">
                        <span className="info-box-text">deposit</span>
                        <span className="info-box-number">
                        {/* {((Math.round(this.state.data?.DEPOSIT * 100) / 100)/(10000000)).toFixed(2)} */}
                        {this.numberFormatter(((this.state.data?.DEPOSIT * 100) / 100)/(10000000))} <span className="crore">Crore</span>
                        </span>
                    </div>
                    </div>
                </div>
                    <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                    <span className="info-box-icon4 bg-info elevation-1"><i className="fa-solid fa-money-bill-1-wave blackiconcolor"></i></span>

                    <div className="info-box-content">
                        <span className="info-box-text">LOAN & ADVANCE</span>
                        <span className="info-box-number">

                        {/*(Math.round(this.state.data?.ADVANCE * 100) / 100).toFixed(2)*/}

                        {this.numberFormatter(((this.state.data?.ADVANCE * 100) / 100)/(10000000))} <span className="crore">Crore</span>

                        {/* <small>%</small> */}
                        </span>
                    </div>
                    </div>
                </div>
            
           
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                        <span className="info-box-icon3 bg-info elevation-1"><i className="fa-solid fa-chart-line blackiconcolor"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">classified loan</span>
                            <span className="info-box-number">

                            {/*(Math.round(this.state.data?.CL_BALANCE * 100) / 100).toFixed(2)*/}

                              {this.numberFormatter(((this.state.data?.CL_BALANCE * 100) / 100)/(10000000))} <span className="crore">Crore</span>
                             

                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                 
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                        <span className="info-box-icon2 bg-info elevation-1"><i className="far fa-money-bill-alt blackiconcolor"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">INCOME</span>
                            <span className="info-box-number">

                            {/* (Math.round(this.state.data?.INCOME * 100) / 100).toFixed(2)*/}

                                {this.numberFormatter(((this.state.data?.INCOME * 100) / 100)/(10000000))} <span className="crore">Crore</span>
                                

                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                  <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                        <span className="info-box-icon5 bg-info elevation-1"><i className="fas fa-chart-pie blackiconcolor"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">EXPENDITURE</span>
                            <span className="info-box-number">

                            {/*(Math.round(this.state.data?.EXPENDITURE * 100) / 100).toFixed(2)*/}


                           {this.numberFormatter(((this.state.data?.EXPENDITURE * 100) / 100)/(10000000))} <span className="crore">Crore</span>
                          

                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                 <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                        <span className="info-box-icon6 bg-info elevation-1"><i className="fa-solid fa-money-bill-trend-up blackiconcolor"></i></span>

                        <div className="info-box-content">
           
           

                            <span className="info-box-text">PROFIT/loss</span>
                            <span className="info-box-number">

                            {/*(Math.round(this.state.data?.PROFIT * 100) / 100).toFixed(2)*/}

                             {this.numberFormatter(((this.state.data?.PROFIT * 100) / 100)/(10000000))} <span className="crore">Crore</span>
                             

                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                  
                  <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                    
                        <span className="info-box-icon7 bg-info elevation-1"><i className="fa fa-bar-chart blackiconcolor"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">no of account
                            </span>
                            <span className="info-box-number">
                         {this.numberFormatter((((Math.round(this.state.data?.DEPOSIT_AC
                         * 100) / 100)+(Math.round(this.state.data?.LOAN_AC
                         * 100) / 100))))}

                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                    <span className="info-box-icon1 bg-info elevation-1"><i className="fa-solid fa-bangladeshi-taka-sign blackiconcolor"></i></span>


                    <div className="info-box-content">
                        <span className="info-box-text">deposit</span>
                        <span className="info-box-number">
                        {/* {((Math.round(this.state.data?.DEPOSIT * 100) / 100)/(10000000)).toFixed(2)} */}
                        {this.numberFormatter(((this.state.data?.DEPOSIT * 100) / 100)/(10000000))} <span className="crore">Crore</span>
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                    <span className="info-box-icon1 bg-info elevation-1"><i className="fa-solid fa-bangladeshi-taka-sign blackiconcolor"></i></span>


                    <div className="info-box-content">
                        <span className="info-box-text">deposit</span>
                        <span className="info-box-number">
                        {/* {((Math.round(this.state.data?.DEPOSIT * 100) / 100)/(10000000)).toFixed(2)} */}
                        {this.numberFormatter(((this.state.data?.DEPOSIT * 100) / 100)/(10000000))} <span className="crore">Crore</span>
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                    <span className="info-box-icon1 bg-info elevation-1"><i className="fa-solid fa-bangladeshi-taka-sign blackiconcolor"></i></span>


                    <div className="info-box-content">
                        <span className="info-box-text">deposit</span>
                        <span className="info-box-number">
                        {/* {((Math.round(this.state.data?.DEPOSIT * 100) / 100)/(10000000)).toFixed(2)} */}
                        {this.numberFormatter(((this.state.data?.DEPOSIT * 100) / 100)/(10000000))} <span className="crore">Crore</span>
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                    <span className="info-box-icon1 bg-info elevation-1"><i className="fa-solid fa-bangladeshi-taka-sign blackiconcolor"></i></span>


                    <div className="info-box-content">
                        <span className="info-box-text">deposit</span>
                        <span className="info-box-number">
                        {/* {((Math.round(this.state.data?.DEPOSIT * 100) / 100)/(10000000)).toFixed(2)} */}
                        {this.numberFormatter(((this.state.data?.DEPOSIT * 100) / 100)/(10000000))} <span className="crore">Crore</span>
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                    <span className="info-box-icon1 bg-info elevation-1"><i className="fa-solid fa-bangladeshi-taka-sign blackiconcolor"></i></span>


                    <div className="info-box-content">
                        <span className="info-box-text">deposit</span>
                        <span className="info-box-number">
                        {/* {((Math.round(this.state.data?.DEPOSIT * 100) / 100)/(10000000)).toFixed(2)} */}
                        {this.numberFormatter(((this.state.data?.DEPOSIT * 100) / 100)/(10000000))} <span className="crore">Crore</span>
                        </span>
                    </div>
                    </div>
                </div>
                </div>
                 }
            </div>      
    );
  }
}

export default Section;