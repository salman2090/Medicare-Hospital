import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    // load data
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    })

    return (
        <div id="services">
            <h2 className="fw-bold">Checkout Our Services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={services.key}
                        service={service}
                    ></Service>)
                }
            </div>  
        </div>
    );
};

export default Services;