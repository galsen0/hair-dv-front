/**
 * Created by axa on 05/05/2017.
 */
import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/Home/index';
import Search from './components/search/index';
import Booking from './components/booking/index';
import BookingReview from './components/booking/BookingReview';
import BookingConfirmed from './components/booking/BookingConfirmed';
import Auth from './components/auth/index';
import App from './components/App';
import UserProfile from './components/account/UserProfile';
import AppointmentsList from './components/account/ListAppointments'
import Account from './components/account/Account'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/search" component={Search}/>
    <Route path="booking/startsignin" component={Booking}/>
    <Route path="booking/reviewandbook" component={BookingReview}/>
    <Route path="booking/confirmedbooking" component={BookingConfirmed}/>
    <Route path="signin" component={Auth}/>
    <Route path="/account" component={Account}>
        <IndexRoute component={UserProfile}/>
        <Route path="profil" component={UserProfile}/>
        <Route path="appointments" component={AppointmentsList}/>
    </Route>
  </Route>
);
