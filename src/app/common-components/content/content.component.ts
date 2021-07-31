import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  patientslist = [];
  temppatientslist = [];
  constructor() { }

  ngOnInit(): void {
    this.temppatientslist.push(JSON.parse(sessionStorage.getItem('oldpatinetsdata')));
    console.log(this.temppatientslist)
    this.temppatientslist.forEach(element => {
      this.patientslist.push(this.temppatientslist[0].filter(f => f % 2 != 0))
    });
    console.log(this.patientslist)
  }

  deletepatients(id) {
    this.patientslist[0].splice(id,1);
    sessionStorage.setItem('oldpatinetsdata', JSON.stringify(this.patientslist));
    this.patientslist = [];
    this.patientslist.push(JSON.parse(sessionStorage.getItem('oldpatinetsdata')));
  }
}
