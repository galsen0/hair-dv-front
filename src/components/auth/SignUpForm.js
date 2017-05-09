/**
 * Created by diop on 07/05/2017.
 */
import React from 'react';
import { Button, Checkbox, Form, Divider } from 'semantic-ui-react'

const SignUpFormComponent = () => (
    <div>
        <h4>NOUVEAU CLIENT ? S'INSCRIRE</h4>
        <Form>
            <Form.Field>
                <input placeholder='Téléphone portable' />
            </Form.Field>
            <Form.Field>
                <input placeholder='Adresse email' />
            </Form.Field>
            <Form.Field>
                <input placeholder='Confirmez votre adresse email' />
            </Form.Field>
            <Form.Field>
                <input placeholder='Mot de passe' />
            </Form.Field>
            <Form.Field>
                <input placeholder='Confirmez votre mot de passe' />
            </Form.Field>
            <Divider/>
            <Form.Field>
                <Checkbox label="J'accepte les CGU et la Politique relative à la protection des données personnelles d'HAIRDV" />
            </Form.Field>
            <Button type='submit' size={"huge"}>S'INSCRIRE</Button>
        </Form>
    </div>

);

export default SignUpFormComponent;