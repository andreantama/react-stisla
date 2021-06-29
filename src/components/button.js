import React, {useState, useEffect} from "react";

const Button = (props) => {
  const [className, setClassName] = useState(props.className);
  useEffect(() => {
    if(props.loading === true) {
      setClassName(className+" btn-progress");
    } else {
      setClassName(props.className);
    }
  },[props.loading])
  return (
    <input type="submit" className={className} tabIndex="4" value={props.value} />
  );
}
export default Button;