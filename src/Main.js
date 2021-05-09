import React from "react";
import { Admin, Resource } from "react-admin";
import jsonapiClient from "ra-jsonapi-client";
import { useAuth0 } from "@auth0/auth0-react";
import { TransactionList, TransactionEdit, TransactionIcon } from "./transaction"
import { SubcategoryList } from "./subcategory"
import Loading from "./Loading"

export default function App() {
  const { getAccessTokenSilently } = useAuth0();
  const { apiOrigin , audience } = { apiOrigin: "http://localhost:8000", audience: "http://localhost:3000" }

   
  const getToken = async () => {
    const token = await getAccessTokenSilently({
      audience: `${apiOrigin}`,
      scope: "read:transactions",
    });
  
    localStorage.setItem('token', token);
  }
  getToken();

  const options = {
    logging: true,
    rootRef: 'root_collection/some_document'
  }

  const settings = { arrayFormat: 'comma' };

  const dataProvider = jsonapiClient(apiOrigin, settings);

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="transactions" list={TransactionList} edit={TransactionEdit} />
      <Resource name="subcategorys" list={SubcategoryList} />
    </Admin>
  );
}

