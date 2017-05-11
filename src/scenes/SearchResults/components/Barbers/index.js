/**
 * Created by diop on 06/05/2017.
 */
import React from 'react';
import Barber from './components/Barber/index';
import { Grid, Item } from 'semantic-ui-react';
import BottomPagination from '../Pagination/index';

class BarbersContainer extends React.Component {
    render(){
        return(
            <Grid columns="equal" centered>
                <Grid.Row>
                    <Grid.Column width={15}>
                        <div>
                            <div>
                                <br/>
                                Filters here (avec ou sans shampoing ou autre)
                                <br/><br/>
                            </div>
                            <Item.Group divided>
                                <Barber/>
                                <Barber/>
                                <Barber/>
                                <Barber/>
                            </Item.Group>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <BottomPagination/>
                </Grid.Row>
                <Grid.Row></Grid.Row>
            </Grid>

        );
    }
}

export default BarbersContainer;