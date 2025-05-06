import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http: HttpClient) { }
  verify(email: string): Observable<any> {
    return this.http.post(`${environment.apiBase}/verify`, { email }, { responseType: 'text' });
  }
}
