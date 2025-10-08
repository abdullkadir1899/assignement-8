import React, { use } from 'react';
import { Download } from 'lucide-react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';

const AppsHome = ({AppsPromise}) => {
    const data = use(AppsPromise)
    console.log(data)

    return (
        <div className='container mx-auto'>

            <div className='grid grid-cols-1 mt-20 gap-5   md:grid-cols-2 lg:grid-cols-4'>
                            {
                data.map(d =>         <div  key={d.id} d={d}>
            <div className="card border-2 h-full  bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={d.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {d.title}
    </h2>
    <div className="card-actions justify-between">
       <div>
        <ul className='flex gap-1 items-center'>
            <li> <Download/></li>
            <li>{d.downloads}</li>
        </ul>
       </div>
       <div> 
        <ul className='flex  gap-1 items-center '>
            <li><Star/></li>
            <li>{d.ratingAvg}</li>
        </ul>
       </div>
    </div>
  </div>
</div>
        </div>)
            }
            </div>

            <div className=' my-20 text-center'>
                <Link to='/about'><button className="btn  bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white">Show All</button></Link>
            </div>

        </div>
    );
};

export default AppsHome;