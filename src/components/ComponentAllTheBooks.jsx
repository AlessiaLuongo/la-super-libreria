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
        <Row>
          {datahhorror.map((libro) => {
            return (
              <Col xs={12} md={8} lg={3}>
                <Card>
                  <Card.Img variant="top" src={libro.img} />
                  <Card.Body>
                    <Card.Title>{libro.title}</Card.Title>
                    <Card.Text>{libro.category}</Card.Text>
                    <Button variant="primary">{libro.price}</Button>
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
