import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="grow" />
    </div>
  );
}

export default Loader;
