import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/SignUp.css";
import InputField from "./InputField";
import SignInButton from "./SignInButton";

// functional component for rendering sign up form
function SignUp() {
  return (
    <div className="sign-up">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <Form className="sign-up-form">
              <h1 className="form-title">
                <strong>Sign In</strong>
              </h1>
              <Form.Group controlId="formBasicEmail" className="formBasicEmail">
                <InputField inputType="email" inputPlaceholder="Email or Mobile number" inputName="EmailBox" /> {/* Input component for email address */}
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="formBasicPassword">
                <InputField inputType="password" inputPlaceholder="Password" inputName="PasswordBox" /> {/* Input component for password */}
              </Form.Group>
              <SignInButton buttonVariant="danger" buttonType="submit" buttonName="sign-up-button" buttonText="Sign In" /> {/* Button component to sign in */}
              <p> OR </p>
              <SignInButton buttonVariant="secondary" buttonName="get-sign-in-code" buttonText="Use a sign in code" /> {/* Button component to get a sign in code */}
              <p className="forgot-password">
                <a href="#">Forgot password?</a> {/* Link to recover password */}
              </p>
              <div className="rememberMeGroup">
                {" "}
                {/* Remember me checkbox */}
                <input type="checkbox" className="rememberMe" />
                <p>Remember me</p>
              </div>
              <p className="sign-up-link">
                New to Netflix?<a href="#">Sign up now</a> {/* Link to create account */}
              </p>
              <p className="reCAPTCHA">
                This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href="#">Learn more.</a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
