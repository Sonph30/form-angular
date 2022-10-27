import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginloguotComponent } from './components/loginloguot/loginloguot.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LauoutComponent } from './components/lauout/lauout.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormDataComponent } from './components/form-data/form-data.component';
import { AddDataComponent } from './components/form-data/form-add-data/add-data.component';
import { EditDataComponent } from './components/form-data/form-edit-data/edit-data.component';
import { DeleteDataComponent } from './components/form-data/form-delete-data/delete-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginloguotComponent,
    HomeComponent,
    HeaderComponent,
    LauoutComponent,
    TodoComponent,
    FormDataComponent,
    AddDataComponent,
    EditDataComponent,
    DeleteDataComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-nz' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
