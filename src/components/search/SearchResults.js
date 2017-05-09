/**
 * Created by diop on 06/05/2017.
 */
import React from 'react';
import SingleResearchResult from './SingleResearchResult';
import { Grid, Item, Segment, Button } from 'semantic-ui-react';
import BottomPagination from './BottomPagination';
import BarbersLocationsMap from './BarbersLocationsMap';

class ResearchResults extends React.Component {
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
                                <SingleResearchResult/>
                                <SingleResearchResult/>
                                <SingleResearchResult/>
                                <SingleResearchResult/>
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

export default ResearchResults;