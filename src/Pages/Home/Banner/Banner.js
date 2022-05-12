import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
         <div class="hero-content flex-col lg:flex-row">
           <img src="https://media.istockphoto.com/photos/modern-dental-office-picture-id160641361?k=20&m=160641361&s=612x612&w=0&h=-diocHkLEg6SO9dt-NjG9diCp2o81yx_LzN49OvhJnY=" class=" rounded-lg shadow-2xl" />
           <div>
             <h1 class="text-5xl font-bold">Your best smile , backed by technology</h1>
             <p class="lg:py-6 text-xl italic">We are committed to providing the highest quality of clinical care and personalized service in a warm and compassionate atmosphere. Our doctors and staff enjoy getting to know each patient and their families, and love creating relationships that last multiple generations.<br/>our team are committed to providing the highest quality of clinical care and personalized service in a warm and compassionate atmosphere. Our philosophy is to provide excellent service in a timely manner, and to create relationships that last as long as our smiles.</p>
             <PrimaryButton>Get Started</PrimaryButton>
           </div>
         </div>
       </div>
    );
};

export default Banner;