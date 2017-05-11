/**
 * Created by diop on 05/05/2017.
 */
import React from 'react';
import FirstHomeElement from './components/FirstHomeSection/index';
import SecondHomeElement from './components/SecondHomeSection/index';
import FooterComponent from './components/FooterSection/index';
window.$ = window.jQuery = require("jquery");

class Home extends React.Component {
    render(){
        return (
            <div>
                <FirstHomeElement/>
                <SecondHomeElement/>
            </div>
        );
    }
}

export default Home;