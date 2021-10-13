// This is where the logic of the payment api willl be written

// 'Accept': 'application/json',
//           'Content-Type': 'application/json',
//             'Sandbox-Key': 'key'
//           'Authorization': 'Bearer ' + this.state.clientToken

const api = {
     baseUrl: 'https://fsi.ng/',
     apiSecret: 'vb_ls_bfac75fe54a952841971b6918d06aeb2659523dc92d6',
     key: process.env.REACT_APP_SANDBOX_KEY,

     getBaseUrl(){
          console.log(this.baseUrl);
          return this.baseUrl
     },
     createAccount(data){
          // data:{
          //      "id": "343",
          //      "name": "Barbara Bergnaum",
          //      "email": "jones_adelaide@mail.com",
          //      "number": "08012345678",
          // }

          const body ={           
               "customer_reference": `CUST${data.id}`,
               "name": data.name,
               "email": data.email,
               "mobile_number":data.number,
               "expires_on": "2022-11-01",
               "use_frequency": "100",
               "min_amount": 1000,
               "max_amount": 1000000,
               "callback_url": "",
               "destination_nuban": "",
               "meta_data": {
                    "somedatakey": "somedatavalue"
               }
          }
          fetch(`${this.baseUrl}/v2/api/woven/vnubans/create_customer`, {
               method: "POST",
               body: JSON.stringify(body),
               headers: {
                    "Content-type": "application/json",
                    "api-secret": this.apiSecret,
                    "sanbox-key": this.key
               }
             })
             .then(response => response.json()) 
             .then(res => {
                  if(res.status == 'success'){
                    return res.data;
                  }else{
                       return false;
                  }
             })
             .catch(err => console.log(err));
             
     },
     fundWallet(id, data){
          // data:{
          //      "id": "343",
          //      "name": "Barbara Bergnaum",
          //      "email": "jones_adelaide@mail.com",
          //      "number": "08012345678",
          //        "acct":{
                         // "num": 89909099,
                         // "code": 443,
                         // "amount": 10000,
                         // "narration": "Invested in a startup",
                         // "debit": 89899889,
                         // "credit": 32323232,
          // }
          // }

          const body ={           
               "Amount" : data.acct.amount, 
               "DebitAccount" : data.acct.debit,
               "CreditAccount" : data.acct.credit,
               "Narration" : data.acct.narration,
               "Fee" : 0,
               "ValueDate" : "2021-03-11",
               "TransactionReference" : "1234576TDTT",
               "Currency" : "NGN"
          }

          fetch(`${this.baseUrl}/api/heritagebank/transfers/FundsTransfer/Intra`, {
               method: "POST",
               body: JSON.stringify(body),
               headers: {
                    "Content-type": "application/json",
                    // "secret_key": this.apiSecret,
                    "Authorization": this.key
               }
             })
             .then(response => response.json()) 
             .then(res => {
                  if(res.responseMessage == 'Approved'){
                    return res;
                  }else{
                       return false;
                  }
             })
             .catch(err => console.log(err));
     },recallInvestment(){

     }




}

export default api;