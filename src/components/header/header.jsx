import React from 'react'
import "./header.css"
import { headerLinkNames } from '../../common/index'
import { Popover, PopoverTrigger } from '@chakra-ui/react'
import PopoverContentWrapper from '../popover/popover'
import ChevronDown from "/images/chevron-down.svg"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{width:'100%'}}>
    <div className="container d-flex justify-content-center nav-wrapper">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#"><span className='brand-name'>Ship <span className='brand-part-name'>Up</span> </span></a>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            {
                headerLinkNames.map((linkName,idx)=>{
                    if(linkName === "Company"){
                      return(
                          <li key={idx} className="nav-item">
                            <Popover placement='bottom-end' trigger='hover'>
                              <PopoverTrigger>
                               <span className='d-flex flex-row justify-content-start align-items-center'><a className=" nav-link link-style" > {linkName}</a> <span> <img src={ChevronDown}/> </span></span>
                              </PopoverTrigger>
                              <PopoverContentWrapper/>
                            </Popover>
                          </li>
                      )
                    }else{
                      return(
                      <li key={idx} className="nav-item">
                          <a className="nav-link link-style" aria-current="page" href="#"> {linkName}</a>
                      </li>
                      )
                    }
                  }
                )
            }
        </ul>
        <div className='d-flex flex-row justify-content-center align-items-center gap-3'>
          <a className="btn request-btn"> Request Quote</a>
          <a className="btn join-btn"> Join Now</a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Header