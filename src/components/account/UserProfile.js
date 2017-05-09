/**
 * Created by diop on 08/05/2017.
 */
import React from 'react';
import { Grid, Icon, Segment, Button, Form, Radio } from 'semantic-ui-react';
import EditProfileForm from './EditProfileForm';
import DeleteAccount from './DeleteAccount';

class UserProfile extends React.Component {
    render(){
        return (
            <Segment.Group>
                <Grid columns="equal" centered>
                    <Grid.Row></Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign={"center"}>
                            <EditProfileForm/>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <DeleteAccount/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>

                    </Grid.Row>
                </Grid>
            </Segment.Group>
        );
    }
}

export default UserProfile;