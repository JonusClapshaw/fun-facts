import "./App.css";
import FunFactCard from "./FunFactCard";

function App() {
  return (
    <>
      <h1> Fun Facts with jonus and kevdog </h1>
      <div id="fun-facts-container">
        <div>
          <h3>KevDog Facts</h3>
          <FunFactCard fact="I have visited more than 3 countries." />
          <FunFactCard fact="I can solve a Rubik's cube." />
          <FunFactCard fact="I started programming in college" />
        </div>

        <div>
          <h3>Jonus Facts</h3>
          <FunFactCard fact="I started programming in high school." />
          <FunFactCard fact="My first computer was a hand-me-down from 2004." />
          <FunFactCard fact="I have a trained gaurd dog from slavaqia" />
        </div>
      </div>
    </>
  );
}

export default App;
