import React from 'react';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id:1,
            name:"Fluoride Treatment",
            description:"Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person’s teeth to improve health and reduce the risk of cavities.",
            img:'https://i.ibb.co/bmW2gbG/download-3.png'

        },
        {
            _id:2,
            name:"cavity filing",
            description:"Fillings treat tooth decay, preventing further damage and tooth loss, as well as the possibility of pain and infection. A filling seals a hole, or cavity, in the tooth.",
            img:'https://thumbs.dreamstime.com/b/tooth-cavity-filling-white-background-tooth-cavity-filling-116591302.jpg'

        },
        {
            _id:3,
            name:"teeth whitening",
            description:"Teeth whitening is one of the most popular cosmetic dentistry treatments offering a quick, non-invasive and affordable way to enhance a smile. whitening treatments are available to satisfy every budget, time frame and temperament.",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3USwUp-fggSzTfyQk2SZkSuGA09Sd4bKi8ufOhlwddI8_ypONPh_NY5wsfxvHJKOhUbg&usqp=CAU'

        },
    ]
    return (
        <div className='my-30'>
            <div className='text-center'>
            <h3 className='text-2xl text-primary font-bold uppercase'>Our Services</h3>
            <h2 className='text-3xl'>Services we provide</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-6'>
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
            </div>
        </div>
    );
};

export default Services;