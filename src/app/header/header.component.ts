import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styles: `
  .navbar {
  background-color: yellow; 
  height: 80px;
border:2px solid yellow;
box-shadow:3px 3px 3px 3px green;
border-radious:25px;
margin-right:5px;}

  .navbar-brand{
    font-family: Kablammo, system-ui;
  }
  `
})
export class HeaderComponent implements OnInit{
  
  isLoggedIn=false;

  constructor(private toastr:ToastrService){
    console.log('Header Component Called');
  }
  ngOnInit(): void {
    //fetch from localstorage whether user is loggedin
    this.isLoggedIn=localStorage.getItem("Logged-In-User")=="true";
  }

logout(){
  localStorage.clear();
  alert('logged out');
  this.toastr.warning('Logged out');
  window.location.href="/home"
}
}
