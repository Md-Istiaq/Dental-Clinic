import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';

const Service = ({service ,setTretment}) => {
    return (
       <div class="card w-96 bg-base-100 shadow-xl mt-10 image-full">
           <figure><img src={service.img} alt="Shoes" /></figure>
         <div class="card-body">
           <h2 class="text-center text-2xl ">{service.name}</h2>

           <p>{service.slots.length === 0 ? <>No slots Available <br/> Try another date</> : <>{service.slots.length} slots Available</>} </p>
           <label for="booking modal" disabled={service.slots.length === 0} className='btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary' onClick={() =>setTretment(service)}>Book Appointment</label>
         </div>
       </div>
    );
};

export default Service;