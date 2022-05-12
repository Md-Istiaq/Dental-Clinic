import React from 'react';

const InfoCard = ({img , cardtitle , BgClass, text , cardInfo}) => {
    return (
        <div class={`card lg:card-side  shadow-xl drop-shadow-2xl rounded-full mb-8  ${BgClass} ${text}`}>
  <figure className='pl-5'>
      <img src={img} alt="Album"/>
  </figure>
  <div class="card-body">
    <h2 class="card-title">{cardtitle}</h2>
    <p>{cardInfo}</p>
  </div>
</div>
    );
};

export default InfoCard;