import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

/**
 * ngError component
 * 
 * Util library component which handles the field
 * level error messages inside the angular reactive forms
 * 
 * @author: Madhankumar J<madhankumar028@gmail.com>
 */

@Component({
	selector: 'ng-error'
})

export class NgErrorComponent {
	
	ngErrorMsgList: any = [];

	@Input() controlName: AbstractControl | AbstractControlDirective

	ngErrorHandler(type, params) {
		let ngErrorList = {
			required	: (params) 	=> `This field is required`,
			maxlength	: (params) 	=> `Maximum ${params.requiredLength} characters are allowed`,
			minlength	: (params) 	=> `Minimum ${params.requiredLength} characters are required`,
			pattern	  : (params) 	=> `Invalid format`,
			min		    : (params) 	=> `Minimun amount should be ₹ ${params.min}`,
			max		    : (params) 	=> `Maximum amount should be ₹ ${params.max}`,
			whitespace: (params)  => `White spaces are not allowed`
		}

		return ngErrorList[type](params);
	}

	listNgErrors() {
		if (this.controlName.errors) {
			this.ngErrorMsgList = [];
			Object.keys(this.controlName.errors).map( error => {
				this.controlName.touched || this.controlName.dirty
					? this.ngErrorMsgList.push(this.ngErrorHandler(error, this.controlName.errors[error]))
					: '';
			});
			return this.ngErrorMsgList;
		}
		else {
			return [];
		}
	}
}
