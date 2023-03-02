// components/LineChart.js
import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";




class BarChart extends Component {

    constructor(props) {
        super(props);
        
      }

      componentDidMount() {
        
      }
 

  render() {
    return (
            <div className="">
                <div className="chart-container">
                <h2 style={{ textAlign: "center" }}>Current Growth</h2>
                <Bar
                  datasetIdKey='id'
                  data={{
                    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                      {
                        id: 1,
                        label: '',
                        data: [2, 5, 6, 7,6,9,4],
                      },
                      // {
                      //   id: 2,
                      //   label: '',
                      //   data: [3, 2, 1],
                      // },
                    ],
                  }}
                />
              </div>
            </div>
            
    );
  }
}

export default BarChart;