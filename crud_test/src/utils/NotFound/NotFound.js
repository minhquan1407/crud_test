import React from "react";
import { Alert } from "react-bootstrap";

function NotFound() {
  return (
    <div>
      {" "}
      <>
        <Alert variant="danger" className="mt-3">
          <Alert.Heading>Oh 404 | Not Found! You got an error!</Alert.Heading>
          <p>Hello bro! Bro logging zoi` 😍</p>
        </Alert>
      </>
    </div>
  );
}

export default NotFound;
