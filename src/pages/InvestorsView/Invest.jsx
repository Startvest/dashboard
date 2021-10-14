import {useState, useEffect} from 'react';
import { IonPage, IonMenuButton, IonButtons, IonGrid, IonRow, IonCol,IonIcon , IonModal, IonButton } from '@ionic/react';
import { wallet, statsChart} from "ionicons/icons"
import { Card, CardContent } from '../../components/card';
import '../../styles/fonts.css';
import '../../styles/invest.css';

// For bootstrap
import {Form, FloatingLabel, Button, ProgressBar} from 'react-bootstrap';

// Internal API
import API from '../../api/internal';

// External API
import APIEx from '../../api/external';

export function Invest(){
     const [value, setValue] = useState({
          'startup': '',
          'units': '',
          'time': '',
          'purpose': '',
          'round': '',
          'roi': ''
     });

     const handleChange = (e) => {
          setValue({...value, [e.target.name]: e.target.value})
     };

     useEffect(() => {
          API.getInvestor();
          APIEx.createAccount({
               "id": "1",
               "Email": "usert@dummydata.com",
               "Salutation": "MRS.",
               "Gender": "F",
               "Address" : "Afagha Nsit",
               "MaritalStatus": "MRIED",
               "APPID" : "Dukia Gold",
              "BVN" : "22223345665"
          })
     }, []);

     const [investor, setInvestor] = useState({
          'name': '',
          'email': '',
          'balance': '50000'
     })

     const [startup, setStartup] = useState({
          'name': '',
          'email': '',
          'unitPrice': '10000'
     })

     

     const [loading, setLoading] = useState(false);

     const [screen, setScreen] = useState('default');
 
     const verify = () =>{
          return(
                    <Card color="#ffffff" width="50%" >
                              <CardContent >
                                   <div>
                                        <p className='campaign-head'>Verify</p>
                                        <h3 className='campaign-body'>Are you sure you want to invest N{(Number(value.units) * Number(startup.unitPrice)).toLocaleString()} ?</h3>   

                                        <IonGrid>
                                             <IonRow>
                                                  <IonCol size-sm='6'><Button className='submit-btn' 
                                                  onClick={(e) => {
                                                       e.preventDefault();
                                                       APIEx.sendMoney(1,{
                                                            "id": "343",
                                                            "name": "Barbara Bergnaum",
                                                            "email": "jones_adelaide@mail.com",
                                                            "number": "08012345678",
                                                              "acct":{
                                                                      "num": 89909099,
                                                                      "code": 443,
                                                                      "amount": (Number(value.units) * Number(startup.unitPrice)).toLocaleString(),
                                                                      "narration": "Investing in a startup",
                                                                      "debit": localStorage.getItem("acctNum"),
                                                                      "credit": 32323232,
                                                       }
                                                       })
                                                  }}>
                                                  Proceed</Button></IonCol>
                                                  <IonCol size-sm='5' offset="1"><Button className='submit-btn' onClick={(e) => {e.preventDefault(); setScreen('default')}}>Cancel</Button></IonCol>
                                             </IonRow>
                                        </IonGrid>
                                                  
                                   </div>
                              </CardContent>
                    </Card>
          )
     }

    return(
        <IonPage>

          <IonButtons slot="start">
                <IonMenuButton />
          </IonButtons>

             {(loading) ? 
             <div className='loading'>Loading....</div>
             :
            <div className="content-area" style={{display: 'flex', flexDirection: 'column'}}>
               
               <IonGrid className="grid">
                    <IonRow>
                         <IonCol  size-sm="5">
                              <Card color="#ffffff" width="100%" >
                                             <CardContent  align='left'>
                                                  <div>
                                                       <p className='campaign-head'>Previous Investment</p>
                                                       <h3 className='campaign-body'>N10,000 into Example Startup</h3>           
                                                  </div>
                                             </CardContent>
                                </Card>
                         </IonCol>

                         <IonCol  size-xs="4" size-md="3" offset="3" className="ion-align-self-end">
                              <Card color="#21295C" width="100%">
                                    <CardContent  >
                                        <div>
                                            <p className='invest-head'>Wallet Balance</p>
                                            <h3 className='invest-body'><IonIcon color={'#f5f5f5'} icon={wallet} />  N{Number(investor.balance).toLocaleString()} </h3>           
                                        </div>
                                    </CardContent>
                                </Card>
                         </IonCol>

                    </IonRow>
                    </IonGrid>

                    {(screen === 'default') ? 
                    <Form className='invest-form'>
                    <h3 className="camp-head">Invest in a Startup</h3>
                    <Form.Group className="mb-3">
                         <FloatingLabel
                         label="Choose Startup"
                         className="mb-3"
                         name='startup' 
                         value={value.startup} 
                         onChange={handleChange}
                         >
                         <Form.Select>
                              <option value="Startup">Startup Example</option>
                         </Form.Select>
                         </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3">
                         <Form.Text>Funds Raised by startup</Form.Text>
                          <ProgressBar label={`${'N200,000'} raised`} now={20} className='progressBar' variant={'custom'}/>        

                          <Form.Text>
                           N200,000 raised out of N1,000,0000
                         </Form.Text>             
                    </Form.Group>

                    <Form.Group className="mb-3">
                         <FloatingLabel
                         label="Number of units"
                         className="mb-3"
                         >
                         <Form.Control name='units' value={value.units} onChange={handleChange} type="number" placeholder="Amount in Naira" />
                         </FloatingLabel>
                         <Form.Text>1 unit is selling for N{startup.unitPrice}</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                         <FloatingLabel
                         label="Funding Source"
                         className="mb-3"
                         name='roi' 
                         value={value.roi} 
                         onChange={handleChange}
                         >
                         <Form.Select>
                              <option value="wallet">Wallet - N{investor.balance}</option>
                         </Form.Select>
                         </FloatingLabel>
                    </Form.Group>

                    
                   
                    <Button className='submit-btn' onClick={(e) => {e.preventDefault(); setScreen('verify')}}>
                         Invest 
                    </Button>
                    </Form>
                    :verify()};
   
            </div>
            }
        </IonPage>
    )
}