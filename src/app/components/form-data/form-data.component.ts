import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import { AddDataComponent } from './form-add-data/add-data.component';
import { EditDataComponent } from './form-edit-data/edit-data.component';
import { DeleteDataComponent } from './form-delete-data/delete-data.component';
import { ELEMENT_DATA, PeriodicElement } from 'src/app/modules/data-form/data-form.types';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss'],
})
export class FormDataComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'weight',
    'symbol',
    'addDelete',
  ];
  dataSource:PeriodicElement[] = ELEMENT_DATA;

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(public dialog: MatDialog) {}

  openAddData(elenent:any) {
    const ref = this.dialog.open(AddDataComponent, {
      data: elenent
    });
    ref.componentInstance.newItemEvent.subscribe(item => {
      this.dataSource = [...this.dataSource, item]
    })
  }

  openEditData(element: any) {
    const ref = this.dialog.open(EditDataComponent, {
      data: element
    });
    ref.componentInstance.newItemEvent.subscribe(item => {
      let newData = this.dataSource.find(e => e == element)
      newData!.name = item.name
      newData!.weight = item.weight
      newData!.symbol = item.symbol
    })
  }


  openDeleteData(element: any) {
    const ref = this.dialog.open(DeleteDataComponent , {
      data: element
    });
    ref.componentInstance.newItemEvent.subscribe(item => {
      
      this.dataSource =  this.dataSource.filter(data => data.name  !== item.name);
    })
  }
 
  ngOnInit(): void {}
}
