
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';



const datePickerComp = (props) => {
  const [startDate, setStartDate] = useState(new Date());


  return (
    <div className="row">
        <div className="col-sm-3 date-label">
            Date  :
        </div>
        <div className="col-sm-9">
            <DatePicker
            showIcon
            selected={startDate} 
            onSelect={props.selectDate}
            onChange={(date) => setStartDate(date)} 
            />
        </div>
    </div>
  );
};

export default datePickerComp;