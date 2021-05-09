import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, NumberField, EditButton, TextInput, DateInput, ReferenceField, SimpleShowLayout } from 'react-admin';
import ListIcon from '@material-ui/icons/List';
export const SubcategoryIcon = ListIcon;



export const SubcategoryList = (props) => (
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
            <EditButton basePath="/subcategorys" />
        </Datagrid>
    </List>
);
