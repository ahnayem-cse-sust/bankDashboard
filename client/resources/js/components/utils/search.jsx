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
      this.props.chooseBranch(selectedBr);
    };

  render() {

    return (
            <div className="row">
              <br />
              <div className='col-md-2'>

              </div>
              <div className='col-md-4 col-sm 4'>
                <div className='row'>
                  <div className='col-sm-4 col-md-4 label-div-select'>
                    <label>Search for:</label>
                  </div>
                  <div className='col-md-8 col-sm-4 div-select'>
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
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
               
              </div>
              <div className='col-md-3'>
                <DatePicker selectDate={this.props.selectDate} />
              {/* <div className='row'>
                  <div className='col-sm-4 col-md-4 label-div-select'>
                    <label>Date:</label>
                  </div>
                  <div className='col-md-8 col-sm-8 div-select'>
                    <DatePicker
                    showIcon
                    selected={this.state.startDate} 
                    onChange={(date) => this.dateChange(date)} className='form-control' />
                  </div>
                  </div> */}
              </div>
              <br />
              <br />
              <br />
            </div>



            
    );
  }
}

export default Search;