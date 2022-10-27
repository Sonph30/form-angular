import { Component, Inject, Output, EventEmitter} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faClose } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'Delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['../form-data.component.scss'],
})
export class DeleteDataComponent {
  @Output() newItemEvent = new EventEmitter<any>();
  faClose = faClose
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DeleteDataComponent>) {
  }

  closeForm() {
    this.dialogRef.close();
  }

  comfirmDelete() {
    this.newItemEvent.emit(this.data);
    this.dialogRef.close();
  }
}
