# ng-error

Angular error component which handles the field level error messages of your Reactive-forms without polluting much your template.

#### How to Install it
`npm i ng-error`

#### Handled-Validations
| Name | Error-Message |
| :--- | :----------:  |
| required | This field is required |
| maxlength| Maximum {{length}} characters are allowed |
| minlength | Minimum {{length}} characters are allowed |
| pattern | Invalid format |
| min | Minimun amount should be ₹ ${min} |
| max | Maximum amount should be ₹ ${max} |
| email | Enter a valid email-id |

#### Basic Usage
After installing follow the below steps to use the NgError component in your application.

##### Step: 1
`import {NgErrorModule} from 'ng-error';`

##### Step: 2
*app.component.ts*
```{ts}
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
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
```

##### Step: 3
*app.component.html*
```
<section class="form-section">
  <form [formGroup]="demoForm" novalidate>
    <div class="form-group">
      <label for="first_name">User Name<b>*</b></label>
      <input type="text" id="first_name" formControlName="userName" >
      <ng-error [controlName]="demoForm.controls.userName"></ng-error>
    </div>
    <div class="form-group">
      <label for="password">Password<b>*</b></label>
      <input type="email" id="password" formControlName="password" >
      <ng-error [controlName]="demoForm.controls.password"></ng-error>
    </div>
    <div>
      <button class="btn submit-btn" [disabled]="demoForm.invalid" type="submit">Submit</button>
      <button class="btn cancel-btn" type="reset">Reset</button>
    </div>
  </form>
</section>
```
### Contributions
Feel free to submit an issue if you find any bug. You can also work on any feature by creating a pull request or spread the world.

Show your interest by clicking ⭐️.
