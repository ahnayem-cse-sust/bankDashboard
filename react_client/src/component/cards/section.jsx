import React, { Component } from 'react';
import Items from './item';
import Table from './table';
import LineChart from '../utils/charts/lineChart';
import BarChart from '../utils/charts/barChart';


class Section extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

      componentDidMount() {
        
      }

  render() {
    return (
            <div>
                <Items />
                <div className='row'>
                <div className='col-md-12'>
                    {/* <BarChart /> */}
                </div>
                </div>
                <div className='row'>
                <div className='col-md-6'>
                    {/* <Table /> */}
                </div>
                <div className='col-md-6'>
                    {/* <LineChart /> */}
                </div>
                </div>
            </div>
            
    );
  }
}

export default Section;