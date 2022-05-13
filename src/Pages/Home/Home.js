import React from 'react';
import AppointmentFrom from './TestimonialFrom/TestimonialFrom';
import Banner from './Banner/Banner';
import DentalCare from './DentalCare';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';
import WelcomeBanner from './WelcomeBanner/WelcomeBanner';
import Footer from './Footer/Footer';
const Home = () => {
    return (
        <div>
            <WelcomeBanner></WelcomeBanner>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <AppointmentFrom></AppointmentFrom>
            <Footer></Footer>
        </div>
    );
};

export default Home;