import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patients-details',
  templateUrl: './patients-details.component.html',
  styleUrls: ['./patients-details.component.css']
})
export class PatientsDetailsComponent implements OnInit {

  patientdetail = [];
  temppatientdetail = [];
  id;
  constructor(private router:ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.temppatientdetail.push(JSON.parse(sessionStorage.getItem('oldpatinetsdata')));
    this.patientdetail = this.temppatientdetail[0][this.id]
    console.log(this.id)
    console.log(this.temppatientdetail)
    console.log(this.patientdetail)
  }

}
