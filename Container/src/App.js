import React, { Suspense, useState, useEffect } from "react";
import "./App.scss";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import HomePage from "./Components/HomePage"
const Vtrack = React.lazy(() => import("Vtrac/Vtrack"));
const Shipping=React.lazy(()=>import("Shipping/ShippingDataPage"))
const SharedData=React.lazy(()=>import("SharedData/SharedDataPage"))
const Documents=React.lazy(()=>import("Documents/DocumentPage"))





const App = () => {
  const [route, setRoute] = useState("null");
  const history = useHistory();
  const location = useLocation();

  const navigationClicked = (url) => {
    if (url == "/") {
      history.push("/");
      localStorage.setItem("url", url);
      setRoute(url);
    } else {
      setRoute(url);
      localStorage.setItem("url", url);
      history.push("/Vtrac");
    }
  };
  useEffect(() => {
    if (route == "null") {
      const url = localStorage.getItem("url");
      setRoute(url);
    }
  }, []);
  return (
    <>
      <Switch>
      <Route path="/" strict exact>
            <HomePage/>
        </Route>
        <Route path="/Vtrack" strict exact>
          <Suspense fallback={null}>
            <Vtrack/>
          </Suspense>
        </Route>
        <Route path="/Shipping" strict exact>
          <Suspense fallback={null}>
          <Shipping/>
          </Suspense>
        </Route>
        <Route path="/SharedData" strict exact>
          <Suspense fallback={null}>
          <SharedData/>
          </Suspense>
        </Route>
        <Route path="/Documents" strict exact>
          <Suspense fallback={null}>
          <Documents/>
          </Suspense>
        </Route>
      </Switch>
    </>
  );
};

export default App;
