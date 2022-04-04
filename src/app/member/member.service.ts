import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  // baseURL = 'http://localhost:7500'
  baseURL = 'https://omni-event.herokuapp.com'

  constructor(private http: HttpClient) {}



  list(): Observable<any> {
    return this.http.get<any>(this.baseURL + '/members')
  }

  detail(cpf: string): Observable<any> {
    return this.http.get<any>(this.baseURL + `/members/${cpf}`)
  }

  update(cpf: string, member: any): Observable<any> {
    return this.http.patch<any>(this.baseURL + `/members/${cpf}`, member);
  }

  create(member: any): Observable<any> {
    return this.http.post<any>(this.baseURL + '/members', member);
  }

  delete(cpf: string): Observable<any> {
    const url = `${this.baseURL}/members/${cpf}`;
    return this.http.delete<any>(url);
  }

  getSectors(): Observable<any> {
    return this.http.get(this.baseURL + '/sectors');
  }

}
