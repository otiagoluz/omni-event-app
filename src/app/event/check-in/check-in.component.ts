import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';
import { switchMap, take, tap } from 'rxjs';
import { EventService } from '../event.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {
  form: FormGroup;
  cpfInputMask = createMask('999.999.999-99');

  showConfirmation = false;
  showError: boolean;

  member: {
    name: string,
    ordination: string
  }

  @ViewChild('input', { static: false })
   set input(element: ElementRef<HTMLInputElement>) {
     if(element) {
       element.nativeElement.focus()
     }
  }

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.showError = false;
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      cpf: ['', [Validators.required]]
    })
  }

  onSubmit(): void {
    let { cpf } = this.form.value;
    const data = { cpf };

    this.eventService.checkIn(data).pipe(
      take(1),
      tap((checkIn) => {
        this.showConfirmation = true;
        this.member = {
          name: checkIn.member.name,
          ordination: checkIn.member.ordination
        }
        setTimeout(() => this.resetForm(), 4000);
      }, err => {
        this.showError = true;
        setTimeout(() => this.ngOnInit(), 4000);
      })
    )
    .subscribe()
  }

  resetForm(): void {
    this.showConfirmation = false;
    this.form.reset();
  }
}

export interface checkIn {
  cpf: string
}


