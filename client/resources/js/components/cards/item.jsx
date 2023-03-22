import React, { Component } from 'react';
import axios from "axios";
import Search from "../utils/search";
import Moment from "moment";
import BranchInfo from '../infoItems/branchInfo';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DepositDetails from '../details/depositDetails';

const baseURL = "http://172.17.0.37/dashboard/dashboard/";



class Section extends Component {

    state = {
        selected : null,
        selectDate : Moment().format('YYYYMMDD'),
        loading : true
      };

      componentDidMount() {
        var thisObj = this;
        let loadDataObj = thisObj.loadData(baseURL+'getDashboardinfo?&as_on='+this.state.selectDate);
        loadDataObj.then((response)=>{
            thisObj.setData(response).then(()=>{
                thisObj.setState({ loading : false });
                let selObj = {};
                selObj.label = '';
                selObj.value = 'WHOLE BANK';
                thisObj.setState({ selected:selObj });
            })
        });
      };

      chooseBranch = (selObj) => {
        var thisObj = this;
        thisObj.setState({ loading : true });
        let loadDataObj;
        if(selObj){
            loadDataObj = thisObj.loadData(baseURL+'GetBrArDivData?br_code='+selObj.value+'&as_on='+this.state.selectDate);
        }else{
            loadDataObj = thisObj.loadData(baseURL+'getDashboardinfo?&as_on='+thisObj.state.selectDate);
        }
        loadDataObj.then((response)=>{
            thisObj.setData(response).then(()=>{
                thisObj.setState({ loading : false });
                if(selObj === null || selObj === undefined){
                    selObj = {};
                    selObj.label = '';
                    selObj.value = 'WHOLE BANK';
                }
                this.setState({ selected : selObj });
            })
        });
      };

      loadData = (url)=>{
        return axios({
            method: 'get',
            url: url,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
                },
            responseType: 'stream'
          });
      }

      setData = (response) =>{
        var thisObj = this;
        let myPromise = new Promise(function(myResolve, myReject) {
                const data = JSON.parse(response.data);
                const d = data[0];  
                thisObj.setState({ data:d });
                myResolve(); 
                myReject('Error occured on setting the data.'); 
            });
        return myPromise;
      }

      selectDate = (selectedDate) => {
        var thisObj = this;
        thisObj.setState({ loading : true });
        thisObj.setState({selectDate:Moment(selectedDate).format('YYYYMMDD')});
        thisObj.setState({ loading:true });
        let br_code = thisObj.state.selected.value;
        if(br_code === 'WHOLE BANK'){
            br_code = '';
        }
        let loadDataObj;
        if(br_code){
            loadDataObj = thisObj.loadData(baseURL+'GetBrArDivData?br_code='+br_code+'&as_on='+Moment(selectedDate).format('YYYYMMDD'));
        }else{
            loadDataObj = thisObj.loadData(baseURL+'getDashboardinfo?as_on='+Moment(selectedDate).format('YYYYMMDD'));
        }
        loadDataObj.then((response)=>{
            console.log(response);
            thisObj.setData(response).then(()=>{
                thisObj.setState({ loading : false });
            })
        });
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
                
                { this.state.loading && <div className="loader"></div>} 
                { !this.state.loading && 
                <div>
                    <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                    <span className="info-box-icon bg-info elevation-1"><i className="fa fa-cubes blackiconcolor"></i></span>

                    <div className="info-box-content">
                        <span className="info-box-text">Asset</span>
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
                    <Popup trigger={<span className="info-box-text">deposit</span>}
                           position="">
                        <div className="popup-box">
                            <DepositDetails details={this.state.data.DEPOSIT_DETAILS}/>
                        </div>
                    </Popup>
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
                            <span className="info-box-text">number of account
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

                        <span className="info-box-icon6 bg-info elevation-1 box-color-daratio"><i className="fa-solid fa-percent blackiconcolor"></i></span>

                        <div className="info-box-content">
           
           

                            <span className="info-box-text">A/D ratio</span>
                            <span className="info-box-number">

                            {/*(Math.round(this.state.data?.PROFIT * 100) / 100).toFixed(2)*/}

                             {(this.state.data?.DA_RATIO)}                              

                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                        <span className="info-box-icon6 bg-info elevation-1 box-color-loancl"><i className="fa-solid fa-landmark blackiconcolor"></i></span>

                        <div className="info-box-content">
           
           

                            <span className="info-box-text">cl loan ratio</span>
                            <span className="info-box-number">

                            {/*(Math.round(this.state.data?.PROFIT * 100) / 100).toFixed(2)*/}

                             {(this.state.data?.LOAN_CL_RATIO)}
                             

                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                        <span className="info-box-icon6 bg-info elevation-1 box-color-export"><i className="fas fa-file-export blackiconcolor"></i></span>

                        <div className="info-box-content">
           
           

                            <span className="info-box-text">export</span>
                            <span className="info-box-number">

                            {/*(Math.round(this.state.data?.PROFIT * 100) / 100).toFixed(2)*/}

                             {this.numberFormatter(((this.state.data?.EXPORT * 100) / 100)/(10000000))} <span className="crore">Crore</span>
                             

                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                        <span className="info-box-icon6 bg-info elevation-1 box-color-import"><i className="fas fa-file-import blackiconcolor"></i></span>

                        <div className="info-box-content">
           
           

                            <span className="info-box-text">import</span>
                            <span className="info-box-number">

                            {/*(Math.round(this.state.data?.PROFIT * 100) / 100).toFixed(2)*/}

                             {this.numberFormatter(((this.state.data?.IMPORT * 100) / 100)/(10000000))} <span className="crore">Crore</span>
                             

                            {/* <small>%</small> */}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">

                        <span className="info-box-icon6 bg-info elevation-1 box-color-fr-remitance"><i className="fas fa-sort-amount-up-alt blackiconcolor"></i></span>

                        <div className="info-box-content">
           
           

                            <span className="info-box-text">fr remittence</span>
                            <span className="info-box-number">

                            {/*(Math.round(this.state.data?.PROFIT * 100) / 100).toFixed(2)*/}

                             {this.numberFormatter(((this.state.data?.FR_REMITTANCE * 100) / 100)/(10000000))} <span className="crore">Crore</span>
                             

                            {/* <small>%</small> */}
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