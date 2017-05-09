/**
 * Created by diop on 05/05/2017.
 */
import React from 'react';
import FirstHomeElement from './FirstHomeElement';
import SecondHomeElement from './SecondHomeElement';
import FooterComponent from './FooterComponent';
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