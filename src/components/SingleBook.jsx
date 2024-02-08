import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const SingleBook = (props) => {
  return (
    <Col key={props.libro.asin} xs={12} sm={10} md={6} lg={3}>
      <Card
        style={{
          height: "80%",
          border: `${
            props.selectedBook === props.libro.asin ? "3px solid red" : "none"
          }`,
        }}
      >
        <Card.Img
          alt="cover"
          variant="top"
          src={props.libro.img}
          style={{ height: "60%" }}
          onClick={() => {
            if (props.selectedBook === props.libro.asin) {
              props.setSelectedBook(null);
            } else {
              props.setSelectedBook(props.libro.asin);
            }
          }}
        />
        <Card.Body className="d-flex flex-column justify-content-between align-items-center card-bg">
          <Card.Title className="center">{props.libro.title}</Card.Title>
          <Card.Text className="center">{props.libro.category}</Card.Text>
          <Button className="price-button">€ {props.libro.price}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
