
function Main(props) {
          
    return (
      <div className="Main">
        <div className="d-flex flex-column justify-content-center align-items-start">
            <h5 className="fs-3 fw-semibold">{props.title}</h5>
            <p className="text-start">{props.text}</p>
          </div>
      </div>
    );
  }
  
export default Main;
  