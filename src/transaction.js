// in posts.js
//import React from "react";

import { List, NumberInput, ReferenceInput, Datagrid, Edit, Create, SimpleForm, DateField, TextField, NumberField, EditButton, TextInput, DateInput, ReferenceField, AutocompleteInput, Show } from 'react-admin';
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
            <ReferenceField label="Sub Category" source="subcategory_id" reference="subcategorys" link="show">
                <TextField source="name" />
            </ReferenceField>
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
            <TextField source="account" />
            <DateField source="date" />
            <TextField source="title" />
            <TextField source="ttype" />
            <ReferenceInput source="subcategory_id" reference="subcategorys" allowEmpty 
                            perPage="100" sort= {{ field: 'name', order: 'ASC'}}
                            filterToQuery={searchText => (searchText ? { 'name.icontains': searchText } : {})}>
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
            <NumberField source="value" />
        </SimpleForm>
    </Edit>
);
