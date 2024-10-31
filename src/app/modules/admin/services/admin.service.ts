import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  private apiUrl = 'http://localhost:3000'; // URL to web API

  constructor(private http: HttpClient) {}

  // Fetch all users
  getUsers(url: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${url}`);
  }

  // Fetch user by id
  getUserById(url: string, id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${url}/${id}`);
  }

  // Add a new user
  addUser(url: string, user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${url}`, user);
  }

  // Update an existing user
  updateUser(url: string, id: string, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${url}/${id}`, user);
  }

  // Delete a user
  deleteUser(url: string, id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${url}/${id}`);
  }
}

