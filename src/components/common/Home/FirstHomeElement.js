/**
 * Created by diop on 05/05/2017.
 */
import React from 'react';
import { Container} from 'semantic-ui-react'
import SearchFormComponent from '../SearchFormComponent';

const FirstHomeElement = props => {
    return(
    <Container fluid>
        <div className="intro">
            <div className="content">
                <SearchFormComponent size="massive"/>
            </div>
        </div>
    </Container>

    );
};

export default FirstHomeElement;