import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Modale = (props) => {
  const initialNewComment = {
    comment: "",
    rate: "1",
    elementId: props.asin,
  };
  // state = {
  //   newComment: {
  //     comment: "",
  //     rate: "1",
  //     elementId: this.props.asin,
  //   },
  // };
  const [newComment, setNewComment] = useState(initialNewComment);

  const newCommentSubmit = (e) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOTUwYjViMjYxNTAwMTk4YTY5MzYiLCJpYXQiOjE3MDY3OTIyMDMsImV4cCI6MTcwODAwMTgwM30.0Hw_LARiHlBjPQ38iVSzxWjnwfzE2jiyA3iahWrPFCM",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => {
        if (response.ok) {
          alert("Data saved successfully");
        }
      })

      .catch((err) => {
        console.log("Errore nella chiamata", err);
      });
  };

  return (
    <div
      key={props.commentsToShow.elementId}
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Scrivi una recensione</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("stato corrente", newComment);
            }}
          >
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Scrivi il tuo commento</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newComment.comment}
                onChange={(e) => {
                  setNewComment({
                    ...newComment,
                    comment: e.target.value,
                  });

                  // this.setState({
                  //   newComment: {
                  //     ...this.state.newComment,
                  //     comment: e.target.value,
                  //   },
                  // });
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Che voto dai?</Form.Label>
              <Form.Select
                aria-label="Rating"
                required
                value={newComment.rate}
                onChange={(e) => {
                  setNewComment({ ...newComment, rate: e.target.value });
                  // this.setState({
                  //   newComment: {
                  //     ...this.state.newComment,
                  //     rate: e.target.value,
                  //   },
                  // });
                }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Chiudi</Button>
          <Button onClick={newCommentSubmit} type="button" variant="primary">
            Salva
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};
export default Modale;
