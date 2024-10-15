import logo from "./logo.svg";
import "./App.css";
import { DATA_ARRAY } from "./data.js";
import MyHeader from "./components/MyHeader.jsx";
import TabButton from "./components/Tabs/TabButton.jsx";
import {TabButton2} from "./components/Tabs/TabButton.jsx";
import {TabButton3} from "./components/Tabs/TabButton.jsx";
import {CounterBtn} from "./components/counter/CounterBtn.jsx";
  /**
 *
 * If you want to use basic prop syntax and there are not too much difference in attribute passed on props
 *
 *
 * @param {*} prop
 * @returns
 */
function Header(prop) {
  // prop.name = "ram";
  return (
    // parent element is needed ,if not a parent then use <> </>
    <>
      <li>{prop.name !== "Sanjog" ? "d" : "e"}</li>
      <li>{prop.email}</li>
      <li>{prop.phone}</li>
    </>
  );
}

//Pass data from api or a js or DB

function JSFile({ name, email, phone }) {
  return (
    <>
      <li>{name}</li>
      <li>{email}</li>
      <li>{phone}</li>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>From Basic syntax of props</h3>
        <ul>
          <Header name="Sanjog" email="san@yopmail.com" phone={7594261423} />
        </ul>
        <ul>
          <MyHeader
            name="Vickey"
            email="vickey@yopmail.com"
            phone={759 - 426 - 1423}
          />
        </ul>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h6>
          <h3>From Destructuring without spread</h3>
          {/* Basic way to use the Data File and using values if want to use only the needed data
          when to use: if 10 keys are present  and needed 3 only i.e. some of them only then use this syntax 
          */}
          <ul>
            <JSFile
              name={DATA_ARRAY[0].name}
              email={DATA_ARRAY[0].email}
              phone={DATA_ARRAY[0].phone}
            />
          </ul>

          <h3>From Destructuring with spread</h3>

          {/*
           * But upper approach is tedious to work around as we have to define the syntax properly so there is a better way
           * By USing SPRED OPERATOR
           */}
          <ul>
            <JSFile {...DATA_ARRAY[1]} /> {/**  easier Approach */}
          </ul>
        </h6>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main id="tabs" className="btn-tabs">
        <ul>
          <TabButton>First TabBtn</TabButton>
          <TabButton3 label="Second TabBtn" ></TabButton3>
          <TabButton2>Third TabBtn</TabButton2>
          <CounterBtn inc={5} dec={5}>5</CounterBtn>

        </ul>
      </main>
    </div>
  );
}

export default App;
