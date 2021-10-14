// This is where the logic of the payment api willl be written

// 'Accept': 'application/json',
//           'Content-Type': 'application/json',
//             'Sandbox-Key': 'key'
//           'Authorization': 'Bearer ' + this.state.clientToken

const api = {
     baseUrl: 'https://fsi.ng',
     apiSecret: 'vb_ls_bfac75fe54a952841971b6918d06aeb2659523dc92d6',
     key: process.env.REACT_APP_SANDBOX_KEY,

     getBaseUrl(){
          console.log(this.baseUrl);
          return this.baseUrl
     },
     createAccount(data){
          // data:{
               // "id": "343",
               // "name": "Barbara Bergnaum",
               // "email": "jones_adelaide@mail.com",
               // "number": "08012345678",
          // }

          const body ={           
               "Email": "usert@dummydata.com",
               "Salutation": "MRS.",
               "Gender": "F",
               "Address" : "Afagha Nsit",
               "MaritalStatus": "MRIED",
               "APPID" : "Dukia Gold",
              "BVN" : "22223345665"
          }
          fetch(`${this.baseUrl}/api/heritagebank/accounts/AccountOpening/WithBVN`, {
               method: "POST",
               body: JSON.stringify(body),
               headers: {
                    "Content-type": "application/json",
                    // "api-secret": this.apiSecret,
                    "Sandbox-key": this.key
               }
             })
             .then(response => response.json()) 
             .then(res => {
                  if(res.Message == 'SUCCESS'){
                    console.log(res);
                    localStorage.setItem("acctNum", res.AccountNumber);
                    localStorage.setItem("id", res.CustomerID);
                  }else{
                       console.log(res);
                  }
             })
             .catch(err => console.log(err));
             
     },
     sendMoney(id, data){
          // data:{
          //      "id": "343",
          //      "name": "Barbara Bergnaum",
          //      "email": "jones_adelaide@mail.com",
          //      "number": "08012345678",
          //        "acct":{
          //                "num": 89909099,
          //                "code": 443,
          //                "amount": 10000,
          //                "narration": "Invested in a startup",
          //                "debit": 89899889,
          //                "credit": 32323232,
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
                    "Sandbox-key": this.key
               }
             })
             .then(response => response.json()) 
             .then(res => {
                  if(res.responseMessage == 'Approved'){
                    console.log(res);
                  }else{
                    console.log(res);
                  }
             })
             .catch(err => console.log(err));
     },
     verifyLinkBVN(bvn, acctNum){
          const body={
               "BVN": "22142457889",
	          "AccountNumber" : "5900406170"
          }
          fetch(`${this.baseUrl}/api/heritagebank/identity/ValidateAndLinkBVN`,{
               method: "POST",
               body: JSON.stringify(body),
               headers:{
                    "Authorization": this.key
               }
          })
          .then(data => data.json())
          .then(res => {
               if(res.responseCode == '0'){
                    return res;
               }else{
                    return false
               }
     }).catch(err => console.log(err));
     },
     


}

export default api;