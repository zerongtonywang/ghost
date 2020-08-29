import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "routes";
import { Login } from "views/Login";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path={Routes.Login}>
            <Login />
          </Route>
          <Route path="/">
            <Redirect to={Routes.Login} />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
