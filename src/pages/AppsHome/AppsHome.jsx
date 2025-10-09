import React, { use } from 'react';
import { Download } from 'lucide-react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';
import AppsHomeDetails from './AppsHomeDetails';

const AppsHome = ({AppsPromise}) => {
    const data = use(AppsPromise)
    console.log(data)

    return (
        <div className='container mx-auto'>

            <div className='grid grid-cols-1 mt-20 gap-5 p-4  md:grid-cols-2 lg:grid-cols-4'>
                            {
                data.map(data => <AppsHomeDetails data={data} key={data.id}></AppsHomeDetails>   )
            }
            </div>

            <div className=' my-20 text-center'>
                <Link to='/about'><button className="btn  bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white">Show All</button></Link>
            </div>

        </div>
    );
};

export default AppsHome;