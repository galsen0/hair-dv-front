/**
 * Created by diop on 08/05/2017.
 */
import React from 'react';
import { Item, Label, Button, Grid, Icon, Radio } from 'semantic-ui-react';
import AlertNewDate from '../booking/AlertNewDate';

const CurrentReservation = props => {
    return(
        <Item>
            <Item.Image src='../../../img/front-image-one.jpeg' size="medium" />
            <Item.Content>
                <Item.Header as='a'>Name</Item.Header>
                <span className="rightFloat"><strong>Me prévenir dès qu'une date de réservation plus proche se libère</strong> &nbsp;<Radio toggle /></span>
                <Item.Meta>
                    <span>Adress CP Ville</span><br/>
                    <span>0785360476</span>
                </Item.Meta>
                <Item.Description>
                    <Grid columns={2} textAlign={"center"}>
                        <Grid.Column>
                            <h4>Client: Ndeye Fatou Diop</h4>
                            <h4><a>Ajouter à mon agenda</a></h4>
                        </Grid.Column>
                        <Grid.Column>
                            <h4>vendredi 19 mai 2017 à 17h40</h4>
                            <Label color="teal" size="big">Tarif : 15 €</Label>
                        </Grid.Column>
                        <Grid.Row></Grid.Row>
                    </Grid>
                </Item.Description>
                <Item.Extra>
                    <Item.Extra>
                        <Button floated='left' color='red'>
                            ANNULER LA RESERVATION
                            <Icon name='right chevron' />
                        </Button>
                        <Button floated='left' color="blue">
                            DEPLACER LA RESERVATION
                            <Icon name='right chevron' />
                        </Button>
                    </Item.Extra>
                </Item.Extra>
            </Item.Content>
        </Item>
    );
};

export default CurrentReservation;