import React, { Component, useState  } from 'react';
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
        selectedDivision: {},
        selectedArea: null,
        selectedBranch: {}
      };
    }

    componentDidMount() {
      var comp = this;
      axios({
          method: 'get',
          url: baseURL+'getBranches',
          responseType: 'stream'
        })
          .then(function (response) {
            const data = JSON.parse(response.data);
            comp.setState({ divisionOptions:data });
          });
    
    }

    // handleBranchChange = (selectedBr) => {
    //   console.log(selectedBr);
    //   this.props.chooseBranch(selectedBr);
    // };

    handleDivisionChange = (selectedOpt) => {
      console.log(selectedOpt);
      this.props.chooseBranch(selectedOpt);
      var comp = this;
      comp.setState({ areaOptions: [] });
      comp.setState({ branchOptions: [] });
      axios.get(baseURL+'getBranches').then((response) => {
        comp.setState({ areaOptions: response.data });
      });
    };

    handleAreaSelect = (selectedOpt) => {
      console.log(selectedOpt);
      this.props.chooseBranch(selectedOpt);
      var comp = this;
      comp.setState({ branchOptions: {} });
      axios.get(baseURL+'getBranches').then((response) => {
        comp.setState({ branchOptions: response.data });
      });
    };

    handleBranchSelect = (selectedOpt) => {
      console.log(selectedOpt);
      this.props.chooseBranch(selectedOpt);
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
                    <label>Select Area :</label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isDisabled={false}
                      isLoading={false}
                      isClearable={true}
                      isSearchable={true}
                      value={this.state.selectedArea}
                      options={this.state.areaOptions}
                      onChange={this.handleAreaSelect}
                    />
              </div>
              
              <div className='col-md-3 col-sm-3'>
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