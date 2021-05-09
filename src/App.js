import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading"
import Main from "./Main"
import Test from "./Test"

function App() {
  return (
    <Main />
  );
}

export default withAuthenticationRequired(App, {
  onRedirecting: () => <Loading />,
});





