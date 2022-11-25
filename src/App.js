import React from "react";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Feature from "./components/Features";
import LatestArticles from "./components/LatestArticles";

function App() {
  return (
    <div className="App">
      <Header />
       <Hero />
      <Feature /> 
      <LatestArticles />
    
    </div>
  );
}

export default App;
