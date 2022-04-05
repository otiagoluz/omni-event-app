import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { checkIn } from "./check-in/check-in.component";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseURL = 'http://localhost:7500'
  // baseURL = 'https://omni-event.herokuapp.com'

  constructor(private http: HttpClient) {}

  checkIn(cpf: checkIn): Observable<checkInResponse> {
    return this.http.post<checkInResponse>(this.baseURL + '/check-in', cpf);
  }

  list(): Observable<EventResponse[]> {
    return this.http.get<EventResponse[]>(this.baseURL + '/events');
  }

  detail(date: string): Observable<EventDetailResponse> {
    return this.http.get<EventDetailResponse>(this.baseURL + '/attendance-list/' + date);
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

export interface EventResponse {
  date: string,
  numberOfMembers: number
};

export interface EventDetailResponse {
  info: EventResponse,
  members: {
    name: string,
    ordination: string,
    sector: string
  }[]
};
