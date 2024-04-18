import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  private financeUrl: string;
  constructor(private http: HttpClient) {
    this.financeUrl = 'http://localhost:8080/finance';
  }

  public save(file: FormData) {
    return this.http.post<FormData>(this.financeUrl + "/upload", file);
  }
}
