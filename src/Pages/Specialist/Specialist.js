import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Specialist.css';

const Specialist = ({specialist}) => {
    
    const { name, img, speciality, degree} = specialist;
    return (
        <div className="specialists-container">
            <CardGroup >
            <Card className=" specialist mx-5 mt-5 shadow p-3 mb-5 bg-body rounded ">
            <Card.Img  variant="top" src={img} />
                <Card.Body>
                   <h2>{name}</h2>
                    <br /><br />
                    <h4>Speciality: {speciality}</h4>
                    <br />
                    <h5>Degree: {degree}</h5>
                   
                </Card.Body>
            </Card>
            </CardGroup>
        </div>
    );
};

export default Specialist;