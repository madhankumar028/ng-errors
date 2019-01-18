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
	selector: 'ng-error',
	templateUrl: 'ng-error.component.html',
	styleUrls: ['ng-error.component.scss']
})

export class NgErrorComponent {
	
	ngErrorMsgList: Array<String> = [];

	@Input() controlName: AbstractControl | AbstractControlDirective

	/**
	 * Handler to throw the corresponding error message
	 * @param type {String}
	 * @param params {Object}
	 */
	ngErrorHandler(type, params): String {
		let ngErrorList = {
			required	: (params) 	=> `This field is required`,
			maxlength	: (params) 	=> `Maximum ${params.requiredLength} characters are allowed`,
			minlength	: (params) 	=> `Minimum ${params.requiredLength} characters are required`,
			pattern	    : (params) 	=> `Invalid format`,
			min		    : (params) 	=> `Minimun amount should be ₹ ${params.min}`,
			max		    : (params) 	=> `Maximum amount should be ₹ ${params.max}`,
			email  		: (params)  => `Enter a valid email-id`
		}
		return ngErrorList[type](params);
	}

	/**
	 * Handles the AbstractControl errors and creates a list of ng-error
	 */
	listNgErrors() {
		if (this.controlName.errors) {
			this.ngErrorMsgList = [];
			Object.keys(this.controlName.errors).map( error => {
				this.controlName.touched || this.controlName.dirty
					? this.ngErrorMsgList.push(this.ngErrorHandler(error, this.controlName.errors[error]))
					: '';
			});
			return this.ngErrorMsgList;
		} else {
			return [];
		}
	}
}
