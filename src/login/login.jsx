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

function Signup(setScreen){
     const[loading, setloading] = useState(false);
     const[value, setvalue] = useState({
          name: '',
          email: '',
          password: '',
          check: false,
          check1: false,   
          check2: true,
     });
     const handleChange = (e)=>{
          e.preventDefault();
          setvalue((value) => ({
               ...value,
               [e.target.name]:e.target.type === 'checkbox' ? e.checked : e.target.value ,
          }));
     };
     const handlecheckbox = ({target}) => {
          if(target.name === 'check1'){
               setvalue({check1: target.checked, check2: !target.checked});
          }else{
               setvalue({check1: !target.checked, check2: target.checked});
          }
          
     };
     const[showPass, setShowPass] = useState(false);
     const  handlePassChange = () =>{
          setShowPass(!showPass);
     }
     const override = css`
     display: block;
     margin: auto;
     `;

     // Logic for external api call, use external functions, do not call them directly
     function submit(){
          setScreen('verify');
     }
     return (
          <IonPage className='page'>
               <Container className='form' fluid='md'>
                         <Row className='form_box shadow'>
                              <Col className='svgIcon' xs={12} md={6}><img src={ SignUp } className='svgIcon-image'  alt="Team pic svg" /></Col>
                              <Col className='form_items' xs={12} md={6}>
                                   <h2>Sign Up</h2>
                                   <Form >
                                        <Form.Group as={ Row } className='user_type' >
                                             <Col > 
                                             <Form.Check
                                                       name='check1'
                                                       type="radio"
                                                       id="custom-switch1"
                                                       label='Investor'
                                                       onChange={handlecheckbox }
                                                       checked={ value.check1 }
                                                  />
                                             </Col>
                                             <Col > <Form.Check
                                                       name='check2'
                                                       type="radio"
                                                       id="custom-switch2"
                                                       label='Startup'
                                                       onChange={ handlecheckbox }
                                                       checked={ value.check2 }
                                                  /></Col>
                                        </Form.Group>


                                        <Row>
                                             <Form.Group as={ Col } controlId="SignUsername">
                                                  <Form.Label  > {(value.check1)? 'Investor name' : 'Startup name'} <span className='required'>*</span></Form.Label>
                                                  <Form.Control name='username' onChange={ handleChange } value={ value.name } className='shadow-sm textbox' type="text" placeholder={(value.check1)? 'Enter investor\'s name' : 'Enter Business name'} required/>
                                             </Form.Group>
                                        </Row>


                                        <Row>
                                             <Form.Group as={ Col } controlId="signEmail">
                                                  <Form.Label>Email <span className='required'>*</span></Form.Label>
                                                  <Form.Control name='email'  onChange={handleChange } value={ value.email } className='shadow-sm textbox' type="email" placeholder="Enter email" required/>
                                             </Form.Group>
                                        </Row>


                                        <Row>
                                             <Form.Group as={ Col } controlId="signPassword">
                                                  <Form.Label  > Password <span className='required'>*</span></Form.Label>
                                                  <InputGroup>
                                                       <Form.Control name='password' onChange={() => setShowPass(!showPass) } value={ value.password } className='shadow-sm textbox'  type={(showPass) ? 'text' : 'password'} placeholder="Enter password" required/>
                                                       <InputGroup.Text className='pass-eye shadow-sm' onClick={handlePassChange}> {(showPass) ? <Eye color={'#21295C'} height={20} width={20}/> : <EyeSlash color={'#21295C'} height={20} width={20}/>} </InputGroup.Text>
                                                  </InputGroup>
                                                  <Form.Text id="passwordHelpBlock" muted>
                                                  Your password must be 8-20 characters long, contain letters and numbers, and
                                                  must not contain spaces, special characters, or emoji.
                                                  </Form.Text>

                                             </Form.Group>
                                        </Row>

                                        
                                        <Form.Group as={ Row }>
                                             <Col className='submit'>
                                                  <Button type="submit" onClick={() => submit()}> {(loading) ? <SyncLoader color={'#21295C'} loading={loading} css={override} size={7} margin={5} speedMultiplier={0.8} /> : 'Sign Up'}</Button>
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={ Row }>
                                             <Col className='alt-login'>
                                                  Already have an account? <span className='forgot' onClick={ () => setScreen('login') }>Login</span>
                                             </Col>
                                        </Form.Group>
                                   </Form>
                              </Col>
                         </Row>
                    </Container>
          </IonPage>
     )
}

function Login(setScreen, setVal){
     const[loading, setloading] = useState(false);
     
     const[value, setvalue] = useState({
          email: '',
          password: '',
          check: '',   
     })
     const handleChange = (e)=>{
          e.preventDefault();
          setvalue((value) => ({
               ...value,
               [e.target.name]:e.target.type === 'checkbox' ? e.checked : e.target.value ,
          }));
     };

     const[showPass, setShowPass] = useState(false);
     const  handlePassChange = () =>{
          setShowPass(!showPass);
     }
     const override = css`
          display: block;
          margin: auto;
          `;

     // Logic for external api call, use external functions, do not call them directly
     const submit = (e) => {
          setScreen('sForm');
          setVal(value);
     }
     return (
          <IonPage  className='page'>
               <Container className='form '>
                         <Row className='form_box shadow'>
                              <Col className='svgIcon' xs={12} md={6}><img src={LoginImg} className='svgIcon-image'  alt="Team pic svg" /></Col>
                              <Col className='form_items' xs={12} md={6}>
                                   <div className='form-head'>Login</div>
                                   <Form autoComplete='on'>
                                        <Row>
                                             <Form.Group as={ Col } controlId="loginEmail">
                                                  <Form.Label>Email <span className='required'>*</span></Form.Label>
                                                  <Form.Control name='email' autoComplete="email" onChange={handleChange } value={value.email } className='shadow-sm textbox' type="email" placeholder="Enter email" required/>
                                             </Form.Group>
                                        </Row>

                                        <Row>
                                             <Form.Group as={ Col } controlId="loginPassword">
                                                  <Form.Label  > Password <span className='required'>*</span> </Form.Label>
                                                  <InputGroup>
                                                       <Form.Control name='password' autoComplete="current-password" onChange={handleChange } value={value.password } className='shadow-sm textbox' placeholder="Enter password" required type={(showPass) ? 'text' : 'password'}/>
                                                       <InputGroup.Text className='pass-eye shadow-sm' onClick={handlePassChange}> {(showPass) ? <Eye color={'#21295C'} height={20} width={20}/> : <EyeSlash color={'#21295C'} height={20} width={20}/>} </InputGroup.Text>
                                                  </InputGroup>
                                             </Form.Group>
                                        </Row>

                                        <Form.Group as={ Row } className={'remember-forgot'}>
                                             <Col xs={6}>
                                                  <Form.Check name='check' onChange={handleChange } value={value.check } label="Remember me" checked={value.check } />
                                             </Col>
                                             <Col xs={6}>
                                             <Form.Label className='forgot'>Forgot Password?</Form.Label>
                                             </Col>
                                        </Form.Group>



                                        <Form.Group as={ Row } >
                                             <Col className='submit'>
                                                  <Button type="submit" onClick={() => submit()}> {(loading) ? <SyncLoader color={'#21295C'} loading={loading} css={override} size={7} margin={5} speedMultiplier={0.8} /> : 'Login'} </Button>
                                             </Col>
                                        </Form.Group>
                                        
                                        <Form.Group as={ Row }>
                                             <Col>
                                                  Do not have an account? <span className='forgot' onClick={() => setScreen('signup') }>Sign Up</span>
                                             </Col>
                                        </Form.Group>
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
     // forgot,
     // sForm,
     // iForm

     const [val, setVal] = useState([]);

     function view(){
          switch (screen) {
               default: return <Container className="box_design shadow-sm"><Spinner className="load" animation='border' color='#21295C' /></Container>;
               case 'login': return Login((s) => setScreen(s), (val) => setVal(val));
               case 'signup': return Signup((s) => setScreen(s));
               case 'verify': return <VerifyEmail email={'val.email'} setScreen={(s) => setScreen(s)} close={() => setScreen('signup')}/>;
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





