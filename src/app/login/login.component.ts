import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styles: `
  .container-fluid{
    border:2px solid green;
    width:40%;
    box-shadow:2px 2px 2px yellow;
    padding:75px;
    height:400px;
    border-radius:8px 8px 8px 8px ;
 }
  
  .container-fluid:hover{
box-shadow:2px 2px 2px green;
border:2px solid yellow;
  }
  
  .register{
    text-decoration:none;
    color:green;
  }
  `
})
export class LoginComponent {

  email!:string;
  password!:string;
  
  constructor(private toastr:ToastrService){
console.log('Login Component Called');
  }

  onSubmit(){
  console.log('Form submitted');
  console.log('Email:',this.email, 'Password:'+ this.password);
  
  //if admin123@gmail.com, pass123, valid login
  if(this.email=="admin123@gmail.com" && this.password=="password123"){
 alert("Successfully Loggedin");
 localStorage.setItem("Logged-In-User", "true");
 localStorage.setItem("Enmail" , this.email);
 //redirection
 window.location.href="/restaurants"
  }
 else{
alert("invalid login credentials");
 }
//   const usersStr=localStorage.getItem('Users');

//      let users=[];
//      if(usersStr){
//        users=JSON.parse(usersStr);
//      }else{
//        users=[];
//     }

//     const userExists=users.find((obj:any)=>obj.email==this.email&& obj.password==this.password);

//     if(userExists!=null){
//       alert("Loggedin Successfully");
//       this.toastr.success("Loggedin successfully");
// localStorage.setItem("Logged-In-User", "true");
// localStorage.setItem("EMAIL", this.email);
// }else{
//     alert("Invalid login credentials");
//    //this.toastr.warning("Invalid Login Credentials");
    
//   }

}

}

