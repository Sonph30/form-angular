import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginloguot',
  templateUrl: './loginloguot.component.html',
  styleUrls: ['./loginloguot.component.scss']
})
export class LoginloguotComponent implements OnInit {

  maxDate: Date;

  constructor() {
    const currentYear = new Date();
    this.maxDate = new Date(currentYear);
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }

  ngOnInit(): void {
  }

}
