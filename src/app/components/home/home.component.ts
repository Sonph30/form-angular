import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {postDataForm} from '../../services/home/home.service'
import {API_DEFAULT} from '../../api/home/home'

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  maxDate: Date;

  foods: Food[] = [
    { value: 'nam', viewValue: 'Nam' },
    { value: 'nu', viewValue: 'Nữ' },
  ];
  constructor() {
    const currentYear = new Date();
    this.maxDate = new Date(currentYear);
  }

  public userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    gioiTinh: new FormControl('', Validators.required),
    NgTotNghiep: new FormControl(['',''], Validators.required),
  });

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(postDataForm.post(API_DEFAULT.apiForm,this.userForm.value))
  }
  public changeGender(e:any) {
    this.userForm.value.gioiTinh = e.value
    console.log(this.userForm.value)
  }
  public dateRangeChange(start:any,end:any){
    this.userForm.value.NgTotNghiep![0] = start.value
    this.userForm.value.NgTotNghiep![1] = end.value
    console.log(this.userForm.value)
  }
}
