import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styles: `
  .container-fluid{
    border:2px solid green;
    width:40%;
    box-shadow:2px 2px 2px yellow;
    padding:75px;
    height:350px;
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
  
  constructor(){

  }

  onSubmit(){
  alert(this.email);

  console.log('Form submitted');
  console.log('Email:',this.email, 'Password:',this.password);
  localStorage.setItem("Email:",this.email);
  window.location.href="/home";
}


}
