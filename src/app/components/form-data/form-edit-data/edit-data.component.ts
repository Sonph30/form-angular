import { Component, Inject, Output, EventEmitter} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['../form-data.component.scss'],
})
export class EditDataComponent {
  @Output() newItemEvent = new EventEmitter<any>();
  public editForm = this.fb.group({
    name: [this.data.name],
    weight: [this.data.weight],
    symbol: [this.data.symbol],
  });
  faClose = faXmark;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<EditDataComponent>
  ) {
    console.log(data);
  }

  updateData() {
    
    const data ={
      name:this.editForm.value.name,
      weight: this.editForm.value.weight,
      symbol: this.editForm.value.symbol
    }
    this.newItemEvent.emit(data);
  }
  
  closeForm() {
    this.dialogRef.close();
  }
}
