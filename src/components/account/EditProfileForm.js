/**
 * Created by diop on 09/05/2017.
 */
import React from 'react';
import { Button, Form, Divider, Input, Select, Segment } from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'M.', value: 'male' },
    { key: 'f', text: 'Mme', value: 'female' },
];

const EditProfileForm = () => (
    <Segment>
        <Form>
            <Form.Group widths='equal'>
                <Form.Field control={Select} options={options} placeholder='Genre' />
                <Form.Field control={Input} placeholder='Prénom' />
                <Form.Field control={Input} placeholder='Nom' />
            </Form.Group>
            <Form.Field>
                <input placeholder='Adresse email' />
            </Form.Field>
            <Form.Field className="rightFloat">
                <a>Changer le mot de passe</a>
            </Form.Field>
            <Form.Field>
                <input placeholder='Téléphone portable' />
            </Form.Field>
            <Form.Field>
                <input placeholder='Adresse' />
            </Form.Field>
            <Form.Field>
                <input placeholder="Complément d'adresse" />
            </Form.Field>
            <Form.Group widths='equal'>
                <Form.Field control={Input} placeholder='Code Postal' />
                <Form.Field control={Input} placeholder='Ville' />
            </Form.Group>
            <Form.Group widths='equal'>
                <label>Date de naissance</label>
                <Form.Field>
                    <Form.Field control={Select} options={options} placeholder='Jour' />
                </Form.Field>
                <Form.Field>
                    <Form.Field control={Select} options={options} placeholder='Mois' />
                </Form.Field>
                <Form.Field>
                    <Form.Field control={Select} options={options} placeholder='Année' />
                </Form.Field>
            </Form.Group>
            <Divider/>
            <Button type='submit' size={"huge"}>ENREGISTRER</Button>
        </Form>
    </Segment>

);

export default EditProfileForm ;