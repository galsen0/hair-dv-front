/**
 * Created by diop on 08/05/2017.
 */
import React from 'react';
import { Grid, Icon, Segment, Button, Form, Radio } from 'semantic-ui-react';
import BarberSmallCard from './BarberSmallCard';
import AlertNewDate from './AlertNewDate';

class BookingConfirmed extends React.Component {
    render(){
        return (
            <div className="textCentered textConfirmation">
                <h3><Icon color='green' name='checkmark' size="large"/>La réservation est confirmée</h3>
                Nous venons de vous envoyer un email de confirmation de rendez-vous.<br/>
                Vous recevrez également un SMS 2 jours avant le rendez-vous.<br/>
                <a href="">Retourner sur la fiche du salon</a>
                <br/>
                <Grid columns="equal" centered verticalAlign={'top'}>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <BarberSmallCard/>
                        </Grid.Column>
                        <Grid.Column width={8} textAlign={"left"}>
                            <AlertNewDate/>
                            <Segment size="huge" clearing>
                                <Icon name='add to calendar' size="large" color="red"/>
                                <a><strong>Ajouter à mon agenda</strong></a>
                                <br/><br/>
                                <Icon name='user circle outline' size="large" color="teal"/>
                                <a><strong>Consulter mon compte patient</strong></a>
                                <br/><br/>

                            </Segment>
                        </Grid.Column>

                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default BookingConfirmed;