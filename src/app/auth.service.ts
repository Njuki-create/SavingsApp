import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersKey = 'users';

  constructor() {}

  registerUser(username: string, password: string): boolean {
    let users = this.getUsers();

    if (users.find((user) => user.username === username)) {
      return false; // Username already exists
    }

    users.push({ username, password });
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    return true;
  }

  loginUser(username: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find((user) => user.username === username && user.password === password);
    return !!user;
  }

  private getUsers(): any[] {
    const usersString = localStorage.getItem(this.usersKey);
    return usersString ? JSON.parse(usersString) : [];
  }
}
