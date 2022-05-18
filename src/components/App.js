import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

/* write an <About> component here The <About> component should return a <div> with an id of about. To match the screenshot, the div should contain an <h2> element with the text "About." However, as long as it has an id of about, it will pass the test!*/
const About = ()=>{
  return (
    <div id='about'>
      <h2>About</h2>
    </div>
  )  
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
