import React, { Component } from 'react';
import './App.css';
//import Inputform from './component/inputform.js'
import Markmap from './component/Markmap.js'
import Linechart from './component/Linechart.js'
import axios from "axios"
//import Iconsvg from './_ionicons_svg_md-person.svg'


// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';

  class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      posts:[],
      isOpen: false
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost:8000/api/students"
      )
      .then(res => {
        console.log('res.data', res)
        const post = res.data
        this.setState({ posts: post , isLoaded: true});
        console.log('posts',this.state.posts)

      })
      .catch(error => {
        console.log((error));
      });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    var lookup = this.state.posts
    var { isLoaded } = this.state
    if (!isLoaded) {
      return <div id='x' className='d-flex align-items-center justify-content-center'><div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    }

    else {
    return (
      <div>
        {/* <Navbar color="dark" light expand="md"  className="navbar navbar-expand-lg fixed-top" dark>
          <NavbarBrand href="/">PSU WiFi Analytic</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/Linechart.js">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar> */}
        <Markmap />
          <Linechart datastudent={lookup} />
        
      </div>
    );
  }
}
  }
export default App;
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       posts:[]
//     }
//   }

//   componentDidMount() {
//     axios
//       .get(
//         "http://localhost:6000/api/students/date"
//       )
//       .then(res => {
//         console.log('res.data', res)
//         const post = res.data
//         this.setState({ posts: post , isLoaded: true});
//         console.log('posts',this.state.posts)

//       })
//       .catch(error => {
//         console.log((error));
//       });
//   }


//   render() {
//     var lookup = this.state.posts
//     var { isLoaded } = this.state
//     if (!isLoaded) {
//       return <div>Loading...</div>
//     }

//     else {
    
//       return (
//         <div>
//           <Markmap />
//           <Linechart datastudent={lookup} />
//         </div>

//       )
//     }
//   }
// }


