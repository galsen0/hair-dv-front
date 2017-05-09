/**
 * Created by diop on 08/05/2017.
 */
import React from 'react';
import { Grid } from 'semantic-ui-react';
import BarberSmallCard from './BarberSmallCard';
import BookingConfirmationForm from './BookingConfirmationForm';

class BookingReview extends React.Component {
    render(){
        return (
            <div className="textCentered">
                <h2>Confirmation de réservation</h2>
                <br/>
                <Grid columns="equal" centered verticalAlign={'middle'}>
                    <Grid.Row>
                        <Grid.Column width={8} textAlign={"left"}>
                            <BookingConfirmationForm/>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <BarberSmallCard/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default BookingReview;