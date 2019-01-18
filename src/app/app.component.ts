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
      userName: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(8)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ]
    });
  }
}
