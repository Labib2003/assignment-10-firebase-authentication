import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    // getting data from the public folder and setting them in a state
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h3 className='text-3xl font-semibold my-5'>Services</h3>
            <div className='w-full md:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;