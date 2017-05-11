/**
 * Created by diop on 11/05/2017.
 */
import React from 'react';
import { Table, Button} from 'semantic-ui-react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class Calendar extends React.Component {
    render(){
        return(
            <div styleName="Calendar">
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
        );
    }
}

export default CSSModules(Calendar, styles);