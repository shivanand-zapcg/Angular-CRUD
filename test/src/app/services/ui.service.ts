import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false
  private subject = new Subject<any>();
  
  constructor() { }
  toggleAddTask(): void{
    console.log("892478")
    console.log(this.showAddTask)
    this.showAddTask = !this.showAddTask
    this.subject.next(this.showAddTask)
    console.log(this.showAddTask)

  }
  onToggle():Observable<any>{
    console.log(this.showAddTask)
    return this.subject.asObservable() 
  }
}
