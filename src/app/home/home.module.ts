import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatExpansionModule} from "@angular/material/expansion";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  providers: [

    // SnackbarService
  ],
  declarations: [],
  imports: [
    // BrowserAnimationsModule,

    CommonModule,
    CdkAccordionModule,
    MatCardModule,
    MatSnackBarModule,
    MatExpansionModule,
    DragDropModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule

  ]
})
export class HomeModule {
}
