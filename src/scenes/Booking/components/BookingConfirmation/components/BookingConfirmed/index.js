/**
 * Created by diop on 08/05/2017.
 */
import React from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';
import AlertNewDate from '../../../AlertNewDate/index';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class BookingConfirmed extends React.Component {
    render(){
        return (
            <div styleName="BookingConfirmed">
                <Grid columns="equal" centered verticalAlign={'middle'} className="textCentered textConfirmation">
                    <Grid.Row>
                        <h3><Icon color='green' name='checkmark' size="large"/>La réservation est confirmée</h3>
                        <Segment>
                            Nous venons de vous envoyer un email de confirmation de rendez-vous.<br/>
                            Vous recevrez également un SMS 2 jours avant le rendez-vous.<br/>
                        </Segment>
                        <p>
                            <a href="">Retourner sur la fiche du salon</a>
                        </p>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={14} textAlign={"left"}>
                            <Segment size="huge" clearing>
                                <Icon name='add to calendar' size="large" color="red"/>
                                <a><strong>Ajouter à mon agenda</strong></a>
                                <br/><br/>
                                <Icon name='user circle outline' size="large" color="teal"/>
                                <a><strong>Consulter mon compte patient</strong></a>
                                <br/>
                            </Segment>
                            <AlertNewDate/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default CSSModules(BookingConfirmed, styles);