import React, { useState } from 'react';


const DepositDetails = (props) => {
    const [data, setData] = useState([]);

    return (
        <div className="popup-box">
            <div className="box animate__animated animate__fadeInDown">
                <div className="card text-center">
                    <div className="card-header deposit-header">
                       Deposit Details
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
                    <span className="popup-number">{props.details.CD_AMT}</span>
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
                    <span className="popup-number">{props.details.SB_AMT}</span>
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
                    <span className="popup-number">{props.details.SND_AMT}</span>
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
                       
                    <span className="popup-number">{props.details.FIXED_DEP_AMT}</span>
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
                       
                    <span className="popup-number">{props.details.REC_DEP_AMT}</span>
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
                    <span className="popup-number">{props.details.FC_DEP_AMT}</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                    <div className="info-box-card">
                       
                    <span className="popup-text">Bills Payable </span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-1">
                <span className="popup-text">:</span>
                    </div>
                <div className="col-12 col-sm-6 col-md-5">
                    <div className="info-box-card-num">                       
                    <span className="popup-number">{props.details.BP_AMT}</span>
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