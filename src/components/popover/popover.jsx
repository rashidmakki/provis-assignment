import React from 'react'
import "./popover.css"
import UserIcon from "/images/user-plus.svg";
import BulbIcon from "/images/bulb.svg";
import MapPinIcon from "/images/map-pin.svg";
import CompanyProfile from "/images/company-profile.png";
import ArrowRightIcon from "/images/arrow-right.svg"
import { PopoverArrow, PopoverBody, PopoverContent } from '@chakra-ui/react';
function PopoverContentWrapper() {
  return (
    <PopoverContent>
        <PopoverArrow/>
        <PopoverBody>
            <div className='container pop-container'>
                <div className='row'>
                    <div className='col col-md-6'>
                    <h3> Company</h3>
                    <div className="container-details">
                        <span className='icon-container'>
                            <img src={UserIcon} alt=""/>
                        </span>
                        <div className='details-list-container'>
                            <span className='detail-title'>
                                About Us
                            </span>
                            <span className='detail-heading'>
                            The people behind ShipUp and the story of shared success.
                            </span>
                        </div>
                    </div>
                    <div className="container-details">
                        <span className='icon-container'>
                            <img src={MapPinIcon} alt=""/>
                        </span>
                        <div className='details-list-container'>
                            <span className='detail-title'>
                                Partner With Us
                            </span>
                            <span className='detail-heading'>
                            Collbration with ShipUp and drive mutualgrowth
                            </span>
                        </div>
                    </div>
                    <div className="container-details">
                        <span className='icon-container'>
                            <img src={BulbIcon} alt=""/>
                        </span>
                        <div className='details-list-container'>
                            <span className='detail-title'>
                                Career
                            </span>
                            <span className='detail-heading'>
                                Join the ShipUp 
                            </span>
                        </div>
                    </div>
                    </div>
                    <div className='col col-md-6'>
                    <h3> Newsroom </h3> 
                    <div className='d-flex flex-column justify-content-center align-items-start gap-3'>
                    <span>
                    <img src={CompanyProfile} width='242px' height='161px'/>
                    </span>
                    <span className='news-details'>
                    News and awards
                    </span>
                    <span className='learn-details'>
                    Learn More <img src={ArrowRightIcon} width='12px' height="12px" />
                    </span>
                    </div>
                    </div>
                </div>
            </div>
        </PopoverBody>
    </PopoverContent>
  )
}

export default PopoverContentWrapper