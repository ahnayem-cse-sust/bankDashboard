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
        branchOptions : []
      };
    this.selectDivRef = React.createRef();
    this.selectAreaRef = React.createRef();
    this.selectBranchRef = React.createRef();
    }

    componentDidMount() {
      var comp = this;
      axios({
          method: 'get',
          url: baseURL+'getdivisions',
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
      this.selectAreaRef.current.clearValue();
      this.selectBranchRef.current.clearValue();
      var comp = this;
      comp.setState({ areaOptions: [] });
      comp.setState({ branchOptions: [] });
      if(selectedOpt != null){
        axios.get(baseURL+'getareas?div_code='+selectedOpt.value).then((response) => {
          comp.setState({ areaOptions: response.data });
        });
      }
      this.props.chooseBranch(selectedOpt);
    };

    handleAreaSelect = (selectedOpt) => {
      this.selectBranchRef.current.clearValue();
      var comp = this;
      comp.setState({ branchOptions: [] });
      if(selectedOpt != null){
        axios.get(baseURL+'getbranchesbyarea?ar_code='+selectedOpt.value).then((response) => {
          comp.setState({ branchOptions: response.data });
        });
      }
      selectedOpt = selectedOpt ? selectedOpt : this.selectDivRef.current.props.value;
      this.props.chooseBranch(selectedOpt);
    };

    handleBranchSelect = (selectedOpt) => {
      selectedOpt = selectedOpt ? selectedOpt : this.selectAreaRef.current.props.value;
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
                        ref={this.selectDivRef}
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
                      ref={this.selectAreaRef}
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
              
              <div className='col-md-3 col-sm-3'>
                <label>Select Branch :</label>
                      <Select
                        ref={this.selectBranchRef}
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