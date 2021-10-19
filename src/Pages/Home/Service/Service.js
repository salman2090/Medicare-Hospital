
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, img, description } = service;
    return (
        <div className="service">
            <Card border="light" className="card-body mx-3 mt-5 shadow p-3 mb-5 bg-body rounded-3" >
                <Card.Img className="pt-3" variant="top" src={img}/>
                <Card.Body>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <Link to={`/details/${id}`}><Button className="text-dark mt-3" variant="outline-info">Details</Button>{' '}</Link>
                </Card.Body>
            </Card> 
        </div>
    );
};

export default Service;