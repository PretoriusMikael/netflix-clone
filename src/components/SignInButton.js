import React from "react";
import Button from "react-bootstrap/Button";

// functional component for buttons
function SignInButton(props) {
  return (
    <Button variant={props.buttonVariant} type={props.buttonType} className={props.buttonName}>
      <strong>{props.buttonText}</strong>
    </Button>
  );
}

export default SignInButton;
