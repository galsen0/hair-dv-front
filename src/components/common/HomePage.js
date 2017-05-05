/**
 * Created by axa on 05/05/2017.
 */
import React from 'react';
var imagesLoaded = require('imagesloaded');
window.$ = window.jQuery = require("jquery");

const frontImageOne =require('../../img/front-image-one.jpeg');

class Home extends React.Component {

  componentDidMount(){
      window.test =  $('.carousel-slider');
      $('.intro').imagesLoaded(function() {
          console.log("Images loaded");
      })
      //$('.carousel-slider').carousel({fullWidth: true});

  }

  render(){
      return (
          <div>
              <section className="intro">
                  <div className="content">
                      <div className="carousel carousel-slider">
                          <a className="carousel-item" href="#one!"><img src="http://lorempixel.com/800/400/food/1"/></a>
                          <a className="carousel-item" href="#two!"><img src="http://lorempixel.com/800/400/food/2"/></a>
                          <a className="carousel-item" href="#three!"><img src="http://lorempixel.com/800/400/food/3"/></a>
                          <a className="carousel-item" href="#four!"><img src="http://lorempixel.com/800/400/food/4"/></a>
                      </div>
                      {/*<h1>Avec HAIRDV, fini le temps d'attente</h1>
                      <form className="col s12">
                          <div className="row">
                              <div className="input-field col s4">
                                  <input id="type_coiffure" type="text" className="validate"/>
                                  <label htmlFor="type_coiffure">Type de coiffure</label>
                              </div>
                              <div className="input-field col s4">
                                  <input id="location" type="text" className="validate"/>
                                  <label htmlFor="location">Location</label>
                              </div>
                              <a className="waves-effect waves-light btn-large">RECHERCHER</a>
                          </div>

                      </form>*/}
                  </div>
              </section>

              <section>
                  <div className="content">
                      <h1>Resize your browser and see how they adapt.</h1>
                      <div className="carousel carousel-slider" ref="frontPage">
                          <a className="carousel-item" href="#one!"><img src={frontImageOne}/></a>
                          <a className="carousel-item" href="#two!"><img src={frontImageOne}/></a>
                          <a className="carousel-item" href="#three!"><img src={frontImageOne}/></a>
                      </div>
                  </div>
              </section>

              <section>
                  <div className="content">
                      <h1>It's amazing and fast.</h1>
                  </div>
              </section>

              <section>
                  <div className="content">
                      <h1>See the <a href="http://caniuse.com/#feat=viewport-units">browser support.</a></h1>
                  </div>
              </section>
          </div>
      );
  }
}

export default Home;