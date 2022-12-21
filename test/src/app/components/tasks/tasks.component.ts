import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from './../../services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:any = [];
  constructor(private taskSerivce: TaskService) { }

  ngOnInit(): void {
    this.taskSerivce.getTask().subscribe((tasks) => this.tasks = tasks)
  console.log(this.tasks)
  }

  deleteTask(task: Task) {
    this.taskSerivce.deleteTask(task).subscribe(() => (
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    ))
  }
  toggleReminder(task: Task){
    console.log(task)
    task.reminder = !task.reminder
    this.taskSerivce.updateTaskReminder(task).subscribe()
    console.log(task)
  }
  addTask(task:Task){
    this.taskSerivce.addTask(task).subscribe((task)=>
    this.tasks.push(task))
  }
}
