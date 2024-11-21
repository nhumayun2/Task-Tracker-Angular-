import { Component } from '@angular/core';
import { RouterLink,Route } from '@angular/router';
import { Router } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-additional-f',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './additional-f.component.html',
  styleUrl: './additional-f.component.css'
})
export class AdditionalFComponent {

  constructor(private router: Router) { }

  moveToAccSettings(){
    this.router.navigate(['/accSettings']);
  }
}
