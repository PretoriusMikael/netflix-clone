import React from "react";

//functional component for input fields
function InputField(props) {
  return <input type={props.inputType} placeholder={props.inputPlaceholder} className={props.inputName} />;
}

export default InputField;
