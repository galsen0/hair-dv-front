/**
 * Created by diop on 08/05/2017.
 */
import React from 'react';
import { Grid } from 'semantic-ui-react';
import BookingConfirmationForm from './components/BookingConfirmationForm/index';

class BookingReview extends React.Component {
    render(){
        return (
            <div className="textCentered">
                <Grid columns="equal" centered verticalAlign={'middle'}>
                    <Grid.Row>
                        <Grid.Column width={14} textAlign={"left"}>
                            <BookingConfirmationForm/>
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