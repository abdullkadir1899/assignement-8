import React, { Suspense } from 'react';
import AboutHeader from './AboutHeader';
import AboutInput from './AboutInput';
import { useLoaderData } from 'react-router';
import AllCard from './AllCard/AllCard';

const About = () => {
    const aboutData = useLoaderData()
    console.log(aboutData)

    return (
        <div>
            {/* about header */}
            <AboutHeader></AboutHeader>


            {/* Search Input */}
            <AboutInput aboutData={aboutData}></AboutInput>


            {/* all card */}
            <Suspense fallback={<span>loding...</span>}>
                    <div className='container mx-auto'>
                    <div className='grid my-10 gap-4 h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        aboutData.map(data => <AllCard key={data.id} data={data}></AllCard>)
                    }
                    </div>
                    </div>
            </Suspense>

            


        </div>
    );
};

export default About;