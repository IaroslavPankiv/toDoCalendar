import { Component, OnInit } from '@angular/core';
import {DataServise} from "../shared/data.servise";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskService, Task} from "../shared/task.service";
import {switchMap} from "rxjs/operators";


@Component({
  selector: 'app-oganizer',
  templateUrl: './oganizer.component.html',
  styleUrls: ['./oganizer.component.scss']
})
export class OganizerComponent implements OnInit {

  form: FormGroup
  tasks: Task[] = []


  constructor(private dateServise: DataServise,
              private taskServise: TaskService) { }



  ngOnInit() {

    this.dateServise.date.pipe(
      switchMap(value => this.taskServise.load(value))
    ).subscribe(tasks => {
      this.tasks = tasks
    })

    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    })
  }



submit() {
const {title} = this.form.value;

const task: Task = {
  title,
  date: this.dateServise.date.value.format('DD-MM-YYYY')
}
this.taskServise.creete(task).subscribe(task => {
  this.tasks.push(task)
  this.form.reset()

}, err => console.error(err))
  console.log(title);
}


remove(task: Task) {
  this.taskServise.remove(task).subscribe( ()=> {
    this.tasks = this.tasks.filter(t => t.id !== task.id)
  }, err => console.error(err))

}





}
