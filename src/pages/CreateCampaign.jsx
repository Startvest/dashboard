import {useState} from 'react';
import { IonPage, IonMenuButton, IonButtons, IonGrid, IonRow, IonCol  } from '@ionic/react';
import { Card, CardContent } from '../components/card'
import '../styles/fonts.css';
import '../styles/campaign.css';

// For bootstrap
import {Form, FloatingLabel, Button, ProgressBar} from 'react-bootstrap';


export function Campaign(){
     const [value, setValue] = useState({
          'amount': '',
          'time': '',
          'purpose': '',
          'round': '',
          'roi': ''
     });

     const [view, setView] = useState('default');
 
     const [newRound, setnewRound] = useState(false);
     const handleChange = (e) => {
          setValue({...value, [e.target.name]: e.target.value})
     };

    return(
        <IonPage>
           <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>

            <div className="content-area" style={{display: 'flex', flexDirection: 'column'}}>
               
               <IonGrid className="grid">
                    <IonRow>
                         {(newRound) ? 
                          <IonCol size-sm="12" size-md="5">
                          <Card color="#ffffff" width="100%">
                                <CardContent align='left' >
                                    <div>
                                        <p className='campaign-head'>Current Round</p>
                                        <h3 className='campaign-body'><b>{localStorage.getItem("round")}</b> investment of N{localStorage.getItem("amount")} </h3>        
                                        <h3 className='campaign-body'> Campaign will be on for {localStorage.getItem("time")} days</h3>   
                                        <ProgressBar now={Number(localStorage.getItem("percetage")) || 0} className='progressBar' variant={'custom'}/>                     
                                    </div>
                                </CardContent>
                            </Card>
                     </IonCol>:null}

                         <IonCol size-sm="12" size-md="6">
                              <Card color="#ffffff" width="100%">
                                    <CardContent  >
                                        <div>
                                            <p className='campaign-head'>Pre-seed round closed</p>
                                            <h3 className='campaign-body'>Pre-seed investment of N100,000 from 50 investors</h3>           
                                            <ProgressBar now={100} className='progressBar' variant={'custom'}/>                     
                                        </div>
                                    </CardContent>
                                </Card>
                         </IonCol>

                    </IonRow>
               </IonGrid>


               <Form className='form'>
               {(view === 'default') ? 
               <span>
               <h3 className="camp-head">Create a new fundraising campaign</h3>
                    <Form.Group className="mb-3">
                         <FloatingLabel
                         label="Target amount in Naira"
                         className="mb-3"
                         >
                         <Form.Control name='amount' value={value.amount} onChange={handleChange} type="number" placeholder="Amount in Naira" />
                         </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3">
                         <FloatingLabel
                         label="Estimated time of ROI"
                         className="mb-3"
                         >
                         <Form.Control name='time' value={value.time} onChange={handleChange} type="number" placeholder="ROI time" />
                         </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3">
                         <FloatingLabel
                         label="Purpose of Campaign"
                         className="mb-3"
                         >
                         <Form.Control
                              as="textarea"
                              name='purpose' 
                              value={value.purpose} 
                              onChange={handleChange}
                              placeholder="The purpose of the campaign"
                              style={{ height: '100px' }}
                         />
                         </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3">
                         <FloatingLabel
                         label="Round"
                         className="mb-3"
                         
                         >
                         <Form.Select 
                         name='round' 
                         value={value.round} 
                         onChange={handleChange}>
                              <option value="Pre-seed">Pre-seed funding</option>
                              <option value="Seed">Seed funding</option>
                              <option value="Series-a">Series A funding</option>
                         </Form.Select>
                         </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <FloatingLabel
                         label="Investment type"
                         className="mb-3"
                         >
                          <Form.Control readOnly defaultValue="Equity Based Investment" />
                         </FloatingLabel>
                         <Form.Text className="text-muted">
                              This investment type ties investments with the valuation of your company,
                              <br/> 
                              more options will be added in the future
                         </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                         <FloatingLabel
                         label="Percentage stake to Investors"
                         className="mb-3"
                         name='roi' 
                         value={value.roi} 
                         onChange={handleChange}
                         >
                         <Form.Select>
                              <option value="40">40%</option>
                              <option value="30">30%</option>
                              <option value="20">20%</option>
                              <option value="10">10%</option>
                         </Form.Select>
                         </FloatingLabel>
                    </Form.Group>

                   
                    <Button className='submit-btn' onClick={(e) => {
                         e.preventDefault();
                         setView('created');
                         setnewRound(true);
                         localStorage.setItem("round", value.round);
                         localStorage.setItem("amount", Number(value.amount).toLocaleString());
                         localStorage.setItem("time", value.time);
                         localStorage.setItem("percentage", 0);
                         setTimeout(function(){ setView('default'); }, 2000);
                    }}>
                    Create Campaign
                    </Button>
                    </span>
                    : 
                         <h3 className='good'>Successfully created a round!</h3>
                    }
               </Form>

            </div>
        </IonPage>
    )
}