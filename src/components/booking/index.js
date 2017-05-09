/**
 * Created by diop on 06/05/2017.
 */
import React from 'react';
import { Grid } from 'semantic-ui-react';
import BarberSmallCard from './BarberSmallCard';
import Auth from '../auth/index';

class Book extends React.Component {
    render(){
        return (
            <div className="textCentered">
                <h2>Prise de rendez-vous</h2>
                <Grid columns="equal" verticalAlign={'middle'}>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign={"center"}>
                            <Auth/>
                        </Grid.Column>
                        <Grid.Column width={5}>
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

export default Book;