/**
 * Created by diop on 05/05/2017.
 */
import React from 'react';
import { Grid } from 'semantic-ui-react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

const FooterComponent = () => {
    return (
        <div styleName="FooterComponent">
            <div className="smallSection">
                <h4>Une question ? Besoin d'aide ? Consultez notre aide en ligne ou contactez-nous</h4>
            </div>
            <footer className="page-footer bottomSection">
                <Grid container columns={2}>
                    <Grid.Column>
                        <h3 className="white-text">A propos d'HAIRDV</h3>
                        <ul>
                            <li><a href="#!"><h4>Vous êtes coiffeur ?</h4></a></li>
                            <li><a href="#!"><h4>Le concept</h4></a></li>
                            <li><a href="#!"><h4>L'équipe</h4></a></li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column>
                        <h3 className="white-text">Nous suivre</h3>
                        <ul>
                            <li><a href="#!"><h4>Facebook</h4></a></li>
                        </ul>
                    </Grid.Column>
                </Grid>
            </footer>
        </div>
    );
};

export default CSSModules(FooterComponent, styles);