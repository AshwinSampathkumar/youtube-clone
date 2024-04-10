import React from "react";
import { Providers } from "./store/provider";
import Router from "./router";
import Head from "./layout/Head";

function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}

export default App;
