import { Component, OnInit } from '@angular/core';
import {NgForm , Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  statuses : any =["Student", "Graduate"];
  hours : any =['6 hours or more', 'Less than 6 hours'];
  calls : any =["At least 1 hour", "Less than 1 hour"];
  laptops : any =['Yes', 'No'];
  ratings: any = [1,2,3,4,5];

  

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

    userForm :FormGroup;

  }

  userForm = this.fb.group({
    level : new FormControl ('', Validators.required),
    hour : new FormControl ('', [Validators.required]),
    call : new FormControl ('', Validators.required),
    laptop : new FormControl ('', Validators.required),
    rating : new FormControl ('', Validators.required),
  });

  submitClient(data: any) {
    console.log(data);
    if (data.level===this.statuses[1] && data.hour===this.hours[0] && data.call===this.calls[0] && data.laptop===this.laptops[0]) {
      localStorage.setItem("isvalid","passed");   // store isvalid as passed if the user meets the requirements
      
    }   
  }
  

}
