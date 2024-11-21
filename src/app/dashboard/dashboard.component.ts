import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TaskService } from '../Service/task.service';
import { OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  constructor(private route: Router,private tservice: TaskService) { }

  currentTotalTasks: number | null= null;
  currentCompletedTasks: number | null = null;
  currentPendingTasks: number | null = null;

  ngOnInit(): void {
    this.currentTotalTasks = this.tservice.totalTasks;
    this.currentCompletedTasks = this.tservice.completedTasks;
    this.currentPendingTasks = this.tservice.pendingTasks;
    console.log(this.currentTotalTasks);
    console.log(this.currentCompletedTasks);
    console.log(this.currentPendingTasks);
  }

  moveToAccSettings(){
    this.route.navigate(['/accSettings']);
  }

}
