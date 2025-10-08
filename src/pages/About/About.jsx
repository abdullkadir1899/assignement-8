import React, { Suspense, useEffect, useState } from 'react';
import AboutHeader from './AboutHeader';
import AboutInput from './AboutInput';
import { useLoaderData } from 'react-router';
import AllCard from './AllCard/AllCard';
import AppNotFound from '../Error/AppNotFound';


const About = () => {
    const aboutData = useLoaderData()
    

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(aboutData)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const delay = setTimeout(() => {
            const filtered = aboutData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
            setFilteredData(filtered)
            setLoading(false);
        }, 500)
    
    return () => clearTimeout(delay)
    }, [searchTerm, aboutData])


    return (
        <div>
            {/* about header */}
            <AboutHeader></AboutHeader>


            {/* Search Input */}
            <AboutInput aboutData={aboutData} setSearchTerm={setSearchTerm}></AboutInput>


            {/* all card */}

            
            <Suspense fallback={<span>loding...</span>}>
                    <div className='container mx-auto'>
                        {
                            loading ? (
                                <div className="text-center my-10">
                                    <span className="loading loading-spinner text-success"></span>
                                </div>
                            ) : (
                                filteredData.length > 0 ? (
                                    <div className='grid my-10 gap-4 h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        aboutData.map(data => <AllCard key={data.id} data={data}></AllCard>)
                    }
                    </div>
                                ) : (
                                    <AppNotFound/>
                                )
                            )
                        }
                    
                    </div>
            </Suspense>

            


        </div>
    );
};

export default About;



