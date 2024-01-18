import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';


@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.scss']
})
export class ForgotPwdComponent implements OnInit {

  forgotpwdForm = new FormGroup({
    EmailId : new FormControl('',[Validators.required,Validators.email])
  });
  constructor(private router : Router, private userService : UserService) { }

  ngOnInit(): void {
  }

  get EmailId(){
    return this.forgotpwdForm.get('EmailId');
  }

  RedirectToLogin(){
    this.router.navigate(['/login']);
  }

  onForgotpwd(){
    console.log(this.forgotpwdForm)
    let data={
      email : this.forgotpwdForm.value.EmailId
    }
    this.userService.ForgotPwd(data).subscribe((res:any)=>{
      console.log(res.message);
      console.log(res.data);
    })
  }

}
