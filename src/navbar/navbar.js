import React from 'react';
import Link from '../link/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class Header extends React.Component{

    constructor()
    {
        super();
        console.log("From Constructor");
        this.state = {
            name:"Ibrahim",
            job:"Developer"
        };
    }

    componentDidMount()
    {
        console.log("From ComponentDidMount");
        // this.setState({name:"Ahmed"});
    }

    componentDidUpdate()
    {
        console.log("From componentDidUpdate");
    }

    componentWillUnmount()
    {

    }

    changeName()
    {
        this.setState({name:"Hassan"});
    }

    render()
    {
        console.log("From Render");
        return <>
                    {/* <h1>My name is {this.state.name}</h1>
                    <button onClick={() => {this.changeName()}}>Change name</button>
                    <br/>
                    <Link name="Home" href="https://www.google.com"/>
                    <Link name="About" href="https://www.facebook.com"/>
                    <Link name="Contact us" href="https://www.twitter.com"/> */}

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
                </>;
    }

}