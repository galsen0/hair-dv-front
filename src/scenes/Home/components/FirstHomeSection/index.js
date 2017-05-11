/**
 * Created by diop on 05/05/2017.
 */
import React from 'react';
import { Container} from 'semantic-ui-react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import SearchFormContainer from '../../../../components/SearchBarberForm/index';

const FirstHomeSection = () => {
    return(
    <Container fluid styleName="FirstHomeSection">
        <div className="intro">
            <div className="content">
                <SearchFormContainer size="massive" hasIcon={false}/>
            </div>
        </div>
    </Container>

    );
};

export default CSSModules(FirstHomeSection, styles) ;