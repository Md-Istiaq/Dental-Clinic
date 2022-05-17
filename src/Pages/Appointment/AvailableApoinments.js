import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './AppointmentBanner/Service';
import BookingModal from './BookingModal';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const AvailableApoinments = ({date,setDate}) => {
    // const [services,setServices] = useState([])
    const [tretment,setTretment] = useState(null)
    const formatedDate = format(date, 'PP')
    const {data : services ,isLoading ,refetch} = useQuery(['available' , formatedDate], () =>
    fetch(`http://localhost:5000/available?date=${formatedDate}`).then(res =>
      res.json()
    )
  )
  if(isLoading){
      return <button class="btn btn-square loading">Loading</button>
  }
    // useEffect(() =>{
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // } ,[formatedDate])
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
            refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableApoinments;