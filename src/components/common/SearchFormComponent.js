/**
 * Created by diop on 06/05/2017.
 */
import React, { Component } from 'react'
import { Form} from 'semantic-ui-react'

const SearchFormComponent = (props) =>{
    return (
        <Form size={props.size} >
            <Form.Group widths='equal'>
                <Form.Input placeholder='Type de prestation' name='type_prestation'/>
                <Form.Input placeholder='Location' name='location'/>
                <Form.Button content='RECHERCHER' size={props.size} />
            </Form.Group>
        </Form>
    );
};

export default SearchFormComponent;
