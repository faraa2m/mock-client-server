import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;
  public username: string;
  public http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public login(username: string, password: string): void {
    this.http.post(`http://localhost:3000/auth/login`, {
      username,
      password
    }).subscribe((data: any) => {
      this.username = data.username;
      this.isLoggedIn = true;
    });
    return;
  }

  public register(username: string, password: string): void {
    this.http.post(`http://localhost:3000/auth/register`, {
      username,
      password
    }).subscribe((data: any) => {
      this.username = data.username;
      this.isLoggedIn = true;
    });
    return;
  }

  public logout(): void {
    this.http.post(`http://localhost:3000/auth/logout`, {})
    .subscribe((data: any) => {
      this.username = '';
      this.isLoggedIn = false;
    });;
  }
}
