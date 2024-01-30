import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import datahorror from "../data/horror.json";
import { Component } from "react";

class ComponentAllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row className="g-3">
          {datahorror.map((libro) => {
            return (
              <Col key={libro.asin} xs={12} sm={10} md={6} lg={3}>
                <Card style={{ height: "80%", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src={libro.img}
                    style={{ height: "60%" }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between align-items-center card-bg">
                    <Card.Title className="center">{libro.title}</Card.Title>
                    <Card.Text className="center">{libro.category}</Card.Text>
                    <Button
                      variant="secondary"
                      style={{ fontFamily: "monospace" }}
                    >
                      € {libro.price}
                    </Button>
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
