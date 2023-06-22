import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { callRequests } from '../models/requests.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'http://localhost:3000/viewusers';
  private baseUrll: string = 'http://localhost:3000/signupUsers';
  private baseUrl2: string = 'http://localhost:3000/callRequests';

  constructor(private http: HttpClient) { }

  postRegistration(registerObj: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, registerObj);
  }

  getRegisteredUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  updateRegisterUser(registerObj: User, id: number): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, registerObj);
  }

  deleteRegistered(id: number): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/${id}`);
  }

  getRegisteredUserId(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  signUp(signUpData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrll}`, signUpData);
  }

  callRequests(callRequestData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl2}`, callRequestData);
  }
  
  getCallRequestUser(): Observable<callRequests[]> {
    return this.http.get<callRequests[]>(`${this.baseUrl2}`);
  }
}

