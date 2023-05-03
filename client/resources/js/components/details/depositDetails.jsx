import React, { useState } from 'react';


const DepositDetails = (props) => {
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
            <div className="box animate__animated animate__fadeInDownBig">
                <div className="card text-center">
                    <div className="card-header deposit-header">
                       Deposit : <span className="popupHeadnum">{numberFormatter((((props.deposit * 100)/100))/(10000000))}</span> <span className="popupHeader-crore">Crore</span>
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
                    <span className="popup-number">{numberFormatter((((props.details.CD_AMT * 100)/100))/(10000000))}</span> <span className="popup-crore">Crore</span>
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
                    <span className="popup-number">{numberFormatter((((props.details.SB_AMT * 100)/100))/(10000000))}</span> <span className="popup-crore">Crore</span>
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
                    <span className="popup-number">{numberFormatter((((props.details.SND_AMT * 100)/100))/(10000000))}</span> <span className="popup-crore">Crore</span>
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
                       
                    <span className="popup-number">{numberFormatter((((props.details.FIXED_DEP_AMT * 100)/100))/(10000000))}</span> <span className="popup-crore">Crore</span>
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
                       
                    <span className="popup-number">{numberFormatter((((props.details.REC_DEP_AMT * 100)/100))/(10000000))}</span> <span className="popup-crore">Crore</span>
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
                    <span className="popup-number">{numberFormatter((((props.details.FC_DEP_AMT * 100)/100))/(10000000))}</span> <span className="popup-crore">Crore</span>
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
                    <span className="popup-number">{numberFormatter((((props.details.BP_AMT * 100)/100))/(10000000))}</span> <span className="popup-crore">Crore</span>
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