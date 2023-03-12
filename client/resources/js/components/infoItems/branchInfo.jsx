import React, { Component, useState, useEffect   } from 'react';
import axios from "axios";


const baseURL = "http://172.17.0.37/dashboard/dashboard/";

const BranchInfo = (props) => {
    const [data, setData] = useState([]);
    const [brCode, setBrCode] = useState(props.selectedBranch?.value);

    useEffect(() => {
        // console.log(props.selectedBranch?.value);
        if(brCode !== props.selectedBranch?.value){
            setBrCode(props.selectedBranch.value);
            getAllData(props.selectedBranch.value);
        }
      });

    async function getAllData(br_code) {
        let url = baseURL+'getBranchCount?br_code='+br_code; 
        try {
            axios({
                method: 'get',
                url: url,
                headers: { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                    },
                responseType: 'stream'
              })
                .then(function (response) {
                    const data = JSON.parse(response.data);
                    setData(data);
                  console.log(data);
                });
        } catch (err) {
            setData(null);
        }
      }

    const brDataHtml = []

    data.slice().reverse().forEach((d) => {
        if(d.value>1){
        brDataHtml.push(<h4 className=''>{d.label} : {d.value}</h4>)
        }
    })

    return (
      <div className="row">
          <div className="col-sm-12" >
          <div className="col-12 text-center br-name">   
                         {props.selectedBranch &&
                        <span className=""><strong>{props.selectedBranch?.value + '-' +
                        props.selectedBranch?.label.slice(0,-5)} </strong></span>
                        }
                        {brDataHtml}
                </div>
          </div>
      </div>
    );
  };

export default BranchInfo;