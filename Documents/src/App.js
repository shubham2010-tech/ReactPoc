import React ,{useState}from "react";
import { Route, Switch, } from "react-router-dom";
import "./App.scss";
import DocumentPage from "./components/Pages/DocumentPage";

const App = () => {
  const [route, setRoute] = useState("null");
  const navigationClicked = (url) => {
    if (url == "/") {
      localStorage.setItem("url", url);
      setRoute(url);
    }
  }
  return (
    <>
     <div className="App">
      <DocumentPage></DocumentPage>
    </div>
    </>
   
  );
};

export default App;
