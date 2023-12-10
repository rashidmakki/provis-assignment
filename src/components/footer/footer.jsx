import React from 'react'
import "./footer.css"
import FacebookIcon from "/images/facebook.svg";
import TwitterIcon from "/images/twitter.svg";
import WhatsAppIcon from "/images/whatsApp.svg";
import InstagramIcon from "/images/instagram.svg";

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-details-container'>
               <div className='row'>
                    <div className='col'>
                     <div className='details'>
                        <span className='footer-heading'>
                         <span style={{fontWeight:300, color:'#F67366'}}>Ship</span> Up
                        </span>
                        <span className='footer-para'>
                          ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint
                        </span>
                     </div>
                     </div>
                     <div className='col'>
                        <div className='details'>
                            <span  className='footer-heading'>
                            Explore
                            </span>
                            <div className="link-container">
                                <a className='text-decoration-none link-heading' href='#'>
                                    About Us
                                </a>
                                <a className='text-decoration-none link-heading' href='#'>
                                    Our Warehouses
                                </a>
                                <a className='text-decoration-none link-heading' href='#'>
                                    Blog
                                </a>
                                <a className='text-decoration-none link-heading' href='#'>
                                    News and Media
                                </a>
                            </div>
                        </div>
                     </div>
                     <div className='col'>
                        <div className='details'>
                        <span  className='footer-heading'>
                            Legal
                            </span>
                            <div className="link-container">
                                <a className='text-decoration-none link-heading' href="#">
                                    Terms
                                </a>
                                <a className='text-decoration-none link-heading'  href="#">
                                    Privacy
                                </a>
                            </div>
                        </div>
                     </div>
                     <div className='col'>
                        <div className='details'>
                        <span  className='footer-heading'>
                            Social Media
                        </span>
                        <div style={{display: 'flex',justifyContent:'flex-start', flexDirection:'row',alignItems: 'center',gap:'20px'}}>
                         <a className="text-decoration-none logo" href="#">
                           <img src={FacebookIcon} alt="facebook" />
                         </a>
                         <a className="text-decoration-none logo" href='#'>
                           <img src={TwitterIcon} alt="facebook" />
                         </a>
                         <a className="text-decoration-none logo" href='#'>
                           <img src={WhatsAppIcon} alt="facebook" />
                         </a>
                         <a className="text-decoration-none logo" href='#'>
                           <img src={InstagramIcon} alt="facebook" />
                         </a>
                        </div>
                        </div>
                    </div>
               </div>
            <div className='footer-logo'>
                <span className='hr'>

                </span>
                <div className='company-logo-wrapper'>
                     <span> Ship</span><span className='footer-logo-part'>Up</span><span style={{fontWeight:"900"}}>.ng</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer