import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";
import Button from "react-bootstrap/Button";
import Modale from "./Modale";

class CommentArea extends Component {
  state = {
    commenti: [],
    toggleModale: false,
  };
  fetchComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOTUwYjViMjYxNTAwMTk4YTY5MzYiLCJpYXQiOjE3MDY3OTIyMDMsImV4cCI6MTcwODAwMTgwM30.0Hw_LARiHlBjPQ38iVSzxWjnwfzE2jiyA3iahWrPFCM",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((comments) => {
        this.setState({
          commenti: comments,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <ListGroup>
        {this.state.commenti.map((commento) => {
          return <SingleComment commento={commento} key={commento.elementId} />;
        })}
        <Button
          onClick={(e) => {
            this.setState({
              ...this.state.commenti,
              toggleModale: !this.state.toggleModale,
            });
          }}
        >
          Commenta
        </Button>
        {this.state.toggleModale ? (
          <Modale commentsToShow={this.state.commenti}></Modale>
        ) : (
          ""
        )}
      </ListGroup>
    );
  }
}

export default CommentArea;
