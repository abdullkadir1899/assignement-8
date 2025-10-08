import { Download, Star } from 'lucide-react';
import React from 'react';

const AllCard = ({data}) => {
    const {image, downloads, title,  ratingsAvg} = data
    return (


                <div className="card border-2 h-full  bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
    </h2>
    <div className="card-actions justify-between">
       <div>
        <ul className='flex gap-1 items-center'>
            <li> <Download/></li>
            <li>{downloads}</li>
        </ul>
       </div>
       <div> 
        <ul className='flex  gap-1 items-center '>
            <li><Star/></li>
            <li>{ratingsAvg}</li>
        </ul>
       </div>
    </div>
  </div>
            </div>
    );
};

export default AllCard;