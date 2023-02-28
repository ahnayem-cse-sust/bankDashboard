import React, { Component } from 'react';
import Select from 'react-select';
import axios from "axios";

import 'react-select/dist/css/react-select.css';

const baseURL = "http://172.17.0.37/dashboard/";

class Search extends Component {

    constructor(props) {
    super(props);
    this.state = {
        options : [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
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
                <Select
                    name="form-field-name"
                    value="one"
                    options={options}
                    onChange={logChange}
                    />
            </div>
            
    );
  }
}

export default Search;