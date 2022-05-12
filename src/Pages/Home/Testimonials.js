import React from 'react';
import quote from '../../assets/icons/quote.svg'
const Testimonials = () => {
    const feedbacks = [
        {
            _id:1,
            name:"jonas",
            img:"https://i.ibb.co/QD5vVBF/customer-1.jpg",
            feedback:"Excellent doctor!!!Very thorough and caring. I'm terribly afraid of the dentist and she's very sensitive to that and goes the extra mile to make you feel comfortable.They look so natural and I cannot stop smiling. ",
            ratings:4.8
        },
        {
            _id:2,
            name:"david",
            img:"https://i.ibb.co/6mqDL9v/my-bg2.jpg",
            feedback:"No pain or problems with my extractions and she goes above and beyond the call of duty to make sure you understand what you should do with your teeth and mouth so you do not have future health risks. ",
            ratings:4.6
        },
        {
            _id:3,
            name:"jonson",
            img:"https://i.ibb.co/hyNMYTf/my-bg.jpg",
            feedback:"My tooth had been hurting and infected for months. It caused me a lot of other systemic infections. She was great with extraction. Even though I was nervous, she took time to make me comfortable and procedure was well done.",
            ratings:4.5
        }
    ]
    return (
        <section>
          <div className='flex justify-between items-center'>
            <div>
                <h4 className="text-xl text-primary font-bolde"> Testimonials</h4>
                <h2 className='text-3xl'>What our patient's says</h2>
             </div>
             <div>
                <img src={quote}className="w-48" alt="" srcset="" />
             </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    feedbacks.map(feedback =>
                        <div class="card card-side bg-base-100 shadow-xl">
                          <figure><img src={feedback.img} alt="Movie"/></figure>
                          <div class="card-body">
                            <h2 class="card-title">{feedback.name}</h2>
                            <p>{feedback.feedback}</p>
                            <h5 className='text-xl'> Ratings:-{feedback.ratings}</h5>
                          </div>
                        </div>
                        )
                }
            </div>
        </section>
    );
};

export default Testimonials;