import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatExpansionModule} from "@angular/material/expansion";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  providers:[
    HttpHeaders,
    HttpClient
  ],
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule,
    MatExpansionModule,
    DragDropModule
  ]
})
export class AdminModule { }
