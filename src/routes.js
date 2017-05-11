/**
 * Created by axa on 05/05/2017.
 */
import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './scenes/Home/index';
import SearchResults from './scenes/SearchResults/index';
import Booking from './scenes/Booking/index';
import BookingReview from './scenes/Booking/components/BookingConfirmation/components/BookingReview/index';
import BookingConfirmed from './scenes/Booking/components/BookingConfirmation/components/BookingConfirmed/index';
import Auth from './components/Auth/index';
import App from './App';
import UserProfile from './components/Account/components/UserProfile/index';
import AppointmentsList from './components/Account/components/Reservations/index'
import Account from './components/Account/index'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/search" component={SearchResults}/>
    <Route path="/booking" component={Booking}>
        <IndexRoute component={Booking}/>
        <Route path="startsignin" component={Auth}/>
        <Route path="review" component={BookingReview}/>
        <Route path="confirmed" component={BookingConfirmed}/>
    </Route>
    <Route path="signin" component={Auth}/>
    <Route path="/account" component={Account}>
        <IndexRoute component={UserProfile}/>
        <Route path="profil" component={UserProfile}/>
        <Route path="reservations" component={AppointmentsList}/>
    </Route>
  </Route>
);
