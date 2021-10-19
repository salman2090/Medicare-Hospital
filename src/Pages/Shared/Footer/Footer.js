import React from 'react';
import './Footer.css';
import payment from '../../../images/footer/pay-banner.png';

const Footer = () => {
    return (
        <div className="bg-footer">
            <h2 className="mt-3 footer-text">Pay Online</h2>
            <h5 className="mt-3">Please contact our branch before making a payment nearby you.</h5>
            <img className="pe-5 mt-5" src={payment} alt="" />
            <p className="footer fs-5">© 2021 MediCare Hospitals Ltd. All Right Reserved.</p>
        </div>
    );
};

export default Footer;