import React from 'react';
import Specialists from '../../Specialists/Specialists';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Services></Services>
            <Specialists></Specialists>
        </div>
    );
};

export default Home;