/**
 * Created by diop on 08/05/2017.
 */
import React from 'react';
import TabComponent from './TabComponent';
import { Grid, Icon, Segment, Button, Form, Radio, Container } from 'semantic-ui-react';

const Account = (props) => {
    return (
        <Grid columns="equal" centered verticalAlign={'top'}>
            <Grid.Row></Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Column width={14}>
                <Grid.Row></Grid.Row>
                <TabComponent/>
                <div className="BlankLink">
                    {/* Each smaller components */}
                    {props.children}
                </div>
            </Grid.Column>
        </Grid>

    );
};

export default Account;