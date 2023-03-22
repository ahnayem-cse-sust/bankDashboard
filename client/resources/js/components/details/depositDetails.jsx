import React, { useState } from 'react';


const DepositDetails = (props) => {
    const [data, setData] = useState([]);

    return (
        <div className="popup-box">
            CD AMT : {props.details.CD_AMT}
        </div>
    );

};

export default DepositDetails;