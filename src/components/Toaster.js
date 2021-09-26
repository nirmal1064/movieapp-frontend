import { useState } from "react";
import { Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { clearMovieMsg } from "../redux/actions/movieActions";

const Toaster = ({ msg }) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const toastOnClose = () => {
    setShow(false);
    dispatch(clearMovieMsg());
  };

  return (
    <div className="position-fixed bottom-0 start-50 translate-middle-x p-3">
      <Toast
        className="bg-dark"
        onClose={toastOnClose}
        show={show}
        delay={5000}
        autohide>
        <Toast.Header>
          <strong>{msg}</strong>
        </Toast.Header>
      </Toast>
    </div>
  );
};

export default Toaster;
