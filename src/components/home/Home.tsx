import { useState } from 'react';
import {Form, FormGroup, Label, Button, Input, Modal, ModalHeader, ModalBody} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from "../../redux/store";
import { UserState } from "../../redux/features/userSlice";
import { useNavigate } from "react-router";
import studentPics from '../../assets/students_home.png'
import './Home.css'
import NavBar from '../NavBar/navbar';
import React from 'react';
import {authenticateUser} from '../../redux/features/userSlice'
import {isAuthenticated} from '../../redux/services/authentionservice'
import LoginModal from './LoginModal';




const Home = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword]  = useState("")
    
    
    const handleEmailChange = (e:any) => setEmail(e.target.value)
    const handlePasswordChange = (e:any) => setPassword(e.target.value)

    return(
        <React.Fragment>
            <div>
                <NavBar />  
                <div className="home-container">
                <div className="moshood-abiola-text">
                    <h1 className="header-text">Moshood Abiola PolyTechnic</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                        rerum aperiam cum suscipit nisi reiciendis vel error necessitatibus
                    </p>
                    <div className="sign-in-btn">
                        <Button className="login" onClick={toggle}>Login</Button>
                        <Button className="register">Register</Button>
                    </div>
                </div>
                {/*Modal content */}
                <div>
                   <LoginModal 

                   /> 
                </div>
                <div className="student-pics">
                    <img src={studentPics} alt="studentpic" width="100%" />
                </div>
                </div>
            </div>
            
        </React.Fragment>       
    )
}

export default Home;