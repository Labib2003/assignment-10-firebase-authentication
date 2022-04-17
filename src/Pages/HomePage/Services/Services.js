import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            {
                services.map(service => <p>{service.name}</p>)
            }
        </div>
    );
};

export default Services;