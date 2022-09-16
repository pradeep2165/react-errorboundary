import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Hero heroName={"Batman"} />
      <Hero heroName={"superman"} />
      <Hero heroName={"Joker"} />
    </div>
  );
}

export default App;
