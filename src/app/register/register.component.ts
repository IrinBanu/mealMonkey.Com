import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styles: `
  .container-fluid{
    border:2px solid green;
    width:650px;
    box-shadow:2px 2px 2px yellow;
    padding:75px;
    height:50%;
    border-radius:8px 8px 8px 8px ;
 }
  
  .container-fluid:hover{
box-shadow:2px 2px 2px green;
border:2px solid yellow;
  }
  `
})
export class RegisterComponent {

}
