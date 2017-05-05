/**
 * Created by axa on 05/05/2017.
 */
import React  from 'react';
import {Link} from 'react-router';

const App = (props) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">HAIRDV</a>
          <ul className="right hide-on-med-and-down">
              <li><Link to="/">AIDE</Link></li>
              <li><Link to="/">CONNEXION</Link></li>
              <li><Link to="/">DEVENEZ COIFFEUR</Link></li>
          </ul>
        </div>
      </nav>
      <div>
          {/* Each smaller components */}
          {props.children}
      </div>
    </div>
  );
};

export default App;