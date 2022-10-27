import { Component, Inject, Input, OnInit , Output, EventEmitter} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ELEMENT_DATA } from 'src/app/modules/data-form/data-form.types';

@Component({
  selector: 'add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['../form-data.component.scss'],
})
export class AddDataComponent implements OnInit {
  @Input() dataElement = ELEMENT_DATA;
  @Output() newItemEvent = new EventEmitter<any>();
  public provide = this.fb.group({
    name: [this.data.name],
    weight: [this.data.weight],
    symbol: [this.data.symbol],
  });
  faClose = faXmark;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddDataComponent>,
    public fb: FormBuilder
  ) {
    // console.log(data);
  }

  ngOnInit(): void {
    
  }

  public formAddData = new FormGroup({
    name: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    symbol: new FormControl('', Validators.required),
  });

  closeForm() {
    this.dialogRef.close();
  }

  addData() {
    const data ={
      name:this.formAddData.value.name || null,
      weight: this.formAddData.value.weight || null,
      symbol: this.formAddData.value.symbol || null
    }
    this.newItemEvent.emit(data);
    this.dialogRef.close();
  }
}
