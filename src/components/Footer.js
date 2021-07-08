import React from 'react'
import {Link} from 'gatsby';
import { FaFacebookSquare,FaInstagram } from 'react-icons/fa';
export default function Footer() {
    return (
        <div className="footer">
             <div className="footer_logo">
               Educated_buyer
             </div>
             <div className="footer_section">
                 <Link to="/ContactUs" className="section_text">Contact Us</Link>
                 <Link to="/Advertisement" className="section_text">Advertisement</Link>
                 <Link to="/AboutUs" className="section_text">About Us</Link>
             </div>
             <div className="follow">
                 
                 <h6>Follow us on</h6>
                 <div className="social_media">
                 <a href="https://www.instagram.com/educated_buyer/">
                    <FaInstagram className="instagram"/>                 
                 </a>
                 <a href="https://www.facebook.com/educated_buyer-100641152284986">
               <FaFacebookSquare className="facebook"/>
                 </a>
                 </div>
             </div>
        </div>
    )
}
