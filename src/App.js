/**
 * Created by axa on 05/05/2017.
 */
import React  from 'react';
import NavBarComponent from './components/NavBar/index';
import FooterComponent from './scenes/Home/components/FooterSection/index';

const App = (props) => {
  return (
    <div>
      <NavBarComponent/>
      <div>
          {/* Each smaller components */}
          {props.children}
      </div>
      <FooterComponent/>
    </div>
  );
};

export default App;