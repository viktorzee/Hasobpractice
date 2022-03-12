import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import studentPics from '../../assets/students_home.png'
import {Form, FormGroup, Label, Button, Input, Modal, ModalHeader, ModalBody} from 'reactstrap'
import { useDispatch} from 'react-redux';
import { useNavigate } from "react-router";
import {authenticateUser} from '../../redux/features/userSlice'
import {isAuthenticated} from '../../redux/services/authentionservice'
import NavBar from '../NavBar/navbar';



const Home = () => {
    const [modal, setModal] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword]  = useState("")

    const toggleModal = () => setModal(!modal)

    const dispatch = useDispatch();           
    const navigate = useNavigate()



    const handleSubmit = (values: any) => {    
        
        if(isAuthenticated()){
            navigate('/programs')
        }
        //dispatch
        dispatch(authenticateUser(values))
    
    }


    const handleEmailChange = (e: any) => setEmail(e.target.value)
    const handlePasswordChange = (e: any) => setPassword(e.target.value)



    return(
        <React.Fragment>
            <div>
                <NavBar />  
                <div className="home-container">
                    
                <div className="moshood-abiola-text">
                    <h1 className="header-text">Moshood<span className="polytext">Abiola</span><span className="polytext">PolyTechnic</span></h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                        rerum aperiam cum suscipit nisi reiciendis vel error necessitatibus
                    </p>
                    <div className="sign-in-btn">
                        <Button className="login" onClick = {toggleModal}>Login</Button>
                        <Button className="register">Register</Button>
                    </div>
                </div>
                <div className="modal-container">
            {/*Modal content */}
            <Modal isOpen= {modal}
                toggle= {toggleModal}
            >
                            <h2 className='modal-header'>Welcome Back</h2>
                            <p className="modal-subheading">Learn on your own, study coursework and  handouts at your convienent time</p>
                        <ModalBody>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup className="email-class">
                                    <Label>Username</Label>
                                    <Input
                                        type="email"
                                        value={email}
                                        className="email"
                                        onChange={handleEmailChange} />
                                </FormGroup>
                                <FormGroup classname="username-class">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        className="password"
                                        value={password}
                                        onChange={handlePasswordChange} />
                                </FormGroup>
                                <p className="pass_message">Between 6 to 12 characters</p>

                                <Button color="primary" block>
                                    Login
                                </Button>
                            </Form>
                        </ModalBody>
                    </Modal>
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