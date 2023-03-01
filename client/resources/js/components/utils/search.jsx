import React, { Component, useState  } from 'react';
import Select from 'react-select';
import axios from "axios";


const baseURL = "http://172.17.0.37/dashboard/";

class Search extends Component {

    constructor(props) {
    super(props);
    this.state = {
      branchOptions : [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    };
    }

    componentDidMount() {
    var comp = this;
    
    }

    logChange(val) {
        console.log("Selected: " + val);
      }

  render() {

    return (
            
            <div className="row">
              <br />
              <div className='col-md-4'>

              </div>
              <div className='col-md-3'>
                <div className='row'>
                  <div className='col-sm-3 col-md-3 label-div-select'>
                    <label>Brnach:</label>
                  </div>
                  <div className='col-md-9 col-sm-9 div-select'>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isDisabled={false}
                      isLoading={false}
                      isClearable={true}
                      isSearchable={true}
                      options={this.state.branchOptions}
                    />
                  </div>
                </div>
              </div>
              <div className='col-md-2'>

              </div>
              <div className='col-md-3'>
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