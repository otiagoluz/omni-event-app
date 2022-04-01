import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  baseURL = 'http://localhost:7500'

  constructor(private http: HttpClient) {}

}
