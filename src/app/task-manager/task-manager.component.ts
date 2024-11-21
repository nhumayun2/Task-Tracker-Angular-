import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { taskStructure } from '../Classes/taskStructure';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../Service/task.service';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule, CommonModule],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.css'
})
export class TaskManagerComponent{

  constructor(private router: Router,private tservice: TaskService) { }

  //filter condition
  filterCondition: boolean = false;
  filteredTasks: taskStructure[] = [];

  //edit task
  editIndex: number | null = null;


  //structure of dataset
  taskStructure: taskStructure = new taskStructure();
  //array to store all tasks
  allTasks: taskStructure[] = [];

  filterOption: string = '';


  //using for naviation to setting page
  moveToAccSettings(){
    this.router.navigate(['/accSettings']);
  }

  addTask(){
    this.allTasks.push(this.taskStructure);
    //alert('Task added successfully');
    this.tservice.totalTasks++;
    if(this.taskStructure.status == 'Completed'){
      this.tservice.completedTasks++;
    }
    else if(this.taskStructure.status == 'To-Do'){
      this.tservice.pendingTasks++;
    }

    console.log(this.tservice.totalTasks);
    console.log(this.tservice.completedTasks);
    console.log(this.tservice.pendingTasks);
    console.log(this.allTasks);
    this.taskStructure = new taskStructure();
  }

  filterTasks(event: Event){
    this.filterOption = (event.target as HTMLInputElement).value;
    this.filteredTasks = this.allTasks.filter((task) => {
      if(this.filterOption == 'To-Do'){
        return task.status == 'To-Do';
      }
      else if(this.filterOption == 'Completed'){
        return task.status == 'Completed';
      }
      else if(this.filterOption == 'In Progress'){
        return task.status == 'In Progress';
      }
      else{
        return task;
      }
    });
  }

  triggerFilter(){

  }
  
  deleteTask(index: number){
    this.allTasks.splice(index, 1);
    this.tservice.totalTasks--;
    console.log(this.tservice.totalTasks);
  }

  editTask(index: number){
    this.editIndex = index;
    this.taskStructure = [...this.allTasks][index];
  }

}
