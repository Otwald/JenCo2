import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {
    //TODO remove when backend exists
    let user = new User();
    user.profile = 'Test';
    user.first = 'First';
    user.last = 'Last';
    user.age = new Date();
    this.setUserJson(user);
  }

  //TODO check if still needed when backend exists
  setUserJson(user: User) {
    return localStorage.setItem('user_json', JSON.stringify(user));
  }

  //TODO check if still needed when backend exists
  getUserJson(): User {
    return JSON.parse(localStorage.getItem('user_json') as string);
  }

  /**
   * retrieves token from localStorage
   */
  getToken(): string {
    return localStorage.getItem('token') as string;
  }
  /**
   * removes token from localStorage
   */
  removeToken(): void {
    localStorage.removeItem('token');
  }

  /**
   * small helper to Check if User is Authenticated, checks for the Token
   */
  isAuthenticated(): boolean {
    const token: string = this.getToken();
    if (token) {
      return true;
    }
    return false;
  }
}
