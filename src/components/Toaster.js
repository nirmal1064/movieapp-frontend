import { useState } from "react";
import { Toast } from "react-bootstrap";

const Toaster = ({ msg }) => {
  const [show, setShow] = useState(true);

  return (
    <div className="position-fixed bottom-0 start-50 translate-middle-x p-3">
      <Toast
        className="bg-dark"
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide>
        <Toast.Header>{msg ? msg : "Hello"}</Toast.Header>
      </Toast>
    </div>
  );
};

export default Toaster;
