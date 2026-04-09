import "./App.css";
import FunFactCard from "./FunFactCard";

function App() {
  return (
    <div>
      <div>
        <FunFactCard fact="I have visited more than 3 countries." />
        <FunFactCard fact="I can solve a Rubik's cube." />
        <FunFactCard fact="I started programming in college" />
      </div>

      <div>
        <FunFactCard fact="I started programming in high school." />
        <FunFactCard fact="My first computer was a hand-me-down from 2004." />
        <FunFactCard fact="I have a trained gaurd dog from slavaqia" />
      </div>
    </div>
  );
}

export default App;
