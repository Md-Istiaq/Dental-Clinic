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
        {
            _id:4,
            name:"teeth Orthodontics",
            description:"Orthodontics is a dentistry specialty that addresses the diagnosis, prevention, and correction of mal-positioned teeth and jaws, and misaligned bite patterns. It may also address the modification of facial growth, known as dentofacial orthopedics. Abnormal alignment of the teeth and jaws is very common",
            img:'https://img.freepik.com/free-vector/doctor-orthodontist-examining-teeth-with-braces-vector-illustration-dental-brackets-orthodontics-bit_103044-1003.jpg?w=2000'

        },
        {
            _id:5,
            name:"Oral Surgery",
            description:"Oral surgery is a broad term for any operation performed on your teeth, gums, jaw or surrounding oral and facial structures. It includes a wide range of procedures, including teeth extractions, dental bone grafts, periodontal (gum) grafts and corrective jaw surgery.",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrenS03xTneWISJGEcDLWCqTret44qC3f61Er4hd_X3M4iMkrfnoXSd4Y3D9taSBpuQg&usqp=CAU'

        },
        {
            _id:6,
            name:"Pediatric Dental",
            description:"​Pediatric dentists are dedicated to the oral health of children from infancy through the teen years. They have the experience and qualifications to care for a child’s teeth, gums, and mouth throughout the various stages of childhood.",
            img:'https://media.istockphoto.com/vectors/big-tooth-with-small-dentists-little-children-in-medical-uniforms-vector-id1308431402?b=1&k=20&m=1308431402&s=170667a&w=0&h=tQ4JD6h0gV-vQg6dy_N0P9TmrWqJq2I8YiZMGlfdubI='

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