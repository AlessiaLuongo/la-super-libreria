import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";
import Button from "react-bootstrap/Button";
import Modale from "./Modale";
import { ListGroupItem } from "react-bootstrap";

const CommentArea = (props) => {
  console.log(props);
  // state = {
  //   commenti: [],
  //   toggleModale: false,
  // };
  const [commenti, setCommenti] = useState([]);
  const [toggleModale, setToggleModale] = useState(false);

  const fetchComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        props.selectedBook,
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
        setCommenti(comments);
        // this.setState({
        //   commenti: comments,

        // });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (props.selectedBook) {
      fetchComments();
    }
  }, [props.selectedBook]);

  const handleToggleModale = () => {
    setToggleModale(!toggleModale);
    // this.setState({
    //   toggleModale: !this.state.toggleModale,
    // });
  };

  return (
    <div>
      <ListGroup>
        {commenti.map((commento, index) => (
          <SingleComment
            commento={commento}
            key={`${commento.elementId}-${index}`}
          />
        ))}
      </ListGroup>

      <ListGroupItem>
        <Button onClick={handleToggleModale}>Commenta</Button>
      </ListGroupItem>

      {toggleModale && (
        <Modale commentsToShow={commenti} asin={props.selectedBook} />
      )}
    </div>
  );
};

export default CommentArea;
