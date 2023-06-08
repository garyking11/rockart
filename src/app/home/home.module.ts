import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatExpansionModule} from "@angular/material/expansion";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  providers: [

    // SnackbarService
  ],
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatSnackBarModule,
    MatExpansionModule,
    DragDropModule
  ]
})
export class HomeModule {
}
