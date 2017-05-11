/**
 * Created by diop on 06/05/2017.
 */
import React from 'react';
import { Grid } from 'semantic-ui-react';
import ReservationCard from './components/ReservationCard/index';
import StepsReservation from './components/StepsReservation';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class BookingContainer extends React.Component {
    render(){
        return (
            <div styleName="BookingContainer">
                <div className="textCentered">
                    <StepsReservation/>
                    <br/><br/>
                    <Grid columns="equal" verticalAlign={'top'}>
                        <Grid.Row>
                            <Grid.Column width={8} textAlign={"center"}>
                                { this.props.children }
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <ReservationCard/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>

        );
    }
}

export default CSSModules(BookingContainer, styles);