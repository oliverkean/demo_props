import Aside from "./Aside.js";
import Main from "./Main.js";
import List from "./List.js";
function Actions(props) {
  var lists = props.lists
    return (
      <div className="Actions">
           <div className="container mb-5"> 
                <div className="col d-flex">
                  <div className="row"> 
                      <div className="col col-md-8 mx-auto d-flex">
                        <Main title={props.title} text={props.text} list={props.lists} />
                      </div>

                      <div className="col col-md-4 d-flex align-items-center">
                        <Aside img={props.img}/>
                      </div>
                      <List lists={lists} />

                  </div>
                </div>
            </div>
      </div>
    );
  }
  
export default Actions;
  