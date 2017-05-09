/**
 * Created by diop on 06/05/2017.
 */
import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const LoginFormComponent = () => (
    <div>
        <h4>DEJA CLIENT ? SE CONNECTER</h4>
        <Form>
            <Form.Field>
                <input placeholder='Adresse email' />
            </Form.Field>
            <Form.Field>
                <input placeholder='Mot de passe' />
            </Form.Field>
            <Button type='submit' size={"huge"}>SE CONNECTER</Button>
        </Form>
    </div>

);

export default LoginFormComponent;