/**
 * Created by diop on 11/05/2017.
 */
import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

class CalendarPagination extends React.Component {
    render(){
        return (
            <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                    <Icon name='left chevron' />
                </Menu.Item>
                <Menu.Item as='a'>12 mai</Menu.Item>
                <Menu.Item as='a'>13 mai</Menu.Item>
                <Menu.Item as='a'>14 mai</Menu.Item>
                <Menu.Item as='a' icon>
                    <Icon name='right chevron' />
                </Menu.Item>
            </Menu>
        );
    }
}

export default CalendarPagination;