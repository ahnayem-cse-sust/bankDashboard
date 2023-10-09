import React, { useState } from 'react';


const AcctDetails = (props) => {
    const [data, setData] = useState([]);

    function numberFormatter (value) {
        return parseFloat(parseFloat(value).toFixed(2)).toLocaleString(
        "en-IN",
        {
            useGrouping: true,
        }
        );
    }

    return (
        <div className="popup-box">
            <div className="box-acct animate__animated animate__fadeInDownBig">
                <div className="card text-center">
                    <div className="card-header deposit-header">
                       Number of Account: <span className="popupHeadnum">{props.acct} </span>
                    </div>
                    <div className="card-body">
                    <div className="col-12 col-sm-6 col-md-6">
                    <div className="info-box-card">                       
                    <span className="popup-text">Deposit Account No.</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-1">
                <span className="popup-text">:</span>
                    </div>
                <div className="col-12 col-sm-6 col-md-5">
                    <div className="info-box-card-num">                       
                    <span className="popup-number">{numberFormatter(props.deposit)}</span>
                    </div>
                </div>
                
                <div className="col-12 col-sm-6 col-md-6">
                    <div className="info-box-card">                       
                    <span className="popup-text">Loan Account No.</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-1">
                <span className="popup-text">:</span>
                    </div>
                <div className="col-12 col-sm-6 col-md-5">
                    <div className="info-box-card-num">                       
                    <span className="popup-number">{numberFormatter(props.loan)}</span>
                    </div>
                </div>
                
                    </div>
                    <div className="card-footer text-muted">
                   
                    </div>
                </div>
           {props.content}
         </div>
         </div>
    );

};

export default AcctDetails;