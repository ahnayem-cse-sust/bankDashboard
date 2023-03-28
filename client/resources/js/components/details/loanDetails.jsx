import React, { useState } from 'react';


const DepositDetails = (props) => {
    const [data, setData] = useState([]);

    return (
        <div className="popup-box">
            <div className="box">
                <div className="card text-center">
                    <div className="card-header deposit-header">
                       Loan Details
                    </div>
                    <div className="card-body">
                    <div className="col-12 col-sm-6 col-md-6">
                    <div className="info-box-card">                       
                    <span className="popup-text">Current Deposit</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-1">
                <span className="popup-text">:</span>
                    </div>
                <div className="col-12 col-sm-6 col-md-5">
                    <div className="info-box-card-num">                       
                    <span className="popup-number"></span>
                    </div>
                </div>
                
                <div className="col-12 col-sm-6 col-md-6">
                    <div className="info-box-card">                       
                    <span className="popup-text">Saving Deposit </span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-1">
                <span className="popup-text">:</span>
                    </div>
                <div className="col-12 col-sm-6 col-md-5">
                    <div className="info-box-card-num">                       
                    <span className="popup-number"></span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                    <div className="info-box-card">                       
                    <span className="popup-text">Short Notice Deposit </span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-1">
                <span className="popup-text">:</span>
                    </div>
                <div className="col-12 col-sm-6 col-md-5">
                    <div className="info-box-card-num">                       
                    <span className="popup-number"></span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                    <div className="info-box-card">
                       
                    <span className="popup-text">Fixed Deposit</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-1">
                <span className="popup-text">:</span>
                    </div>
                <div className="col-12 col-sm-6 col-md-5">
                    <div className="info-box-card-num">
                       
                    <span className="popup-number"></span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                    <div className="info-box-card">
                       
                    <span className="popup-text">Deposit Sceme </span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-1">
                <span className="popup-text">:</span>
                    </div>
                <div className="col-12 col-sm-6 col-md-5">
                    <div className="info-box-card-num">
                       
                    <span className="popup-number"></span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                    <div className="info-box-card">                       
                    <span className="popup-text">Foreign Deposit</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-1">
                <span className="popup-text">:</span>
                    </div>
                <div className="col-12 col-sm-6 col-md-5">
                    <div className="info-box-card-num">                       
                    <span className="popup-number"></span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                    <div className="info-box-card">
                       
                    <span className="popup-text">Bill Payable </span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-1">
                <span className="popup-text">:</span>
                    </div>
                <div className="col-12 col-sm-6 col-md-5">
                    <div className="info-box-card-num">                       
                    <span className="popup-number"></span>
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

export default DepositDetails;