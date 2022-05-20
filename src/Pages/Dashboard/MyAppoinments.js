import React ,{useState,useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import auth from '../../_firebase.init'
const MyAppoinments = () => {
    const [Appointments,setAppointments] = useState([])
    const [user] = useAuthState(auth)
  const Navigate = useNavigate()
    useEffect( () =>{
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}` , {
              method:'GET',
              headers:{
                'authorization':`bearer ${localStorage.getItem('accessToken')}`
              }
            })
            .then(res => {
              if(res.status === 401 || res.status === 403){
                Navigate('/')
              }
              return res.json()
            })
            .then(data => setAppointments(data))
        }
    } , [user])
    return (
        <div>
            <h1>my appointment:{Appointments.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
       
        {
            Appointments.map((a , index) =><tr>
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.tretment}</td>
              </tr>)
        }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppoinments;