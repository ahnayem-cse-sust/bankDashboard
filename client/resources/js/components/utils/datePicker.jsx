
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';



const datePickerComp = (props) => {
  const [startDate, setStartDate] = useState(new Date());


  return (
    <div className="row">
        {/* <div className="col-sm-4 label-div-select" > */}
            <label>As On:</label>
        {/* </div>
        <div className="col-sm-8 div-select"> */}
            <DatePicker
            showIcon
            selected={startDate} 
            dateFormat='dd/MM/yyyy'
            onSelect={props.selectDate}
            onChange={(date) => setStartDate(date)} 
            className='form-control dash-select'
            />
        {/* </div> */}
    </div>
  );
};

export default datePickerComp;