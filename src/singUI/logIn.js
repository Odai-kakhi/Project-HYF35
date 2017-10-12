import React from 'react'
import store from '../store'
import '../logIn.css'
import bcrypt from 'bcryptjs'


export default class LogIn extends React.Component{
    

  logInSubmit(email,password){
      var sqlStatment = `http://localhost:8888/login/${email}`
      console.log(sqlStatment)
      var myRequest = new XMLHttpRequest();
      myRequest.open("GET", sqlStatment, true);
      myRequest.onload = function(){
        var myArr = JSON.parse(this.responseText); 
        console.log(myArr);
        console.log(myArr[0].email);
        var isPasswordCorect = bcrypt.compareSync(password,myArr[0].passwordHashFromBcrypt );
            if(isPasswordCorect){
            console.log('goooooood')
            }else{
            console.log('fuuuuuck')
            }
  }

  myRequest.send();
  
console.log('email ===>' + email + 'password ===>' + password)
}


singUpSubmit( userFirstName,userLastName,singUpEmail,singUpPassword,singUpConfirmPassword){
           if(singUpPassword == singUpConfirmPassword){
            const saltRounds = 10;
            var salt = bcrypt.genSaltSync(saltRounds);
            var hash = bcrypt.hashSync(singUpPassword, salt);
            var hashed = [hash]
            var sqlStatment = `http://localhost:8888/signup/${singUpEmail}/${userFirstName}/${userLastName}/${hashed}`
            var myRequest = new XMLHttpRequest();
            myRequest.open("POST", sqlStatment, true); 
            myRequest.setRequestHeader("Content-type", "multipart/form-data");
            myRequest.send();

           }else{
               alert('زبط الباسورد يا عرصة')
           }
}


    render(){
        var userFirstName = ''
        var userLastName = ''
        var singUpEmail = ''
        var singUpPassword = ''
        var singUpConfirmPassword = ''   
        var userEmail = ''
        var userPassword = ''

        return(
            <div className = 'container'>
                <div className = 'welcome'></div>
                <div className = 'form'>
                    <div className="login">
                        <h1>Login</h1>
                        <input type="text" name="email" placeholder="E-mail" required="required" onChange={(event)=>userEmail = event.target.value} />
                        <input type="password" name="password" placeholder="Password" required="required" onChange={(event)=>userPassword = event.target.value} />
                        <div className="submit" onClick={()=>this.logInSubmit(userEmail,userPassword)}>Let me in.</div>
                    </div>
                    <div className="singup">
                        <h1>Sign up</h1>               
                        <input type="text" name="firstname" placeholder="First name" required="required" onChange={(event)=>userFirstName = event.target.value} />
                        <input type="text" name="lastname" placeholder="Last name" required="required" onChange={(event)=>userLastName = event.target.value} />
                        <input type="text" name="email" placeholder="E-mail" required="required" onChange={(event)=>singUpEmail = event.target.value} />
                        <input type="password" name="password" placeholder="Password" required="required" onChange={(event)=>singUpPassword = event.target.value} />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" required="required" onChange={(event)=>singUpConfirmPassword = event.target.value} />
                        <div type="submit" className="submit" id="singup-submit" onClick={()=>this.singUpSubmit(userFirstName,userLastName,singUpEmail,singUpPassword,singUpConfirmPassword)} >Sing me up.</div>
                    </div>
                    </div>               
            </div>
        )

    }
}



 