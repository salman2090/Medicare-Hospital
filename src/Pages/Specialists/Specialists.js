import React, { useEffect, useState } from 'react';
import Specialist from '../Specialist/Specialist';
import './Specialists.css';

const Specialists = () => {

    const [specialists, setSpecialists] = useState([]);

    useEffect(() => {
        fetch('./specialists.json')
            .then(res => res.json())
            .then(data => setSpecialists(data))
    })

    return (
        <div>
            <h2>Our Specialist</h2>
            <div className="specialist-container">
                {
                    specialists.map(specialist => <Specialist
                        key={specialists.id}
                        specialist={specialist}
                    ></Specialist>)
                }
            </div>
        </div>
    );
};

export default Specialists;