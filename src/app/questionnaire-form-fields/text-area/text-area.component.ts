import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { InputFormFieldsBaseComponent } from '../input-form-fields-base';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextAreaComponent extends InputFormFieldsBaseComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder
  ) {
    super();
    this.setDefaultFieldValues();
    this.initializeForm();
  }

  ngOnInit() {
  }

  private initializeForm(): void {
    this.fieldSettingsForm = this.formBuilder.group({
      position: ['', Validators.required],
      title: ['', Validators.required],
      isRequired: [false]
    });
    this.fieldSettingsForm.markAllAsTouched();
  }

  private setDefaultFieldValues(): void {
    this.makingChanges = false;
  }

}
