// import { Link } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import Logo from '../../assets/Logo.png';


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="">
            <Navbar color="light" light   expand='md'>
                <NavbarBrand>
                    <Link to ="/"><img 
                        src={Logo} 
                        alt='logo'
                        width="30px"
                        height="30px" 
                        className='logo'/>
                   </Link>
                </NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar style={{display:"flex", alignContent: "flex-end"}}>
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
 