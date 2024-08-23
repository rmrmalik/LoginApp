import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = '';
  password: string = '';
  email: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {


    this.http.post<any>('http://localhost:3000/api/auth/register', {
      username: this.username,
      password: this.password,
      email: this.email
    }).subscribe(response => {
      alert("User has been successfully registered");
      this.username = '';
      this.password = '';
      this.email ='';
      this.router.navigate(['/login']);
    }, error => {
      this.username = '';
      this.password = '';
      this.email ='';
      alert('User is not registered');
    });


   
    }  
  
  
}
