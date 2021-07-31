import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationsService } from 'src/app/services/validations.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupform: FormGroup;
  public dublicate_mail_err_res;
  public url = "http://127.0.0.1:8080";
  constructor(private fb: FormBuilder,
    private http:HttpClient, 
    private router : Router,
    private validations: ValidationsService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
  
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
  
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }
  
  Register(data){console.log(data)
    sessionStorage.setItem("registerdata", JSON.stringify(data))  
    this.validations.message(false, "Succesfully Registered");  
    this.router.navigateByUrl('/login')
  }
  
  createForm() {
    this.signupform = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      password: ['', Validators.compose([
        Validators.required,
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])],
      password_confirmation: ['', Validators.compose([
        Validators.required,
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])]
    });
  }
}
