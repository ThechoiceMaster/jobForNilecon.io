import React from "react";
import Header from "./components/js/headers/index";
import Content from "./components/js/contents/Content"
import Footer from "./components/js/Footer";
import Recommend from "./components/js/Recommend";
import LastVdo from "./components/js/LastVdo";
import LastMusic from "./components/js/Lastmusic";
import LastNew from "./components/js/Bunterngnew";
import More from "./components/js/More";
import BraNer from "./components/js/headers/Braner";
import Manga from "./components/js/Manga";
function App() {
  return (
    <div className="App">
      <Header />
      <BraNer />
      <Content />
      <Manga />
      <LastVdo />
      <More />
      <Recommend />
      <LastMusic />
      <LastNew />
      <Footer />
    </div>
  );
}

export default App;
