// import { Link } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import Logo from '../../assets/Logo.png';
import './navbar.css'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="">
            <Navbar color="light" light   expand='md' fill justified className="navbar-class">
            <NavbarBrand >
                    <Link to ="/"><img 
                        src={Logo} 
                        alt='logo'
                        width="30px"
                        height="30px" 
                        className='logo'/>
                   </Link>
                </NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar expand >
                        
                            <NavItem>
                                <NavLink href="./school">School</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='./programs'>Programs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href= './staff'>Staff</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href= './students'>Students</NavLink>
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
 