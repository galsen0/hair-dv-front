/**
 * Created by diop on 06/05/2017.
 */
import React from 'react';
import SearchFormComponent from '../common/SearchFormComponent';
import NavSearchFormComponent from './NavSearchFormComponent';
import SearchResults from './SearchResults';
import {Link} from 'react-router';

class Search extends React.Component {
    render(){
        return (
            <div>
                <div className="searchBar">
                    <NavSearchFormComponent size="big"/>
                </div>
                <SearchResults/>
            </div>

        );
    }
}

export default Search;