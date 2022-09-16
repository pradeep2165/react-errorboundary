import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName={"Batman"} />
        <Hero heroName={"superman"} />
        <Hero heroName={"Joker"} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
