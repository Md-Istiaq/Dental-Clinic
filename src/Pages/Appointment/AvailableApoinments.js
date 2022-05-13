import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './AppointmentBanner/Service';
import BookingModal from './BookingModal';

const AvailableApoinments = ({date,setDate}) => {
    const [services,setServices] = useState([])
    const [tretment,setTretment] = useState(null)
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div>
            <h4 className='text-xl text-center text-primary font-bold'>Available Appointment on:- {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 text-center'>
                {
                    services.map(service => <Service service={service} key={service._id} setTretment={setTretment}></Service>)
                }
            </div>
            {tretment && <BookingModal
             date={date} 
            tretment={tretment}
            setTretment={setTretment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableApoinments;