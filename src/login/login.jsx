import {React, useEffect, useState} from 'react';
import '../styles/login.css';
// import PropTypes from 'prop-types';
import { IonPage} from '@ionic/react';
import { Container, Row, Col, Form, Spinner, Button, InputGroup } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

//Import the verify email screen
import VerifyEmail from './verifyEmail';

// The startup and investors form
import StartForm from './startupForm';
import InvestorForm from './investorForm';

// Loading animation
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

// SVG Images used
// import TeamPic from '../images/team_3.svg';
import LoginImg from '../assets/images/login.svg';
import SignUp from '../assets/images/sign_in.svg';


// Import Notifications
import Notifyer from '../components/notification';

const signup = () => {
     return (
          <IonPage>
               Signup Screen
          </IonPage>
     )
}

function Login(){
     const[loading, setloading] = useState(false);
     const[value, setvalue] = useState({
          email: '',
          password: '',
          check: '',   
     })
     const[showPass, setShowPass] = useState(false);
     const handleChange = (e)=>{
          e.preventDefault();
          setvalue((values) => ({
               ...values,
               [e.target.name]:e.target.type === 'checkbox' ? e.checked : e.target.value ,
          }));
     };
     const override = css`
          display: block;
          margin: auto;
          `;
     return (
          <IonPage>
               <Container className='form '>
                         <Row className='form_box shadow-lg'>
                              <Col className='svgIcon' ><img src={ Login } className='svgIcon-image' height={300} width={300} alt="Team pic svg" /></Col>
                              <Col className='form_items'>
                                   <h2>Login</h2>
                                   <Form autoComplete='on'>
                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="loginEmail">
                                                  <Form.Label>Email </Form.Label>
                                                  <Form.Control name='email' autoComplete="email" onChange={handleChange } value={value.email } className='shadow-sm textbox' type="email" placeholder="Enter email" required/>
                                             </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="loginPassword">
                                                  <Form.Label  > Password </Form.Label>
                                                  <InputGroup>
                                                       <Form.Control name='password' autoComplete="current-password" onChange={handleChange } value={value.password } className='shadow-sm textbox' placeholder="Enter password" required type={(showPass) ? 'text' : 'password'}/>
                                                  </InputGroup>
                                             </Form.Group>
                                        </Form.Row>

                                        <Form.Group as={ Row } controlId="loginCheck">
                                             <Col>
                                                  <Form.Check name='check' onChange={handleChange } value={value.check } label="Remember me" checked={value.check } />
                                             </Col>
                                             <Form.Label className='forgot'>Forgot Password?</Form.Label>
                                        </Form.Group>



                                        <Form.Group as={ Row }>
                                             <Col className='submit'>
                                                  <Button type="submit"> {(loading) ? <SyncLoader color={'#21295C'} loading={loading} css={override} size={7} margin={5} speedMultiplier={0.8} /> : 'Login'} </Button>
                                             </Col>
                                        </Form.Group>
                                        {/* { this.altLogin(false) } */}
                                   </Form>
                              </Col>
                         </Row>
                    </Container>
          </IonPage>
     )
}

export default function Main(){
     useEffect(()=> {
          document.title = 'Get started at StartVest'
          window.scrollTo(0, 0);

          // Check if the user is logged in

     },[]);
     const [error, setError] = useState(false);

     const [screen, setScreen] = useState('login');
     // screen props are ;
     // login, 
     // signup, 
     // verify, 

     function view(){
          switch (screen) {
               default: return <Container className="box_design shadow-sm"><Spinner className="load" animation='border' color='#21295C' /></Container>;
               case 'login': return Login();
               case 'signup': return signup();
               case 'verify': return <VerifyEmail />;
               case 'sForm': return <StartForm />;
               case 'iForm': return <InvestorForm />; 
          }
     }
     return (
          <IonPage>
                {(error) ? <Notifyer message={this.state.errMessage} type={this.state.type} multiple={this.state.multiple} onDismissed={() => this.setState({error: false})} />:null}
               {view()}
          </IonPage>
     )
}





