/**
 * Created by diop on 06/05/2017.
 */
import { Button, Menu } from 'semantic-ui-react'
import React, { Component } from 'react';

export default class NavBarComponent extends Component {

    constructor(){
        super();
        this.state = { activeItem: 'home' };
        this.handleItemClick = this.handleItemClick.bind(this);
    }


    handleItemClick (e, { name }) {
        this.setState({ activeItem: name });
    }

    render() {
        const { activeItem } = this.state;

        return (
            <Menu size='massive'>
                <Menu.Item name='HAIRDV' active={activeItem === 'HAIRDV'} onClick={this.handleItemClick} />
                <Menu.Menu position='right'>
                    <Menu.Item name='AIDE' active={activeItem === 'AIDE'} onClick={this.handleItemClick} />
                    <Menu.Item name='CONNEXION' active={activeItem === 'CONNEXION'} onClick={this.handleItemClick} />
                    <Menu.Item>
                        <Button primary>DEVENEZ COIFFEUR(SE)</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}