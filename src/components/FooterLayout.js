import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/FooterLayout.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";

// functional component for rendering footer layout
function FooterLayout() {
  return (
    <div className="Footer">
      <Container>
        <Row className="Questions">
          <Col xs={3}>Questions? Call 0 801-000-723</Col> {/* first row */}
        </Row>

        {/* second row */}
        <Row>
          <Col xs={3}>
            <a href="#">FAQ</a>
          </Col>
          <Col xs={3}>
            <a href="#">Help center</a>
          </Col>
          <Col xs={3}>
            <a href="#">Terms of use</a>
          </Col>
          <Col xs={3}>
            <a href="#">Privacy</a>
          </Col>
        </Row>

        {/* third row */}
        <Row>
          <Col xs={3}>
            <a href="#">Cookie Preference</a>
          </Col>
          <Col xs={3}>
            <a href="#">Corporate Information</a>
          </Col>
        </Row>

        {/* fourth row */}
        <Row>
          <Col>
            <Dropdown className="LanguageButton">
              <Dropdown.Toggle variant="secondary" className="Language">
                {" "}
                {/* dropdown button for language preferences */}
                English
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item href="#" className="dropdown-item">
                  {" "}
                  {/* only english is available */}
                  English
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col className="linkWebPage">
            <a target="_blank" href="https://www.netflix.com/login">
              {" "}
              {/* link to page that was recreated */}
              Link to original web page
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterLayout;
