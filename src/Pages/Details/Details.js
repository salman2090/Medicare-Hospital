import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
const Details = () => {
    const {serviceId} = useParams();
    const id = parseInt(serviceId);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://salman2090.github.io/jsonapi/services.json')
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
                                <Card>
                                                Card border="light" className="card-body mx-3 mt-5 shadow p-3 mb-5 bg-body rounded-3" >
                                    <Card.Img className="pt-3" variant="top" src={filteredService.img}/>
                                    <Card.Body>
                                        <h3>{filteredService.name}</h3>
                                        <p>{filteredService.description}</p>
                                        <Link to={`/details/${id}`}><Button className="text-dark mt-3" variant="outline-info">Details</Button>{' '}</Link>
                                    </Card.Body>
                                </Card> 
                                
                            </div>           
                    </div>         
                ))
                }
        </div>
    );
};

export default Details; 