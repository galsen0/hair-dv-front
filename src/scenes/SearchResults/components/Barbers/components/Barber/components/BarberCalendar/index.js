/**
 * Created by diop on 06/05/2017.
 */
import React from 'react';
import Calendar from './components/Calendar/index';
import CalendarPagination from './components/CalendarPagination/index';

const BarberCalendar = () => {
    return (
        <div>
            <CalendarPagination/>
            <Calendar/>
        </div>

    )
};

export default BarberCalendar;

