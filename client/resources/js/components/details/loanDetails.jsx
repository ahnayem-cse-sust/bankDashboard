import React, { useState } from 'react';


const LoanDetails = (props) => {
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
            <div className="box-loan animate__animated animate__fadeInDownBig">
                <div className="card text-center">
                    <div className="card-header deposit-header">
                       Loan & Advance: {numberFormatter((((props.loan * 100)/100))/(10000000))} <span className="popupHeader-crore">Crore</span>
                    </div>
                    <div className="card-body">
                    <div className="col-12 col-sm-6 col-md-6">
                    <div className="info-box-card">                       
                    <span className="popup-text">Loans</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-1">
                <span className="popup-text">:</span>
                    </div>
                <div className="col-12 col-sm-6 col-md-5">
                    <div className="info-box-card-num">                       
                    <span className="popup-number">{numberFormatter((((props.details.LOAN_AMT * 100)/100))/(10000000))}</span> <span className="popup-crore">Crore</span>
                    </div>
                </div>
                
                <div className="col-12 col-sm-6 col-md-6">
                    <div className="info-box-card">                       
                    <span className="popup-text">OVERDRAFTS AND CASH CREDIT </span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-1">
                <span className="popup-text">:</span>
                    </div>
                <div className="col-12 col-sm-6 col-md-5">
                    <div className="info-box-card-num">                       
                    <span className="popup-number">{numberFormatter((((props.details.SOD_AMT * 100)/100))/(10000000))}</span> <span className="popup-crore">Crore</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                    <div className="info-box-card">                       
                    <span className="popup-text">BILLS PURCHASED AND DISCOUNTED</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-1">
                <span className="popup-text">:</span>
                    </div>
                <div className="col-12 col-sm-6 col-md-5">
                    <div className="info-box-card-num">                       
                    <span className="popup-number">{numberFormatter((((props.details.BPD_AMT * 100)/100))/(10000000))}</span> <span className="popup-crore">Crore</span>
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

export default LoanDetails;