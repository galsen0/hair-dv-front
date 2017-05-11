/**
 * Created by diop on 05/05/2017.
 */
import React from 'react';
import { Image, Grid, Button } from 'semantic-ui-react';
import barberTool from './img/personal-care-barber-shop.png';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

const SecondHomeSection = () => {
    return(
        <div styleName="SecondHomeSection">
            <section className="customContent">
                <Grid columns={2} verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column>
                            <h2><strong>Fini le temps d'attente avec HAIRDV</strong></h2>
                            <h3><strong>Vous êtes coiffeur?</strong></h3>
                            <ul>
                                <li><h4>Attirez et engagez de nouveaux clients</h4></li>
                                <li><h4>Construisez et renforcez votre réputation en ligne</h4></li>
                                <li><h4>Offrez une expérience de première qualité</h4></li>
                            </ul>
                            <br/>
                            <Button primary size={"huge"}>ENREGISTREZ VOTRE SALON</Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={barberTool}/>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </section>
        </div>


    );
};

export default CSSModules(SecondHomeSection, styles);