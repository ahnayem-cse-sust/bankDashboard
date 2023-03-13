import React, { Component, useState, useEffect   } from 'react';
import axios from "axios";


const baseURL = "http://172.17.0.37/dashboard/dashboard/";

const BranchInfo = (props) => {
    const [data, setData] = useState([]);
    const [brCode, setBrCode] = useState(props.selectedBranch?.value);

    useEffect(() => {
        // console.log(props.selectedBranch?.value);
        if(brCode !== props.selectedBranch?.value){
          if(props.selectedBranch){
            setBrCode(props.selectedBranch.value);
            getAllData(props.selectedBranch.value);
          } else{
            setBrCode(undefined);
            getAllData(undefined);
          }
            
        }
      });

    async function getAllData(br_code) {
        br_code = br_code === 'WHOLE BANK' ? '' : br_code;
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

    data.slice().reverse().forEach((d,i) => {
      // console.log(i);
        if(d.value>1 && i>0){
              brDataHtml.push(<span className='br-count'>{d.label} : {d.value}   </span>)
            } else if(d.value>1){
              brDataHtml.push(<span className='br-count'>{d.label} : {d.value}   </span>)
        }
    })

    return (
      <div className="row">
          <div className="col-sm-12" >
          <div className="col-12 text-center br-name">   
                         {props.selectedBranch?.label &&
                        <h3 className=""><strong>{props.selectedBranch?.value + '-' +
                        props.selectedBranch?.label.slice(0,-5)} </strong></h3>
                        }
                        {!props.selectedBranch?.label &&
                        <h3 className=""><strong>{props.selectedBranch?.value } </strong></h3>
                        }
                        {brDataHtml}
                </div>
          </div>
      </div>
    );
  };

export default BranchInfo;