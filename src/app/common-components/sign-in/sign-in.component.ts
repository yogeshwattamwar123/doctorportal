import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
declare var $: any;
import { AuthService } from 'src/app/services/auth.service';
import { ValidationsService } from 'src/app/services/validations.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public email:string = "";
  public password:string = "";
  public result:string = "";
  public url = "http://127.0.0.1:8080";

  signinform: FormGroup;
  constructor(private fb: FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private http:HttpClient,
    private authService: AuthService,
    private validations: ValidationsService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.signinform = this.fb.group({
      password: ['', Validators.compose([
        Validators.required,
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])]
    });
  }

  Loginform(data){
    var registerdata = JSON.parse(sessionStorage.getItem('registerdata'))
    console.log(registerdata)
    var registeredemail = registerdata['email']
    var registeredpassword = registerdata['password']
    if(registeredemail === data['email'] && registeredpassword === data['password']) {

      this.authService.setAccessToken('dfjgbf565jdfgfd46');
      this.router.navigate(["/dashboard"]);     
    }
    else if (registeredemail !== data['email']) {
      this.validations.message(true,"Username does not exist.");
    }
    else{
      this.validations.message(true,'Invalid Login Credentials!!');
    }
  }
}
