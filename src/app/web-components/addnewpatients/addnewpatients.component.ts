import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { AuthService } from 'src/app/services/auth.service';
import { ValidationsService } from 'src/app/services/validations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewpatients',
  templateUrl: './addnewpatients.component.html',
  styleUrls: ['./addnewpatients.component.css']
})
export class AddnewpatientsComponent implements OnInit {
  addcedoveninfoform: FormGroup;
  userid;
  newpatients = [];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router:Router,
    public authService: AuthService,
    private validations: ValidationsService,
    ) {
    this.createForm();
  }



  ngOnInit(): void {
    this.userid = this.authService.getAccessToken();
  }

  createForm() {
    this.addcedoveninfoform = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      preferredname: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]],
      language: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
  }

  doCedovenInfoSubmit() {
    if(this.addcedoveninfoform.invalid){
      return
    }

    var oldpatientsdata = JSON.parse(sessionStorage.getItem('oldpatinetsdata'));
    // if(oldpatientsdata) {
    //   sessionStorage.removeItem('oldpatinetsdata')
    //   this.newpatients.push(oldpatientsdata)
    // }
    this.newpatients.push(oldpatientsdata)
    this.newpatients.push(this.addcedoveninfoform.value)
    sessionStorage.setItem('oldpatinetsdata', JSON.stringify(this.newpatients));
    this.router.navigate(["/dashboard"]);     

  }

}
