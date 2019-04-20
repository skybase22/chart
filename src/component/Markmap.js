import React, { Component } from 'react';
import '../App.css';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment,Icon } from 'semantic-ui-react'

import Mapsvg from './map.svg'

class Markmap extends Component{
    render() {
      var ic = "icon1"
      return (
        <div className="container">
          
          <img src={Mapsvg} width='500px' className="image" alt='' />

          <div className="overlay">
            <div  className = "icon1"> 
            <Icon top="100%" name='male' />
            </div>

            
            <div  className = "icon2"> 
            <Icon top="100%" name='male' />
            </div>
        </div>
        </div >
      );
    }
  }

  export default Markmap;




