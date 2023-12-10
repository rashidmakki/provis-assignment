import React from 'react';
import VideoIcon from "/images/video.svg";
import DeliveryImg from "/images/delivery.png";
import { InputAdornment, TextField } from '@mui/material';
import "./body.content.css"
import "../../App.css"

function BodyContent() {
  return (
    <div className='body-container'> 
        <div className='display-data-image'>
               <div className='data-container'>
                    <div className='data'>
                        <span className='title'>
                        quick & reliable <span className='part-of-title'> warehousing <span className="text-lowercase">and</span> logistics </span> solution.
                        </span>
                        <span className="sub-title">
                        ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint.
                        </span>
                    </div>
                    <div className="button-container">
                        <a className='btn button-dark p-3'> Join Now </a>
                        <div className='video-container'>
                            <span className='video-icon-container'> 
                            <img src={VideoIcon} alt="video" />
                            </span>
                            <span>
                            <a className='btn' href="https://www.youtube.com/?gl=IN" target='_blank' style={{display:'flex', justifyContent:'center',alignItems:'center',fontWeight: 800}}>
                                Play Demo
                            </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                  <img className="image" src={DeliveryImg} alt=""/>
                </div>
        </div>
        <form>
        <div className='delivery-container'>
          <TextField
            label="Origin"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">Enter location</InputAdornment>,
            }}
          />
          <TextField
            label="Destination"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">Enter Destination</InputAdornment>,
            }}
          />
          <TextField
            label="Weight"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">Enter Weight (KG)</InputAdornment>,
            }}
          />
          <a className='btn button-dark p-3'>
            Check Price
          </a>
        </div>
        </form>
    </div>
  )
}

export default BodyContent