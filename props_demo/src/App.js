import './App.css';

//components
import Navbar from "./components/Navbar.js";
import Aside from "./components/Aside.js";
import Main from "./components/Main.js";
import Action from "./components/Action.js";
import Reference from './components/Reference.js';
import Footer from "./components/Footer.js";
import List from './components/List'

//images
import globe from "./images/globe.png";
import leaf from "./images/leaf.jpg";
import action1 from "./images/action1.jpg";
import action2 from "./images/action2.jpg";
import action3 from "./images/action3.jpg";

function App() {

  //suggestions
  //use proptypes for type of property

  /*
    alternative is array instead of obj
  */


  const lists1 = {list1: "Don't cut tree", list2: "Don't cut 3", list3: "Don't cut tree"}
  const lists2 = {list1: "Don't cut me", list2: "Don't cut you", list3: "Don't cut him"}
  const lists3 = {list1: "Don't cut yamada", list2: "Don't cut anna", list3: "Don't cut us"}

  
  return (
    <div className="App">
        {/* navbar */}
        <Navbar/>
        {/*end of navbar */}

        <div className="container">
          <div className="row px-5 mx-auto g-3 mt-5">
            <div className="col col-md-4 d-flex align-items-center">
              <Main title="Help save the Planet" text="Climate change is the greatest threat to our existence in our short history on this planet. Nobody’s going to buy their way out of its effects. " isBtn={true} btn="Donate Now"/>
            </div>

            <div className="col col-md-8 d-flex justify-content-center">
              <Aside img={globe}/>
            </div>
          </div>

          <section className="px-3 mb-5 mt-5" id="About">
            <div className="fw-bolder text-uppercase fs-1 mb-3 text-center">About</div>
              <div className="row g-4"> 
                  <div className="col col-lg-4 col-md-12 d-flex justify-content-center align-items-center">
                  <Aside img={leaf}/>
                  </div>

                  <div className="col col-lg-7 col-md-12 mx-auto d-flex justify-content-center">
                  <Main bootstrap="fs-1 fw-semibold" title="Save the World" text="Climate change is the single most serious threat facing our planet today. We must reduce carbon emissions to, or below, levels agreed to in the Paris Climate Agreement to prevent catastrophic harm. And with global energy demand expected to increase 56% over the next couple decades, it will be impossible to meet those emissions targets if we don’t transition to clean energy sources like wind and solar power. The good news is that we have the technology and know-how to make this transition happen. We just need the political will and public support to make it a reality." />
                  </div>
              </div>
          </section> 

          <section className="mb-5 mt-5" id="Action">
            <div className="fw-bolder text-uppercase fs-1 mb-3 text-center">Take <span>Action</span></div>
              <div className="row"> 
                <Action title="1. Reduce emissions" text="Use sustainable transportation such as bicycling or public transportation instead of cars whenever possible. For long-distance travel, trains are more sustainable than airplanes as they emit less CO2 into the atmosphere. If you prefer cars, it is important to note that increasing your speed will increase CO2 emissions and expenses ." img={action1} lists={lists1}/>
                
              </div>

              <div className="row">
                <Action title="2. Save energy" text="Being careful how we use home appliances, we can save energy and, of course, money at the end of the month. When purchasing new appliances, look for those with an Energy Star label. These appliances are designed to consume less energy than their non-energy-efficient counterparts." img={action2} lists={lists2} /> 
              </div>

              <div className="row">
                <Action title="3. Act against forest loss" text="As far as possible, avoid anything that may be a fire hazard. Plant a tree, to absorb up to a ton of CO2." img={action3} lists={lists3}/> 
              </div>
          </section> 

          <section className="mt-5 mb-5" id="References">
            <div className="fw-bolder text-uppercase fs-1 mb-3 text-center">References</div>
              <div className="d-flex flex-column px-2"> 
                <Reference/>
              </div>
          </section> 
        </div>

        <footer className="my-5">
          <Footer/>
        </footer>

    </div>
  );
}

export default App;
