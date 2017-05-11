/**
 * Created by diop on 06/05/2017.
 */
import React from 'react';
import { Item, Rating, Grid, Label} from 'semantic-ui-react';
import DateTableComponent from './components/BarberCalendar/index'

const Barber = props => {
    return(
        <Item>
            <Item.Image size='large' src='./img/front-image-one.jpeg' />

            <Item.Content>
                <Item.Description>
                    <Grid columns="equal">
                        <Grid.Column width={5}>
                            <h5><strong>Name</strong></h5>
                            <Rating icon='star' defaultRating={0} maxRating={5} clearable/>
                            <br/>
                            20 commentaires
                            <br/>
                            <p>
                                Adresse<br/>
                                CP Ville
                            </p>
                            <br/>
                            <Label as='a' color='red' tag>15€</Label>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <DateTableComponent/>
                        </Grid.Column>
                    </Grid>

                </Item.Description>
            </Item.Content>

        </Item>
    );
};

export default Barber;