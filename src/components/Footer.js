import React from 'react';
import {
    Image
} from 'react-bootstrap'
import {Facebook,
    Whatsapp,
    Twitter,
    Instagram,
    Youtube
} from 'react-bootstrap-icons'

const Footer = () => {
    return (
        <div style={{ marginTop: 100, display: 'flex', justifyContent: 'space-around' }}>
            <Image src="https://www.nutshellcreative.co.uk/wp-content/uploads/2017/06/PL-150x150-1.png" roundedCircle style={{ width: '130px', height: '130px'}} />
            <div>
                <h4 className="footer-item-title">Address</h4>
                <p className="footer-item-text">Edible Kitchen Services<br />JN Stadium, Kaloor<br />Kochi - 6806644</p>
            </div>

            <div>
                <h4 className="footer-item-title">Phone</h4>
                <p className="footer-item-text">0124 398 6371</p>
            </div>
            <div>
                <h4 className="footer-item-title">Quick Links</h4>
                <ul className="footer-item-links">
                    <li>My Account</li>
                    <li>About Us</li>
                    <li>Keto Plans</li>
                    <li>Our Dishes</li>
                </ul>
            </div>
            <div>
                <h4 className="footer-item-title">Follow Us</h4>
                <div>
                    <Facebook style={{ width: 25, height: 25 }} />
                    <Whatsapp style={{ width: 25, height: 25, marginLeft: 10 }} />
                    <Twitter style={{ width: 25, height: 25, marginLeft: 10 }} />
                    <Instagram style={{ width: 25, height: 25, marginLeft: 10 }} />
                    <Youtube style={{ width: 25, height: 25, marginLeft: 10 }} />
                </div>
            </div>
        </div>
    )
}

export default Footer