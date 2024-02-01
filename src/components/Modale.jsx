import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Component } from "react";

class Modale extends Component {
  state = {
    newComment: {
      comment: "",
      rate: "1",
    },
  };

  newCommentSubmit = (e) => {
    e.preventDefault();
    console.log("stato corrente", this.state.newComment);
  };

  render() {
    return (
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Scrivi una recensione</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Scrivi il tuo commento</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => {
                    this.setState({
                      newComment: {
                        ...this.state.newComment,
                        comment: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Che voto dai?</Form.Label>
                <Form.Select
                  aria-label="Rating"
                  required
                  value={this.state.newComment.rate}
                  onChange={(e) => {
                    this.setState({
                      newComment: {
                        ...this.state.newComment,
                        rate: e.target.value,
                      },
                    });
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
            <Button variant="secondary">Chiudi </Button>
            <Button
              onClick={this.newCommentSubmit}
              type="button"
              variant="primary"
            >
              Salva
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}
export default Modale;
