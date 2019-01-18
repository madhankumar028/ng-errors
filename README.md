# ng6-error

Angular error component which handles the field level error messages of your Reactive-forms without polluting much your template.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)


#### How to Install it
`npm i ng6-error`

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
`import {NgErrorModule} from 'ng6-error';`

##### Step: 2
*app.component.ts*
```{ts}

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
```
### Contributions
Feel free to submit an issue if you find any bug. You can also work on any feature by creating a pull request or spread the world.

Show your interest by clicking ⭐️.
