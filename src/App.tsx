import reactLogo from "./assets/Cross.svg";

import "./App.css";
import { useWeb3React } from "@web3-react/core";
import Card from "./components/Card";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {
  const { connector, hooks } = useWeb3React();
 // we are going to link are token link here
  return (
    <ClerkProvider publishableKey="pk_test_bmF0aXZlLW1hbGxhcmQtMTkuY2xlcmsuYWNjb3VudHMuZGV2JA"> 
    <>
 <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
      <div>
        <a href=""target="_blank">
        </a>
        <a  target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Coded Secrets</h1>


      <div className="App">
        <p style={{ fontSize: "80px", margin: "25px"}}> </p>


      <h1>Glory Transactions</h1>
      <div className="card">
        <Card connector={connector} hooks={hooks} name='phantom' />
      </div>
    </div>
    </>
    </ClerkProvider>
  );
}

export default App;