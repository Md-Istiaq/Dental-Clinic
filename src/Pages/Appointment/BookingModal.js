import React from 'react';
import { format } from 'date-fns';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../_firebase.init';
import { ToastContainer, toast } from 'react-toastify';
const BookingModal = ({date,tretment ,setTretment ,refetch}) => {
  const [ user] = useAuthState(auth)
  const formetedDate = format(date, 'PP')
    const handleBooking = e =>{
        e.preventDefault()
        const slot = e.target.slot.value
        console.log(user.displayName)
        const booking = {
          tretmentId :tretment._id,
          tretment: tretment.name,
          date: formetedDate,
          slot,
          patient:user.email,
          patientName : e.target.name.value,
          phone: e.target.phone.value
        }
        fetch('http://localhost:5000/booking' , {
          method:"POST",
          headers:{
            'content-type' :'application/json'
          },
          body:JSON.stringify(booking)

        })
        .then(res => res.json())
        .then(data => {
          if(data.success){
            alert(" tretment booked")
          }
          else{
            alert("Already Booked")
          }
          refetch()
          setTretment(null)
        })
    }
    return (
        <div>
        <input type="checkbox" id="booking modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
          <label for="booking modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="font-bold text-lg text-primary">Booking for {tretment.name}</h3>
            <form className='grid grid-cols-1 gap-3 justify-items-center' onSubmit={handleBooking}>
            <input type="text" value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" disabled />
            <select name='slot' class="select select-bordered w-full max-w-xs">
                {
                 tretment.slots.map(slot =><option value={slot}>{slot}</option>)
                }
             </select>
            <input type="text"  placeholder='your Name' name='name' class="input input-bordered w-full max-w-xs" />
            <input type="email" value={user.email} disabled name='email' class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Phone number" name='phone' class="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Submit" class="btn btn-primary w-full max-w-xs" />
            </form>
          </div>
        </div>
        <ToastContainer/>
        </div>
    );
};

export default BookingModal;