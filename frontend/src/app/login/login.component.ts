

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}


  
  onSubmit() {


    this.http.post<{ token: string }>('http://localhost:3000/api/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe(response => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/dashboard']);
      this.username = '';
      this.password = '';
      alert("User is successfully authenticated");
    }, error => {
      this.username = '';
      this.password = '';
      alert('Invalid credentials');
    });

   
    }  
    

  }





