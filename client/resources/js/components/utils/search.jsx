import React, { Component, useState  } from 'react';
import Select from 'react-select';
import axios from "axios";
import DatePicker from "react-datepicker";
import Moment from "moment";

import "react-datepicker/dist/react-datepicker.css";


const baseURL = "http://172.17.0.37/dashboard/dashboard/";

class Search extends Component {



    constructor(props) {
    super(props);
    this.state = {
      branchOptions : [
        
      ],
      startDate : new Date()
      ,
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

    handleBranchChange = (selected) => {
      this.props.chooseBranch(selected);
    };

  render() {

    return (

           
            
            <div className="row">
              <br />
              <div className='col-md-2'>

              </div>
              <div className='col-md-4'>
                <div className='row'>
                  <div className='col-sm-4 col-md-4 label-div-select'>
                    <label>Search for:</label>
                  </div>
                  <div className='col-md-8 col-sm-8 div-select'>
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
              <div className='col-md-4'>
               <div className='row'>
                  <div className='col-sm-4 col-md-4 label-div-select'>
                    <label>Date:</label>
                  </div>
                  <div className='col-md-8 col-sm-8 div-select'>
                    <DatePicker selected={this.state.startDate} className='form-control' />
                  </div>
                  </div>
              </div>
              <div className='col-md-2'>
                {/* <Select
                    className="basic-single"
                    classNamePrefix="select"
                    isDisabled={false}
                    isLoading={false}
                    isClearable={true}
                    isSearchable={true}
                    options={this.state.branchOptions}
                  /> */}
              </div>
              <br />
              <br />
              <br />
            </div>



            
    );
  }
}

export default Search;