/**
 * Created by diop on 09/05/2017.
 */
import React from 'react';
import { Button, Segment, Header } from 'semantic-ui-react'

const DeleteAccount = props => (
    <Segment color="red">
        <Header as='h3'>Suppression de votre compte HAIRDV</Header>
        <p>
            Si vous ne souhaitez plus utiliser HairDV, vous avez la possibilité de supprimer votre compte.<br/><br/>
            Cette action irréversible aura pour effet d'effacer vos données personnelles et de connexion de la base de données d'HairDV.
        </p>
        <Button color='red'>Supprimer mon compte</Button>
    </Segment>
);

export default DeleteAccount;