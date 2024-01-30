import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import datahhorror from "../data/horror.json";
import { Component } from "react";

class ComponentAllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row className="g-1">
          {datahhorror.map((libro) => {
            return (
              <Col key={libro.asin} xs={12} md={8} lg={3}>
                <Card style={{ height: "85%" }}>
                  <Card.Img
                    variant="top"
                    src={libro.img}
                    style={{ height: "60%" }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                    <Card.Title className="center">{libro.title}</Card.Title>
                    <Card.Text className="center">{libro.category}</Card.Text>
                    <Button variant="primary">€ {libro.price}</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default ComponentAllTheBooks;
