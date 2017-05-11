/**
 * Created by diop on 06/05/2017.
 */
import React from 'react';
import SearchFormContainer from '../../components/SearchBarberForm/index';
import BarbersContainer from './components/Barbers/index';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class SearchResultsContainer extends React.Component {
    render(){
        return (
            <div styleName="SearchResults">
                <div className="searchBar">
                    <SearchFormContainer size="big" hasIcon={true}/>
                </div>
                <BarbersContainer/>
            </div>

        );
    }
}

export default CSSModules(SearchResultsContainer, styles);