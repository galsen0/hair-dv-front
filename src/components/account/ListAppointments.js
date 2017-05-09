/**
 * Created by diop on 08/05/2017.
 */
import React from 'react';
import PastReservation from './PastReservation';
import CurrentReservation from './CurrentReservation';
import { Icon, Segment, Item, Header, Container, Label, Button, Grid } from 'semantic-ui-react';

class AppointmentsList extends React.Component {
    render(){
        return (
            <Segment.Group>
                <Segment className="yellowText">
                    <Header as='h2'>
                        <Icon name='checked calendar' size="huge" color="yellow"/>Mes réservations à venir
                    </Header>
                </Segment>
                <Segment>
                    <Item.Group divided>
                        <CurrentReservation/>
                    </Item.Group>
                </Segment>
                <Segment className="greyText">
                    <Header as='h2'>
                        <Icon name='checked calendar' size="huge" color="grey"/>Mes réservations passées
                    </Header>
                </Segment>
                <Segment>
                    <Item.Group divided>
                        <PastReservation/>
                        <PastReservation/>
                        <PastReservation/>
                    </Item.Group>
                </Segment>
            </Segment.Group>
        );
    }
}

export default AppointmentsList;