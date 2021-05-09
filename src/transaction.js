// in posts.js
//import React from "react";

import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, NumberField, EditButton, TextInput, DateInput, ReferenceField } from 'react-admin';
import ListIcon from '@material-ui/icons/List';
export const TransactionIcon = ListIcon;



export const TransactionList = (props) => (
    <List {...props} sort={{ field: 'date', order: 'DESC'}}>
        <Datagrid>
            <TextField source="account" />
            <DateField source="date" />
            <TextField source="title" />
            <TextField source="ttype" />
            <NumberField source="value" options={{ style: 'currency', currency: 'GBP' }}/>
            <ReferenceField label="Sub Category" source="subcategory_id" reference="subcategories" link="show">
                <TextField source="name" />
            </ReferenceField> />
            <TextField source="category" />
            <EditButton basePath="/transactions" />
        </Datagrid>
    </List>
);

const TransactionTitle = ({ record }) => {
    return <span>Trans: {record ? `"${record.title} - ${record.value}"` : ''}</span>;
};

export const TransactionEdit = (props) => (
    <Edit title={<TransactionTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="account" />
            <DateInput disabled source="date" />
            <TextInput disabled source="title" />
            <TextInput disabled source="ttype" />
            <TextInput disabled source="value" options={{ style: 'currency', currency: 'GBP' }}/>
            <TextInput source="subcategory" />
            <TextInput source="category" />
        </SimpleForm>
    </Edit>
);
