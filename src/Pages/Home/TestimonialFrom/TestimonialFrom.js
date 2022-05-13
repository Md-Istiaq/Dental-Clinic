import React from 'react';
import './TestimonialFrom.css'
import BG from '../../../assets/images/bg.png'
import PrimaryButton from '../../Shared/PrimaryButton';
const TestimonialFrom = () => {
    return (
        <div class="hero min-h-screen appointment-from">
  <div class="hero-content ">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold text-primary">Stay Connected with us</h1>
      <p class="py-6 text-white">We always care for our patient. we want then to stay  happy.<br/> stay Connected with us so that we can take care of you & help you to live a happy life</p>
    </div>
    <div class="card flex-shrink-0 w-full  input-field">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text text-white text-xl">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered input-filed" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-white text-xl">Password</span>

          </label>
          <input type="text" placeholder="password" class="input input-bordered input-filed" />
          <div class="form-control">
          <label class="label">
            <span class="label-text text-white text-xl">Phone Number</span>
          </label>
          <input type="text" placeholder="Phone Number" class="input input-bordered input-filed" />
        </div>

          <textarea placeholder='Your massage' name="massage" id="" cols="30" rows="08" className='input-filed mt-10 rounded-md'></textarea>
          <label class="label">
            <a href="#" class="label-text-alt link link-hover text-white text-xl">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default TestimonialFrom;