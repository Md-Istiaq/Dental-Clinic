import React from 'react';
import doctor from '../../assets/images/493-4932934_doctor-dentist-png-transparent-png-removebg-preview (2).png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <div style={{
            background:`url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1'>
                <img className='mt-[-100px] ml-[60px] hidden lg:block' src={doctor} alt="" srcset="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment today</h2>
                <p className='text-white'>Our mission is to provide world-class dental care for our patients at an affordable cost with finest, atraumatic treatment possible which will eliminate their problems and satisfy their needs.Our team is proud to offer a fresh take on going to the dentist in Liberty. We’ve got you covered with personalized cleanings, painless fillings, crowns, dentures, and bridges.</p>
                <PrimaryButton>Get Start</PrimaryButton>
            </div>
        </div>
    );
};

export default MakeAppointment;