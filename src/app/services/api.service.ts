import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { callRequests } from '../models/requests.model';
import { feedBack } from '../models/feedBack.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private baseUrl: string = 'http://localhost:3000/viewusers';
  private baseUrll: string = 'http://localhost:3000/signupUsers';
  private baseUrl2: string = 'http://localhost:3000/callRequests';
  private baseUrl3: string = 'http://localhost:3000/callRequests';
  private baseUrl4: string = 'http://localhost:3000/feedback';
  private baseUrl5: string = 'http://localhost:3000/visiting';

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
    return this.http.get<callRequests[]>(`${this.baseUrl3}`);
  }

  postFeedback(feedbackData: feedBack): Observable<feedBack> {
    return this.http.post<feedBack>(`${this.baseUrl4}`, feedbackData);
  }

  getFeedback(): Observable<feedBack[]> {
    return this.http.get<feedBack[]>(`${this.baseUrl4}`);
  }

  postReserveNow(data: any): Observable<any>{
    return this.http.post(' http://localhost:3000/reserveNow', data);
  }

  getReserveNow(): Observable<any> {
    return this.http.get(' http://localhost:3000/reserveNow');
  }

  postVisiting(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/visiting', data);
  }

  getVisiting(): Observable<any> {
    return this.http.get('http://localhost:3000/visiting');
  }

}

