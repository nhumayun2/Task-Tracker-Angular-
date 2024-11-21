import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) { }

  username: string = '';
  password: string = '';

  login(){
    if(this.username == 'admin' && this.password == '123456'){
      console.log('Login successful');
      alert('Login successful');
      this.router.navigate(['/dashBoard']);
    }else{
      console.log('Login failed');
      alert('Login failed');
    }
  }
}
