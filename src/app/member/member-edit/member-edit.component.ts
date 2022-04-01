import { MemberService } from './../member.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {
  form: FormGroup;
  member$: Observable<any>;
  id: string;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.id = id;
      this.memberInitialize(id);
      this.member$.subscribe((member) => {
        this.initForm(member);
      });
    } else {
      this.initForm();
    }

  }

  memberInitialize(id: string): void {
    this.member$ = this.memberService.detail(id);
  }

  initForm(member?: any): void {
    this.form = this.formBuilder.group({
      name: [
        member ? member.name : '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      cpf: [
        member ? member.email : '',
        [Validators.required, Validators.email],
      ],
      ordination: [member ? member.ordination : '', [Validators.required]],
      sector_id: [member ? member.sector_id : '', [Validators.required]],
    });
  }

  onSubmit(): void {
    let memberToSave = { ...this.form.value };
    this.memberService
      .update(this.id, memberToSave)
      .subscribe(() => this.goBack());
  }

  onCreate(): void {
    let memberCreate = { ...this.form.value };
    this.memberService.create(memberCreate).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}


