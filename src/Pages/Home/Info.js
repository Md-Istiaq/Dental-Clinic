import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCard cardtitle="Opening Hours"  BgClass="bg-primary" text="text-white" cardInfo="our clinic open's at 10am & close at 10pm" img={clock}></InfoCard>
            <InfoCard cardtitle="Our Location" BgClass="bg-secondary"  text="text-white" cardInfo="12, 12 O.R. Nizam Rd, Panchlaish , Chittagong" img={marker}></InfoCard>
            <InfoCard cardtitle="contact us" BgClass="bg-accent"  text="text-white" cardInfo="contact us on :- 00000000" img={phone}></InfoCard>
        </div>
    );
};

export default Info;