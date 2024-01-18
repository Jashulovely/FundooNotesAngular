import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstName : new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[A-Z][a-z]{1,}(\s[A-Z][a-z]{2,})*$')]),
    lastName : new FormControl('',[Validators.required, Validators.minLength(2), Validators.pattern('^[A-Z][a-z]{1,}$')]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$')]),
    confirmpassword : new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$')])
  });

  constructor(private router : Router, private userService : UserService) { }

  ngOnInit(): void {
  }
  
  

  get firstName(){
    return this.registerForm.get('firstName');
  }

  get lastName(){
    return this.registerForm.get('lastName');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get confirmpassword(){
    return this.registerForm.get('confirmpassword');
  }


  RedirectToLogin(){
    this.router.navigate(['/login']);
  }

  onRegister(){
    let data={
      firstName:this.registerForm.value.firstName,
      lastName:this.registerForm.value.lastName,
      email : this.registerForm.value.email,
      password : this.registerForm.value.password
    }
    this.userService.Register(data).subscribe((res:any)=>{
      console.log(res.message);
      console.log(res.data);
    })
  }

}
