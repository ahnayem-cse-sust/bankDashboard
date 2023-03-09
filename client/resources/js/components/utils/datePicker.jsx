
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';



const datePickerComp = (props) => {
  const [startDate, setStartDate] = useState(Date.parse('28 Feb 2023 00:00:00 GMT'));


  return (
    <div className="row">
        <div className="col-sm-3 label-div-select" >
            <label>As_on:</label>
        </div>
        <div className="col-sm-9" div-select>
            <DatePicker
            showIcon
            selected={startDate} 
            dateFormat='dd/MM/yyyy'
            onSelect={props.selectDate}
            onChange={(date) => setStartDate(date)} 
            className='form-control'
            />
        </div>
    </div>
  );
};

export default datePickerComp;