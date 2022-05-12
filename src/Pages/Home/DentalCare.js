import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const DentalCare = () => {
    return (
      <div class="hero min-h-screen bg-white">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://www.pasadenahealthcenter.com/site/wp-content/uploads/2018/02/Dentist-Check-Up.jpg" class="max-w-sm rounded-lg shadow-2xl"  alt=''/>
          <div>
            <h1 class="text-5xl font-bold">We Create Beautiful Smiles</h1>
            <p class="py-6">The Doctor's portal is a modern dental clinic, specialized in advanced diagnostics and treatment of dental and oral disorders. We offer comprehensive services from all fields of dentistry. In addition to high-end dental equipment, all services are provided in a comfortable, luxury environment.</p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    );
};

export default DentalCare;