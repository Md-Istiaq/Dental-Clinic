import React, { useState } from 'react';
import Footer from '../Home/Footer/Footer';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableApoinments from './AvailableApoinments';

const Appointment = () => {
    const [date,setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableApoinments date={date}></AvailableApoinments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;