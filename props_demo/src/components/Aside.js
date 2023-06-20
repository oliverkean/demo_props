function Aside(props) {
    return (
      <div className="Aside">
          <div className="d-flex flex-column justify-content-center align-items-start">
            <img src={props.img}/>
          </div>
      </div>
    );
  }
  
export default Aside;
  