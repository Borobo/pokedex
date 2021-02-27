import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private authApiUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/auth';

  constructor(private http: HttpClient) { }

  getTokenAccess(login: any, passwd: any) {
    let params = new HttpParams();

    if (login) {
      params = params.set('email', login);
      if (passwd) {
        params = params.set('password', passwd);
        this.http.post<any>(this.authApiUrl + '/login', { email: login, password: passwd }).subscribe(
          rep => {
            if (rep.access_token != undefined) {
              localStorage.setItem("ACCESS_TOKEN", rep.access_token);
              localStorage.setItem("EXPIRES_IN", rep.expires_in);
            }
          }
        );
      }
    }

    return false;

  }

}

