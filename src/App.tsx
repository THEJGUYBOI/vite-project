import reactLogo from "./assets/Cross.svg";
import viteLogo from "/CODED SECRETS (3).svg";
import "./App.css";
import { useWeb3React } from "@web3-react/core";
import Card from "./components/Card";

function App() {
  const { connector, hooks } = useWeb3React();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Coded Secrets DAO 
      </h1>
      <div className="App">
        <p style={{ fontSize: "80px", margin: "-50px"}}> + </p>
      <h1>Christian DAO</h1>
      <div className="card">
        <Card connector={connector} hooks={hooks} name='phantom' />
      </div>
    </div>
    </>
  );
}

export default App;
