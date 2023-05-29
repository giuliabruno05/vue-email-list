const { createApp } = Vue ;

createApp({
    data() {
        return{
            emails : [],
            
        }
    },
    
    mounted() {
        axios 
        .get('https://flynn.boolean.careers/exercises/api/random/mail')

        .then(
            risposta => {
                // console.log(risposta.data.response);
                this.emails.push(risposta.data.response);
                
            });
        axios 
        .get('https://flynn.boolean.careers/exercises/api/random/mail')

        .then(
            risposta => {
                // console.log(risposta.data.response);
                this.emails.push(risposta.data.response);
                
            });
        axios 
        .get('https://flynn.boolean.careers/exercises/api/random/mail')

        .then(
            risposta => {
                // console.log(risposta.data.response);
                this.emails.push(risposta.data.response);
                
            });
        axios 
        .get('https://flynn.boolean.careers/exercises/api/random/mail')

        .then(
            risposta => {
                // console.log(risposta.data.response);
                this.emails.push(risposta.data.response);
                
            });
        axios 
        .get('https://flynn.boolean.careers/exercises/api/random/mail')

        .then(
            risposta => {
                // console.log(risposta.data.response);
                this.emails.push(risposta.data.response);
                
            });
        axios 
        .get('https://flynn.boolean.careers/exercises/api/random/mail')

        .then(
            risposta => {
                // console.log(risposta.data.response);
                this.emails.push(risposta.data.response);
                
            });
        axios 
        .get('https://flynn.boolean.careers/exercises/api/random/mail')

        .then(
            risposta => {
                // console.log(risposta.data.response);
                this.emails.push(risposta.data.response);
                
            });
        axios 
        .get('https://flynn.boolean.careers/exercises/api/random/mail')

        .then(
            risposta => {
                // console.log(risposta.data.response);
                this.emails.push(risposta.data.response);
                
            });
        axios 
        .get('https://flynn.boolean.careers/exercises/api/random/mail')

        .then(
            risposta => {
                // console.log(risposta.data.response);
                this.emails.push(risposta.data.response);
                
            });
        axios 
        .get('https://flynn.boolean.careers/exercises/api/random/mail')

        .then(
            risposta => {
                // console.log(risposta.data.response);
                this.emails.push(risposta.data.response);
                
            });
        
    }
}) .mount("#app")
