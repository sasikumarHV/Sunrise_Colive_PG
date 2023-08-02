import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  name: string;
  mobile: string;
  email: string;
  password: string;
  isAdminUser: string; // Changed the type to string
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Sunrise Colive PG';
  isMenuOpen: boolean = false;
  isAdminUser: boolean = true;
  email: string = '';
  password: string = '';
  isLoginPage: boolean = true;
  isMenuIconClose: boolean = false;

  users: User[] = [];

  constructor(private http: HttpClient) {
    this.fetchUsers(); // Call the method to fetch users when the component initializes.
  }

  // Fetch users from the server
  fetchUsers() {
    this.http.get<User[]>('http://localhost:3000/signupUsers').subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error) => {
        console.log('Error occurred while retrieving user data:', error);
      }
    );
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuIconClose = !this.isMenuIconClose;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isMenuIconClose = false;
  }

  login() {
    const user = this.users.find(
      (u: User) => u.email === this.email && u.password === this.password
    );

    if (user) {
      this.isAdminUser = user.isAdminUser.toLowerCase() === 'true';
      this.isLoginPage = false;
      console.log('Login successful. User is ' + (this.isAdminUser ? 'admin.' : 'not admin.'));
    } else {
      this.isAdminUser = false;
      console.log('Login failed. Invalid credentials.');
    }
  }
}






