import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { AddModal } from "./AddModal";

const Doctors = ({ doctors }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>

      <Row className="">
        {doctors.map((dr) => (
          <Col key={dr.id} sm={6} md={4} lg={3}>
            <img src={dr.img} alt={dr.name} className="img-thumbnail doctor-img"/>
            <h5>{dr.name}</h5>
            <h6>{dr.dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal/>
    </Container>
  );
};

export default Doctors;
