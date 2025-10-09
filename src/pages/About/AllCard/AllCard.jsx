import { Download, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const AllCard = ({data}) => {
    const {image, downloads, title,id,  ratingAvg} = data

  

    return (
      <>



        <Link to={`/appsDetails/${id}`}>
            <div className="card  shadow-2xl  h-full  bg-base-100 w-full ">
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
            <li>{ratingAvg}</li>
        </ul>
       </div>
    </div>
  </div>
        </div>
        </Link>

      </>

    );
};

export default AllCard;