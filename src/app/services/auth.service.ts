import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  setAccessToken(token: string) {
    localStorage.setItem('access_token', token);
    return true;
  }

  getAccessToken() {
    let access_token = localStorage.getItem('access_token');
    return access_token;
  }

  removeToken() {
    localStorage.removeItem('access_token');
    return true;
  }

  getDecodedAccessToken(token: string): any {
    try {
      // return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

}
