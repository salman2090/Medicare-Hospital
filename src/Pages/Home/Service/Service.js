import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, img, description } = service;
    return (
        <div className="service">
            <Card border="light" className=" m-5 mt-5 shadow p-3 mb-5 bg-body rounded-3" >
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <Link to={`/details/${id}`}><button className="btn-warning">Details</button></Link>
                </Card.Body>
            </Card>

            {/* <img src={img} alt="" /> */}
            
            
        </div>
    );
};

export default Service;