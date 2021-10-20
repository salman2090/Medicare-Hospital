import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
const Details = () => {
    const {serviceId} = useParams();
    const id = parseInt(serviceId);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://salman2090.github.io/jsonapi/a.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div className="details-container">
            {services.filter(service => 
                    service.id ===id).map(selectedService => (
                    <div className="service-container m-auto">
                    <br/>
                        <div>
                                <Card className="mt-5 mb-5 w-100 shadow border-light rounded">
                                    <Card.Img variant="top" src={selectedService.img} />
                                    <Card.Body>
                                    <h2 className="mb-3">{selectedService.name}</h2>
                                    <Card.Text>
                                        {selectedService.description}
                                    </Card.Text>
                                    <h5>Service Hour: {selectedService.timing}</h5>
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