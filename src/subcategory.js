import { List, Datagrid, Show, Edit, Create, SimpleForm, DateField, TextField, NumberField, EditButton, TextInput, DateInput, ReferenceField, SimpleShowLayout, BooleanField } from 'react-admin';
import ListIcon from '@material-ui/icons/List';
export const SubcategoryIcon = ListIcon;



export const SubcategoryList = (props) => (
    <List {...props} sort={{ field: 'date', order: 'DESC'}}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="description" />
            <ReferenceField label="Category" source="category_id" reference="categorys" link="show">
                <TextField source="name" />
            </ReferenceField> 
            <BooleanField source="category" />
            <EditButton basePath="/subcategorys" />
        </Datagrid>
    </List>
);


export const SubcategoryShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="description" />
            <ReferenceField label="Category" source="category_id" reference="categorys" link="show">
                <TextField source="name" />
            </ReferenceField> 
            <BooleanField source="category" />
        </SimpleShowLayout>
    </Show>
);
