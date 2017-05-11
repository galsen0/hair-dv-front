/**
 * Created by diop on 08/05/2017.
 */
import React from 'react';
import { Item, Header, Icon, Segment } from 'semantic-ui-react';
import PastReservation from './components/PastReservation';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class PastReservations extends React.Component {
    render(){
        return(
            <div styleName="PastReservations">
                <Segment className="greyText">
                    <Header as='h2'>
                        <Icon name='checked calendar' size="huge" color="grey"/>Mes réservations passées
                    </Header>
                </Segment>
                <Segment>
                    <Item.Group>
                        <PastReservation/>
                        <PastReservation/>
                        <PastReservation/>
                    </Item.Group>
                </Segment>
            </div>

        );
    }

}

export default CSSModules(PastReservations, styles);