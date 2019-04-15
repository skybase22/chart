import React, { Component } from 'react';
import '../App.css';

import Mapsvg from './map.svg'

class Markmap extends Component{
    render() {
      return (
        <div className="container">
          
          <img src={Mapsvg} width='500px' className="image" alt='' />

          <div className="overlay">
            <div className="icon1"> 
              <svg className="change-my-color" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512">
                <path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 
                43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 
                96v48h384v-48c0-63.598-128.402-96-192-96z"/></svg>
                  <img className="my-svg-alternate" width="96" height="96" src="ppngfallback.png"  alt=''/>
            </div>

            <div className="icon2"> 
              <svg className="change-my-color" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512">
                <path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 
                43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 
                96v48h384v-48c0-63.598-128.402-96-192-96z"/></svg>
                  <img className="my-svg-alternate" width="96" height="96" src="ppngfallback.png"  alt=''/>
            </div>
        </div>
        {/* <div className="overlay" >
          <a href="#" className="icon2" title="User Profile">
          <svg className="change-my-color" xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512">
          <path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 
          43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 
          96v48h384v-48c0-63.598-128.402-96-192-96z"/></svg>
          <img className="my-svg-alternate" width="96" height="96" src="ppngfallback.png" alt='' />
          </a>
        </div> */}
        </div >
      );
    }
  }

  export default Markmap;




