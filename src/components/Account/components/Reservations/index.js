/**
 * Created by diop on 08/05/2017.
 */
import React from 'react';
import PastReservations from './components/PastReservations/index';
import CurrentReservations from './components/CurrentReservations/index';
import { Segment } from 'semantic-ui-react';

class AppointmentsContainer extends React.Component {
    render(){
        return (
            <Segment.Group>
                <CurrentReservations/>
                <PastReservations/>
            </Segment.Group>
        );
    }
}

export default AppointmentsContainer;