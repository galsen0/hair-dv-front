/**
 * Created by diop on 09/05/2017.
 */
import React from 'react';
import { Icon, Segment, Form, Radio } from 'semantic-ui-react';

const AlertNewDate = props => {
    return(
        <Segment size="huge" clearing>
            <Icon name='alarm' size="large"/>
            <strong>Vous souhaitez faire une réservation plus tôt ?</strong>
            <br/><br/>
            Activez une alerte et nous vous préviendrons si une disponibilité plus proche se libère.
            <br/><br/>
            <Form>
                <Form.Field>
                    <Radio toggle label="ACTIVER L'ALERTE"/>
                </Form.Field>
            </Form>
        </Segment>
    )
};

export default AlertNewDate;