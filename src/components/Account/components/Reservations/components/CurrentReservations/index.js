/**
 * Created by diop on 08/05/2017.
 */
import React from 'react';
import { Item, Segment, Icon, Header } from 'semantic-ui-react';
import CurrentReservation from './components/CurrentReservation/index';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

const CurrentReservations = () => {
    return(
        <div styleName="CurrentReservations">
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
        </div>
    );
};

export default CSSModules(CurrentReservations, styles);