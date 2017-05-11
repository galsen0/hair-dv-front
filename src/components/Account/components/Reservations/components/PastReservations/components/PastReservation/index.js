/**
 * Created by diop on 11/05/2017.
 */
import React from 'react';
import { Item, Label, Button, Grid, Icon } from 'semantic-ui-react';

const PastReservation = () => {
    return(
        <Item>
            <Item.Image src='../../../img/front-image-one.jpeg' size="medium" />
            <Item.Content>
                <Item.Header as='a'>Name</Item.Header>
                <Item.Meta>
                    <span>Adress CP Ville</span><br/>
                    <span>0785360476</span>
                </Item.Meta>
                <Item.Description>
                    <Grid columns={2} textAlign={"center"}>
                        <Grid.Column>
                            <h4>Client: Ndeye Fatou Diop</h4>
                        </Grid.Column>
                        <Grid.Column>
                            <h4>vendredi 19 mai 2017 à 17h40</h4>
                            <Label color="grey" size="big">Tarif : 15 €</Label>
                        </Grid.Column>
                        <Grid.Row></Grid.Row>
                    </Grid>
                </Item.Description>
                <Item.Extra>
                    <Item.Extra>
                        <Button floated='left' color="blue">
                            REFAIRE UNE RESERVATION
                            <Icon name='right chevron' />
                        </Button>
                    </Item.Extra>
                </Item.Extra>
            </Item.Content>
        </Item>
    );
};

export default PastReservation;