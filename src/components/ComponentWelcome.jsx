import Alert from "react-bootstrap/Alert";

const ComponentWelcome = () => {
  return (
    <>
      {["dark"].map((variant) => (
        <Alert key={variant} variant={variant} className="center">
          Welcome to our library! If your curious
          <Alert.Link href="#"> Try to click here</Alert.Link>
        </Alert>
      ))}
    </>
  );
};
export default ComponentWelcome;
