import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home" className="home-page bg-light">
            <Banner></Banner>
            <Services></Services> 
        </div>
    );
};

export default Home;