import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  constructor(private router : Router, private userService : UserService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$')])
  });

  
  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }
  
  
  RedirectToForgotPwd(){
    this.router.navigate(['/forgotpwd']);
  }

  RedirectToRegister(){
    this.router.navigate(['/register']);
  }

  onLogin(){
    console.log(this.loginForm)
    let data={
      email : this.loginForm.value.email,
      password : this.loginForm.value.password
    }
    this.userService.Login(data).subscribe((res:any)=>{
      console.log(res.message);
      console.log(res.data);
      localStorage.setItem("token",res.data);
    });
    
  }
}
