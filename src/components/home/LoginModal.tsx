import { useState,  } from "react";
import {Form, FormGroup, Label, Button, Input, Modal, ModalHeader, ModalBody} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch} from 'react-redux';
import { useNavigate } from "react-router";
import NavBar from '../NavBar/navbar';
import {authenticateUser} from '../../redux/features/userSlice'
import {isAuthenticated} from '../../redux/services/authentionservice'



const LoginModal = (toggle:any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword]  = useState("")
    const [error, setError] = useState("")
    const [modal, setModal] = useState(false);


    toggle = () => setModal(!modal);


    const dispatch = useDispatch();           
    const navigate = useNavigate()

    if(isAuthenticated()){
        navigate('/faculties')
    }

    const handleSubmit = (values: any) => {    
        
        //dispatch
        dispatch(authenticateUser(values))
    
    }
    const handleEmailChange = (e: any) => setEmail(e.target.value)
    const handlePasswordChange = (e: any) => setPassword(e.target.value)

    return(
        <div className="modal-container">
            {/*Modal content */}
            <Modal 
                    isOpen={modal}
                    toggle ={toggle}                    
                    >
                        <ModalHeader>Welcome Back</ModalHeader>
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
           
    )
}

export default LoginModal;