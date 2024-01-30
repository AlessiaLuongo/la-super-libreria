import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ComponentFooter = () => {
  return (
    <Card>
      <ListGroup variant="flush">
        <ListGroup.Item className="center">
          Made with <i class="bi bi-heart"></i>
        </ListGroup.Item>
        <ListGroup.Item className="center">Questions?</ListGroup.Item>
        <ListGroup.Item className="center">Alessia Luongo</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};
export default ComponentFooter;
