/**
 * Created by diop on 08/05/2017.
 */
import React from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

 class TabComponent extends React.Component {

     constructor(){
         super();
         this.state = {activeItem: 'MON PROFIL'};
         this.handleItemClick = this.handleItemClick.bind(this);
     }

    handleItemClick (e, { name }) {
        this.setState({ activeItem: name });
    }

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Menu attached='top' pointing>
                    <Menu.Menu>
                        <Menu.Item name='MES RESERVATIONS' active={activeItem === 'MES RESERVATIONS'} onClick={this.handleItemClick} />
                        <Menu.Item name='MON PROFIL' active={activeItem === 'MON PROFIL'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default TabComponent;