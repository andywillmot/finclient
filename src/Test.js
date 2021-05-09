import React from "react";
import { Admin, Resource } from "react-admin";
import { useAuth0 } from "@auth0/auth0-react";
import jsonapiClient from "ra-jsonapi-client";
import { TransactionList } from "./transaction"
import { TransactionEdit } from "./transaction"

export default function Test() {

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
    const settings = {
        headers: {
          Authorization: 'Bearer ...',
        }
      }
    const dataProvider = jsonapiClient(apiOrigin, settings);
    
    return (
        <Admin
        dataProvider={dataProvider}
        >
            <Resource
                name="transactions"
//                list={TransactionList}
//                edit={TransactionEdit}
            />
            <p>Test succesfull: {localStorage.getItem('token')}</p>
        </Admin>
    );
}