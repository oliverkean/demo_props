function Main(props) {
              
    const isBtn = props.isBtn;
    if(isBtn == true){
      return (
        <div className="Main">
          <div className="d-flex flex-column justify-content-center align-items-start">
              <h1 className="fw-bold text-uppercase text-start">{props.title}</h1>
              <p className="text-start">{props.text}</p>
              <a className="btn btn-success rounded-pill align-self-center">{props.btn}</a>
            </div>
        </div>
      );
    }

    return (
      <div className="Main">
        <div className="d-flex flex-column justify-content-center align-items-start">
            <h5 className={props.bootstrap}>{props.title}</h5>
            <p className="text-start">{props.text}</p>
          </div>
      </div>
    );
  }
  
export default Main;
  