import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;

import PropTypes from "prop-types";

FormContainer.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
