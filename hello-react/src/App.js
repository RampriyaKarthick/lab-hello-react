import './App.css';
import ironhack from "./images/ironhack.png";
import topmenu from "./images/topmenu.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <nav className="navbar"> </nav>
      <div className="first-container">
      <div className="img1"> <img src={ironhack} alt="" />
      <img src={topmenu} alt="" />
      </div> 
      
      <div className="text-line">
        <h1>Say hello to</h1>
      </div>
      <div className="text-line">
        <h1>ReactJs</h1>
      </div> 

      <div className="head">
      <h4>You will learn how to use </h4>
      <h4>The most popular front end library,</h4>
      <h4>And become a super Ninja developer. </h4>
      </div>

       <button className="button">Awesome!</button>
       </div>
       <div className="second-container">
<div><img src={icon1} alt="" />
<h2>Declarative</h2>
<h5>React makes it painless to create interactive UIs.</h5></div>
<div><img src={icon2} alt="" />
<h2>Components</h2>
<h5>React makes it painless to create interactive UIs.</h5></div>
<div><img src={icon3} alt="" />
<h2>Single-Way</h2>
<h5>React makes it painless to create interactive UIs.</h5></div>
<div><img src={icon4} alt="" />
<h2>JSX</h2><h5>React makes it</h5><h5>painless to create interactive UIs.</h5></div>




       </div>
    </div>
  );
}

export default App;
