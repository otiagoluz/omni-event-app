import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { checkIn } from "./check-in/check-in.component";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseURL = 'http://localhost:7500'

  constructor(private http: HttpClient) {}

  checkIn(cpf: checkIn): Observable<checkInResponse> {
    return this.http.post<checkInResponse>(this.baseURL + '/check-in', cpf);
  }

}

export interface checkInResponse {
  checkIn: {
    member_cpf: string
    date: string
  },
  member: {
    cpf: string
    name: string
    ordination: string
    sector_id: number,
  }
}
