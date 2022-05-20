import { MemberService } from './../member.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  members$: Observable<any[]>;
  sectors$: Observable<any[]>;

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
    this.members$ = this.memberService.list();
    this.sectors$ = this.memberService.getSectors();
  }

  sortMembers(members: any[]): any[] {
    return members.sort((a, b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
  }





}
