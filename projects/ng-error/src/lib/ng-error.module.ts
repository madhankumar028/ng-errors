import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgErrorComponent } from './ng-error.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [NgErrorComponent],
  exports: [NgErrorComponent]
})

export class NgErrorModule { }
