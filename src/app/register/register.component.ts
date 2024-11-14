import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, MinLengthValidator, MaxLengthValidator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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
export class RegisterComponent implements OnInit  {

 regForm!:FormGroup;

  // name!:string;
  // email!:string;
  // password!:string;
  // mobileNumber!:number;
  

  constructor(private toastr:ToastrService, private fb:FormBuilder){
    console.log("Register Component Constructor Called");
  }
  
  ngOnInit(): void {

    // this.regForm=new FormGroup({
    //   name:new FormControl('', [Validators.required]),
    //   email:new FormControl('',[Validators.required, Validators.email]),
    //   mobileNumber:new FormControl('',[Validators.required, Validators.minLength(10)]),
    // password:new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(10)])
    // })

    this.regForm=this.fb.group({
      name:['', [Validators.required]],
      email:['',[Validators.required, Validators.email]],
      mobileNumber:['',[Validators.required, Validators.maxLength(10)]],
      password:['',[Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
    });

  }
get name(){
  return this.regForm.controls["name"];
}

get email(){
  return this.regForm.controls["email"];
}

get mobileNumber(){
  return this.regForm.controls["mobileNumber"];
}

get password(){
  return this.regForm.controls["password"];
}

  onSubmit(){
     console.log('Form registered');
     console.log("valid",this.regForm.valid);
     console.log("value",this.regForm.value);

     const userObj=this.regForm.value;
     console.log('UserObj:',userObj);

     const users=[];
     users.push(userObj);
     localStorage.setItem("USERS",JSON.stringify(users));
     
     if(this.regForm.valid){
      // alert("Registered Successfully");
       this.toastr.success("Registered Successfully!!");
       window.location.href='/login'
      }else{
        
        //alert('Please fill required details!');
      this.toastr.error('Please fill required details') ;
   }
     //  console.log('name:',this.name + 'email:',this.email + 'mobileNumber:',this.mobileNumber + 'password:',this.password);
     
     //const userObj={
      //  name:this.name,
      //  email:this.email,
      //  mobileNumber:this.mobileNumber,
      //  password:this.password
     //}

    }
  }