import React, { Component, useState  } from 'react';
import Select from 'react-select';
import axios from "axios";
import DatePicker from "../utils/datePicker";


const baseURL = "http://172.17.0.37/dashboard/dashboard/";

class Search extends Component {

    constructor(props) {
    super(props);
    this.state = {
      branchOptions : [
        
      ],
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
            comp.setState({ branchOptions:data });
            // console.log(data);
          });
    
    }

    handleBranchChange = (selectedBr) => {
      console.log(selectedBr);
      this.props.chooseBranch(selectedBr);
    };

    handleAreaSelect = (selectedBr) => {
      console.log(selectedBr);
      this.props.chooseBranch(selectedBr);
    };

    handleBranchSelect = (selectedBr) => {
      console.log(selectedBr);
      this.props.chooseBranch(selectedBr);
    };

  render() {

    return (
            <div className="row">
              
              <div className='col-md-3 col-sm-3'>
                    {/* <div className='col-sm-4 col-md-4 label-div-select'> */}
                      <label>Search for :</label>
                    {/* </div>
                    <div className='col-md-8 col-sm-4 div-select'> */}
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isDisabled={false}
                        isLoading={false}
                        isClearable={true}
                        isSearchable={true}
                        options={this.state.branchOptions}
                        onChange={this.handleBranchChange}
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
                      options={this.state.branchOptions}
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