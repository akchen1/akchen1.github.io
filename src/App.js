import "./App.css";
import {Intro} from "./components/Intro";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <Intro></Intro>
        <Skills></Skills>
        <Projects></Projects>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
