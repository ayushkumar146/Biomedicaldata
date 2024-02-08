import React, { useEffect, useState } from 'react';
import "./Barr.css";

const Bar = (props) => {
  const [d, sd] = useState(1);
  const [a,sa]=useState("Low");

  useEffect(() => {
    sd(props.val);
  }, [props.val]);

  const getColor = (width) => {
    if (width < 40) {
      return 'green'; // Change color to green if width is less than 40
    } else if (width < 60) {
      return 'orange'; // Change color to orange if width is less than 60
    } else {
      return 'red'; // Change color to red for other widths
    }
  };

  const color = getColor(d);
  
  useEffect(() => {
    if (d < 40) {
      sa("LOW");
    } else if (d < 60) {
      sa("MEDIUM");
    } else {
      sa("HIGH");
    }
  }, [d]);

  return (
    <div className="progress-bar" style={{'--width': d, backgroundColor: color}} data-label={a}></div>
  );
}

export default Bar;
