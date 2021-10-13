

import {useState} from 'react';
import { IonPage, IonMenuButton, IonButtons } from '@ionic/react';
import '../styles/fonts.css';
import '../styles/campaign.css';

// For bootstrap
import {Form, FloatingLabel, Button, Row, Col} from 'react-bootstrap';


export function Campaign(){
     const [value, setValue] = useState({
          'amount': '',
          'time': '',
          'purpose': '',
          'round': 'pre-seed',
          'roi': ''
     });
 
     const handleChange = (e) => {
          setValue({...value, [e.target.name]: e.target.value})
     };

    return(
        <IonPage>
           <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>

            <div className="content-area" style={{display: 'flex', flexDirection: 'column'}}>
               

               <Form className='form'>
               <h3 className="camp-head">Create a fundraising campaign</h3>
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
                         <Form.Select>
                              <option value="1">Pre-seed funding</option>
                              <option value="2">Seed funding</option>
                              <option value="3">Series A funding</option>
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
                         >
                         <Form.Select>
                              <option value="1">40%</option>
                              <option value="2">30%</option>
                              <option value="3">20%</option>
                              <option value="3">10%</option>
                         </Form.Select>
                         </FloatingLabel>
                    </Form.Group>

                   
                    <Button className='submit-btn' type="submit">
                    Create Campaign
                    </Button>
               </Form>

            </div>
        </IonPage>
    )
}