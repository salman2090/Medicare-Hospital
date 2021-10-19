import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const Details = () => {
    const {serviceId} = useParams();
    const id = parseInt(serviceId);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div>
            <h2>This is details: {serviceId}</h2>
            {services.filter(service => 
                    service.id ===id).map(filteredService => (
                    <div className="service-container m-auto">
                    <br/>
                        <h2>Service Details:</h2>
                            <div className="card">
                                <img className="card-img-top m-auto" src={filteredService.image} alt=""/>
                                
                                <div className="card-body">
                                <h5 className="card-title">{filteredService.name}</h5>
                                <p className="card-text">{filteredService.description}</p>
                                <p className="card-text"><small class="text-muted">Price: {filteredService.price}</small></p>
                                </div>
                            </div>
                        
                    </div>
                    
                ))
                }
        </div>
    );
};

export default Details; 