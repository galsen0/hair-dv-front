/**
 * Created by diop on 06/05/2017.
 */
import React from 'react';
import { Menu, Table, Button, Icon, Popup } from 'semantic-ui-react';

const DateTableComponent = () => {
    return (
        <div>
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
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>mar. 9 mai</Table.HeaderCell>
                        <Table.HeaderCell>mer. 10 mai</Table.HeaderCell>
                        <Table.HeaderCell>jeu. 11 mai</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Button size='mini'>
                                9:00
                            </Button>
                        </Table.Cell>
                        <Table.Cell>
                            <Button size='mini'>
                                10:00
                            </Button>
                        </Table.Cell>
                        <Table.Cell>
                            <Button size='mini'>
                                10:00
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Button size='mini'>
                                10:00
                            </Button>
                        </Table.Cell>
                        <Table.Cell>
                            <Button size='mini'>
                                10:00
                            </Button>
                        </Table.Cell>
                        <Table.Cell>
                            <Button size='mini'>
                                10:00
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Button size='mini'>
                                10:00
                            </Button>
                        </Table.Cell>
                        <Table.Cell>
                            <Button size='mini'>
                                10:00
                            </Button>
                        </Table.Cell>
                        <Table.Cell>
                            <Button size='mini'>
                                10:00
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>

                <Table.Footer>

                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Button icon color={"grey"}>VOIR PLUS D'HORAIRES</Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>

    )
};

export default DateTableComponent;

