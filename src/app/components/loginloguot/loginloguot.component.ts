import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {postDataForm} from '../../services/home/home.service'
import {API_DEFAULT} from '../../api/home/home'

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-loginloguot',
  templateUrl: './loginloguot.component.html',
  styleUrls: ['./loginloguot.component.scss']
})
export class LoginloguotComponent implements OnInit {
  
  foods: Food[] = [
    {value: 'nam-0', viewValue: 'Nam'},
    {value: 'nu-1', viewValue: 'Nữ'},
  ];

  maxDate: Date;
  minDate: Date;

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
  onSubmit(f: NgForm) {
    console.log(postDataForm.post(API_DEFAULT.apiForm,f.value))
  }

  ngOnInit(): void {
    console.log(postDataForm.test(HttpClient))
  }

}
