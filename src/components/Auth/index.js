/**
 * Created by diop on 07/05/2017.
 */
import React from 'react';
import LoginFormComponent from './LoginForm';
import SignUpFormComponent from './SignUpForm';
import { Divider, Grid } from 'semantic-ui-react';

class Auth extends React.Component{
    render(){
        return(
        <Grid columns="equal" centered>
            <Grid.Row></Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Row>
                <Grid.Column width={12} textAlign={"center"}>
                    <LoginFormComponent/>
                    <Divider horizontal>Ou</Divider>
                    <SignUpFormComponent/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row></Grid.Row>
        </Grid>
        );
    }
}

export default Auth;