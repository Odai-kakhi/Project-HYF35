import React from 'react'
import store from '../store'
import '../logIn.css'
import bcrypt from 'bcryptjs'


export default class LogIn extends React.Component{
    

    componentDidMount() {
        this.logInSubmit('Guest@Guest.com','Guest')
    }

  logInSubmit(email,password){
      var sqlStatment = `http://192.168.2.11:8888/login/${email}`
      console.log(sqlStatment)
      var myRequest = new XMLHttpRequest();
      myRequest.open("POST", sqlStatment, true);
      myRequest.onload = function(){
        var myArr = JSON.parse(this.responseText); 
        console.log(myArr);
        console.log(myArr[0].email);
        var isPasswordCorect = bcrypt.compareSync(password,myArr[0].passwordHashFromBcrypt );
            if(isPasswordCorect){
                console.log('goooooood')

                var user = {
                    Fname: myArr[0].first_name,
                    Lname: myArr[0].last_name,
                    token: myArr[0].token,
                    userID:myArr[0].userID
                }
                store.setState({
                    user: user,
                    
            })    
            }else{
            console.log('fuuuuuck')
            }
  }

  myRequest.send();
  
console.log('email ===>' + email + 'password ===>' + password)
}


singUpSubmit( userFirstName,userLastName,singUpEmail,singUpPassword,singUpConfirmPassword){
    if(singUpPassword === singUpConfirmPassword){
     const saltRounds = 10;
     var salt = bcrypt.genSaltSync(saltRounds);
     var hash = bcrypt.hashSync(singUpPassword, salt);
     var hashed = [hash]
     var sqlStatment = `http://192.168.2.11:8888/signup/${singUpEmail}/${userFirstName}/${userLastName}/${hashed}`
     var myRequest = new XMLHttpRequest();
     myRequest.open("POST", sqlStatment, true); 
     myRequest.setRequestHeader("Content-type", "multipart/form-data");
     myRequest.send();
     store.setState({
         views : 'login'
     })   
    }else{
        alert('زبط الباسورد يا عرصة')
    }
}



    render(){
   
        
        var views = store.state.views

        if (views === 'login') {
            var userEmail = ''
            var userPassword = ''
            return (
                <div className = 'container-1'>
                <div className = 'container'>
                    <div className="login">
                        <h1>Login</h1>
                        <input type="email" name="email" placeholder="E-mail" required="required" onChange={(event)=>userEmail = event.target.value} />
                        <input type="password" name="password" placeholder="Password" required="required" onChange={(event)=>userPassword = event.target.value} />
                        <div className="submit" onClick={() => {
                                this.logInSubmit(userEmail, userPassword)
                                store.setState({
                                    views: 'welcome'
                                })
                              
                            }}>Let me in.</div>
                            <div className="submit" onClick={() => {
                                
                                store.setState({
                                    views: 'signup'
                                })
                              
                        }}>Sign UP</div>    
                    </div>
                </div>
            </div>
    
            )    
        } else if (views === 'signup') {
            var userFirstName = ''
            var userLastName = ''
            var singUpEmail = ''
            var singUpPassword = ''
            var singUpConfirmPassword = ''
            return (
                <div className = 'container-1'>
                <div className = 'container'>
                    <div className="singup">
                        <h1>Sign up</h1>               
                        <input type="text" name="firstname" placeholder="First name" required="required" onChange={(event) => {userFirstName = event.target.value}} />
                        <input type="text" name="lastname" placeholder="Last name" required="required" onChange={(event)=>userLastName = event.target.value} />
                        <input type="text" name="email" placeholder="E-mail" required="required" onChange={(event)=>singUpEmail = event.target.value} />
                        <input type="password" name="password" placeholder="Password" required="required" onChange={(event)=>singUpPassword = event.target.value} />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" required="required" onChange={(event)=>singUpConfirmPassword = event.target.value} />
                        <div type="submit" className="submit" id="singup-submit" onClick={() => {
                            this.singUpSubmit(userFirstName, userLastName, singUpEmail, singUpPassword, singUpConfirmPassword)
                            
                        }} >Sing me up.</div>
                    </div>
                </div>
            </div>
    
            )            
        }else if (views = 'welcome') {
            return (
                <div className = 'container-1'>
                    <h1>Welcom {store.state.user.Fname}</h1>
                    <div type="submit" className="submit" onClick={() => {
                        this.logInSubmit('Guest@Guest.com','Guest')
                        store.setState({
                                views: "login"
                            })
                            
                        }} >Logout.
                    </div>
            </div>
    
            )
        }




    }
}



 