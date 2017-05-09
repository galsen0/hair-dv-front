/**
 * Created by diop on 08/05/2017.
 */
import React from 'react';
import { Button, Form, Radio, Segment, TextArea } from 'semantic-ui-react'

class BookingConfirmationForm extends React.Component{

    constructor(){
        super();
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, {value}){
        this.setState({ value });
    }

    render(){
        return(
            <div className="BlankLink">
                <Form>
                    <h4>Pour qui souhaitez-vous faire la réservation ?</h4>
                    <Segment>
                        <Form.Field>
                            <Radio
                                label='Pour vous'
                                name='radioGroup'
                                value='this'
                                checked={this.state.value === 'this'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label='Pour une autre personne'
                                name='radioGroup'
                                value='that'
                                checked={this.state.value === 'that'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                    </Segment>
                    <h4>Récapitulatif de la réservation</h4>
                    <Segment>
                        Coupe<br/>
                        Couût: 15€<br/>
                        Mardi 13 Mai, 14h00:14h30<br/>
                        Je suis un nouveau client<br/>
                        <a href="#">MODIFIER LA RESERVATION</a>
                    </Segment>
                    <h4>Numéro de télèphone de contact</h4>
                    <Form.Field>
                        <input placeholder='Numéro de télèphone (optionnel)' />
                    </Form.Field>
                    <h4>Message pour le coiffeur/la coiffeuse</h4>
                    <Form.Field>
                        <TextArea placeholder='Message' />
                    </Form.Field>
                    <Button type='submit' size={"huge"}>FINALISER LA RESERVATION</Button>
                </Form>
            </div>
        );
    }
}

export default BookingConfirmationForm;