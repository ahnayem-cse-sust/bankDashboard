import React, { useState } from 'react';


const DepositDetails = (props) => {
    const [data, setData] = useState([]);
    const [modalIsOpen, setModalIsOPen] = useState(false)

    function handleClose() {
        setModalIsOPen(false);
    }

    return (
      
         <div className="popup-box">
            <div className="box">
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box ">
                       
                    <span className="">CD AMT :{props.details.CD_AMT}</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box ">
                       
                    <span className="">SB_AMT : {props.details.SB_AMT}</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box ">
                       
                    <span className="">SND_AMT : {props.details.SND_AMT}</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box ">
                       
                    <span className="">FIXED_DEP_AMT : {props.details.FIXED_DEP_AMT}</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box ">
                       
                    <span className="">REC_DEP_AMT : {props.details.REC_DEP_AMT}</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box ">
                       
                    <span className="">FC_DEP_AMT : {props.details.FC_DEP_AMT}</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box ">
                       
                    <span className="">BP_AMT : {props.details.BP_AMT}</span>
                    </div>
                </div>
           <span className="close-icon" onClick={handleClose}>x</span>          
           {props.content}
         </div>
       </div>
    );

};

export default DepositDetails;