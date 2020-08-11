import React from "react";
import Header from "./components/js/headers/index";
import Content from "./components/js/contents/Content"
import Footer from "./components/js/Footer";
import Recommend from "./components/js/Recommend";
function App() {
  return (
    <div className="App">
      <Header />
      <Content/>
      <Recommend/>
      <Footer/>
    </div>
  );
}

export default App;
