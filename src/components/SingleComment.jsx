import ListGroup from "react-bootstrap/ListGroup";
const SingleComment = (props) => {
  return (
    <ListGroup.Item key={props.commento.elementId}>
      <h3>{props.commento.comment}</h3>
      <h4>{props.commento.rate}</h4>
    </ListGroup.Item>
  );
};
export default SingleComment;
