/**
 * Created by diop on 07/05/2017.
 */
import React from 'react';
import { Card, Image, Icon , Grid, Rating, Label } from 'semantic-ui-react';

class BarberSmallCard extends React.Component{
    render(){
        return(
            <Grid columns="equal" centered>
                <Grid.Row>
                    <Grid.Column textAlign={"center"}>
                        <Card fluid>
                            <Image
                                src='../../../img/front-image-one.jpeg'
                                label={{ as: 'a', color: 'red', content: '15', icon: 'euro', ribbon: true }}
                            />

                            <Card.Content>
                                <Card.Header>Name</Card.Header>
                                <Card.Meta>
                                    <div className="ratingCentered">
                                        <p>
                                            Adresse<br/>
                                            CP Ville
                                        </p>
                                    </div>
                                </Card.Meta>
                                <Card.Description>
                                    <p text-align="left">
                                       <strong>Type de prestation</strong><br/>
                                       Coupe<br/><br/>
                                        <strong>Horaires du rendez-vous</strong><br/>
                                       Mardi 13 Mai, 14h00<br/><br/>
                                        <strong>Durée de la prestation</strong><br/>
                                       30min <br/><br/>
                                    </p>

                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                &nbsp;&nbsp;<Rating icon='star' defaultRating={0} maxRating={5} clearable />&nbsp;20 commentaires
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row></Grid.Row>
            </Grid>
        );
    }
}

export default BarberSmallCard;