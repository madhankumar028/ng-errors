import { Component, Input, OnInit } from '@angular/core';
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

export class NgErrorComponent implements OnInit {
	
	ngErrorMsgList: Array<string> = [];

	ngDefaultErrorList: Object;

	@Input() controlName: AbstractControl | AbstractControlDirective
	
	@Input() customErrorMessage: string;

	ngOnInit() {
		this.prepareDefaultNgValidatorList();
	}

	prepareDefaultNgValidatorList() {
		this.ngDefaultErrorList = {
			required	: (params) 	=> `This field is required`,
			maxlength	: (params) 	=> `Maximum ${params.requiredLength} characters are allowed`,
			minlength	: (params) 	=> `Minimum ${params.requiredLength} characters are required`,
			pattern	    : (params) 	=> `Invalid format`,
			min		    : (params) 	=> `Minimun amount should be ₹ ${params.min}`,
			max		    : (params) 	=> `Maximum amount should be ₹ ${params.max}`,
			email  		: (params)  => `Enter a valid email-id`
		};
	}

	/**
	 * Handler to throw the corresponding error message
	 * @param type {String}
	 * @param params {Object}
	 */
	ngErrorHandler(type, params): string {
		return this.ngDefaultErrorList[type](params);
	}

	isDefaultValidator(validator: string): boolean {
		return this.ngDefaultErrorList.hasOwnProperty(validator);
	}

	/**
	 * Handles the AbstractControl errors and creates a list of ng-error
	 */
	listNgErrors() {
		
		this.ngErrorMsgList = [];
		
		if (this.controlName.errors) {
			Object.keys(this.controlName.errors).map( error => {
				this.controlName.touched || this.controlName.dirty
					? this.ngErrorMsgList.push(
						this.isDefaultValidator(error)
						? this.ngErrorHandler(error, this.controlName.errors[error])
						: this.customErrorMessage
					) : '';
			});
		}
		return this.ngErrorMsgList;
	}
}
