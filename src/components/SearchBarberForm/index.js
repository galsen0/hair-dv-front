/**
 * Created by diop on 06/05/2017.
 */
import React from 'react'
import { Form} from 'semantic-ui-react'

const SearchFormContainer = (props) =>{
    const button = (props.hasIcon)? <Form.Button size={props.size} icon="search"/> : <Form.Button content='RECHERCHER' size={props.size} /> ;
    return (
        <Form size={props.size} >
            <Form.Group widths='equal'>
                <Form.Input placeholder='Type de prestation' name='type_prestation'/>
                <Form.Input placeholder='Location' name='location'/>
                {button}
            </Form.Group>
        </Form>
    );
};

export default SearchFormContainer;
