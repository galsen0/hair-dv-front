/**
 * Created by diop on 06/05/2017.
 */
import React, { Component } from 'react'
import { Form, Icon } from 'semantic-ui-react'

const NavSearchFormComponent = (props) =>{
    return (
        <Form size={props.size} >
            <Form.Group widths='equal'>
                <Form.Input placeholder='Type de prestation' name='type_prestation'/>
                <Form.Input placeholder='Location' name='location'/>
                <Form.Button size={props.size} icon="search"/>
            </Form.Group>
        </Form>
    );
};

export default NavSearchFormComponent;