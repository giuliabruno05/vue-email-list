const { createApp } = Vue ;

createApp({
    data() {
        return{
            emails : [],
            
        }
    },
    
    mounted() {
        for (let i = 0; i <= 9; i++) {
            axios 
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
    
            .then(
                risposta => {
                    this.emails.push(risposta.data.response);
                    
                });
        }
    }    
}) .mount("#app")      
        
  

