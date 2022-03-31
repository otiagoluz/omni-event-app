import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {
  form: FormGroup;

  licenseInputMask = createMask('999.999.999-99');

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm(): void {
    this.form = this.formBuilder.group({
      cpf: ['', [Validators.required]]
    })
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

}


