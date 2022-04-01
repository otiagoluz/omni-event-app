import { MemberService } from './../member.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  members$: Observable<any[]>;

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
    this.members$ = this.memberService.list();
  }
}