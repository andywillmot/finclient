import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
  domain="finlogin.eu.auth0.com"
  clientId="sBWDWfWur4Dtq373G4k3mnw2BRs0RJo3"
  redirectUri={window.location.origin}
  audience="http://localhost:8000"
  scope="read:transactions"
  >
    <App />
  </Auth0Provider>, document.getElementById('root')
);

registerServiceWorker();



