import { MemberService } from './../member.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { createMask } from '@ngneat/input-mask';

@Component({
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {
  form: FormGroup;
  member$: Observable<any>;
  id: string;
  editMode = false;
  cpfInputMask = createMask('999.999.999-99');
  ordinations = Ordinations;

  cpfValidator = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2})$/;

  sectors$: Observable<[{
    id: number,
    name: string
  }]>

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.sectors$ = this.memberService.getSectors();

    if (id) {
      this.id = id;
      this.memberInitialize(id);
      this.member$.subscribe((member) => {
        this.initForm(member);
      });
      this.editMode = true;
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
        member ? member.cpf : null, [Validators.required, Validators.pattern(this.cpfValidator)],
      ],
      ordination: [member ? member.ordination : null, [Validators.required]],
      sector_id: [member ? member.sector_id : null, [Validators.required]],
    });
  }

  onEdit(): void {
    let memberToSave = { ...this.form.value };
    this.memberService
      .update(this.id, memberToSave)
      .subscribe(() => this.goBack());
  }

  onCreate(): void {
    let memberCreate = this.form.getRawValue();
    this.memberService.create(memberCreate).subscribe(() => this.goBack());
  }

  onDelete(): void {
    this.memberService.delete(this.id).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}

export const Ordinations = [
  { name: 'Cooperador' },
  { name: 'Auxiliar' },
  { name: 'Diácono' },
  { name: 'Presbítero' },
  { name: 'Evangelista' },
  { name: 'Pastor' },
]


