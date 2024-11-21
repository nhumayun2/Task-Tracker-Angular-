import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  totalTasks: number = 0;
  completedTasks: number = 0;
  pendingTasks: number = 0;
  
}
