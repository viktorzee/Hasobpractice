// import { Link } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import logo from '../../assets/logo.png';
import './navbar.css'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="">
            
            <Navbar color="light" light   expand='md' fill justified className="navbar-class">
            <NavbarBrand >
                    <Link to ="/"><img 
                        src={logo} 
                        alt='logo'
                        width="30px"
                        height="30px" 
                        className='logo'/>
                   </Link>
                </NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto nav' navbar expand >
                        
                            <NavItem>
                                <NavLink href="./school" className="nav-link">School</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='./programs' className="nav-link">Programs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href= './staff' className="nav-link">Staff</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href= './students' className="nav-link">Students</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href= './online-store'>Online Store</NavLink>
                            </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
     
        </div>
    )
}

export default NavBar;
 