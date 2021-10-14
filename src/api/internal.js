// This is where the logic of the backend

const api = {
     baseUrl: 'https://us-central1-startvest-staging.cloudfunctions.net/app',
     investorId: 'c26b7660-d718-44e8-b0cf-6ca924bb2987',
     startupId: '34532286-e5c8-4fcb-9873-43c5a014963f',

     getInvestor(){
          fetch(`${api.baseUrl}/v1.0/investors/${this.investorId}`)
          .then(data => data.json())
          .then(post => {
          console.log(post);  
     }).catch(err => console.log(err));
     },
     getStartup(){
          fetch(`${api.baseUrl}/v1.0/startups/${this.investorId}`)
          .then(data => data.json())
          .then(post => {
          console.log(post);  
     }).catch(err => console.log(err));
     }
     
}

export default api;