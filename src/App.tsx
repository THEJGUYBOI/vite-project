import reactLogo from "./assets/Cross.svg";

import "./App.css";
import { useWeb3React } from "@web3-react/core";
import Card from "./components/Card";

function App() {
  const { connector, hooks } = useWeb3React();

  return (
    <>
      <div>
        <a href=""target="_blank">
         
        </a>
        <a  target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Coded Secrets
      </h1>
      <div className="App">
        <p style={{ fontSize: "80px", margin: "25px"}}> </p>
      <h1>Faith Chain DAO</h1>
      <div className="card">
        <Card connector={connector} hooks={hooks} name='phantom' />
      </div>
    </div>
    </>
  );
}

export default App;
