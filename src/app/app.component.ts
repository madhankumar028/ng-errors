// import { NgErrorComponent } from './../../projects/ng-error/src/lib/ng-error.component';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'ng-error';

  demoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.constructDemoForm();
  }

  constructDemoForm() {
    this.demoForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
