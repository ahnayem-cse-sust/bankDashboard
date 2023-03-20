import React, { Component } from 'react';
import Select from 'react-select';
import axios from "axios";
import DatePicker from "../utils/datePicker";


const baseURL = "http://172.17.0.37/dashboard/dashboard/";

class Search extends Component {

    constructor(props) {
    super(props);
    this.state = {
        divisionOptions : [],
        areaOptions : [],
        branchOptions : [],
        selectedDivision : null,
        selectedArea : null,
        selectedBranch : null
      };
    }

    componentDidMount() {
      var thisObj = this;
      axios({
          method: 'get',
          url: baseURL+'getdivisions',
          responseType: 'stream'
        })
          .then(function (response) {
            const data = JSON.parse(response.data);
            thisObj.setState({ divisionOptions:data });
          });
    
    }

    handleDivisionChange = (selectedOpt) => {
      var thisObj = this;

      let myPromise = new Promise(function(myResolve, myReject) {
        thisObj.setState({ selectedDivision : null });
        thisObj.setState({ selectedArea : null });
        thisObj.setState({ selectedBranch : null });
        thisObj.setState({ branchOptions: [] });
        thisObj.setState({ areaOptions: [] });
        myResolve(); 
        myReject('Error occured on setting the data.'); 
      });

      myPromise.then(()=>{
        thisObj.setState({ selectedDivision : selectedOpt });
        thisObj.props.chooseBranch(selectedOpt);
        if(selectedOpt){
          axios.get(baseURL+'getareas?div_code='+selectedOpt.value).then((response) => {
            thisObj.setState({ areaOptions: response.data });
          }).catch((err)=>{
            console.log(err);
          });
        }
      });

    }

    handleAreaSelect = (selectedOpt) => {
      var thisObj = this;

      let myPromise = new Promise(function(myResolve, myReject) {
        thisObj.setState({ selectedArea : null });
        thisObj.setState({ selectedBranch : null });
        thisObj.setState({ branchOptions: [] });
        myResolve(); 
        myReject('Error occured on setting the data.'); 
      });

      myPromise.then(()=>{
        thisObj.setState({ selectedArea : selectedOpt });
        if(selectedOpt){
          axios.get(baseURL+'getbranchesbyarea?ar_code='+selectedOpt.value).then((response) => {
            thisObj.setState({ branchOptions: response.data });
          }).catch((err)=>{
            console.log(err);
          });
          thisObj.props.chooseBranch(selectedOpt);
        } else {
          thisObj.props.chooseBranch(thisObj.state.selectedDivision);
        }
      });

    }

    handleBranchSelect = (selectedOpt) => {
      var thisObj = this;
      thisObj.setState({ selectedBranch : selectedOpt });
      if(selectedOpt){
        thisObj.props.chooseBranch(selectedOpt);
      } else {
        thisObj.props.chooseBranch(thisObj.state.selectedArea);
      }
    };

  render() {

    return (
            <div className="row">
              
              <div className='col-md-3 col-sm-3'>
                    {/* <div className='col-sm-4 col-md-4 label-div-select'> */}
                      <label>Select Division :</label>
                    {/* </div>
                    <div className='col-md-8 col-sm-4 div-select'> */}
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isDisabled={false}
                        isLoading={false}
                        isClearable={true}
                        isSearchable={true}
                        options={this.state.divisionOptions}
                        onChange={this.handleDivisionChange}
                      />
                    {/* </div> */}
              </div>
              
              <div className='col-md-3 col-sm-3'>
                {
                  this.state.selectedDivision && 
                  <div>
                    <label>Select Area :</label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isDisabled={false}
                      isLoading={false}
                      isClearable={true}
                      isSearchable={true}
                      options={this.state.areaOptions}
                      onChange={this.handleAreaSelect}
                    />
                  </div>
                }
              </div>
              
              <div className='col-md-3 col-sm-3'>
                {
                  this.state.selectedArea && 
                  <div>
                    <label>Select Branch :</label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isDisabled={false}
                      isLoading={false}
                      isClearable={true}
                      isSearchable={true}
                      options={this.state.branchOptions}
                      onChange={this.handleBranchSelect}
                    />
                  </div>
                }
                
              </div>
              
              <div className='col-md-1 col-sm-1 padding-right-20px'>

              </div>

              <div className='col-md-2 col-sm-2 padding-right-20px'>
                <DatePicker selectDate={this.props.selectDate}  />
              </div>
              
              <br />
              <br />
            </div>



            
    );
  }
}

export default Search;