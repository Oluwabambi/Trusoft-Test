import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { QuizComponent } from '../quiz/quiz.component';


@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  constructor() { }

  swal: any = Swal;

  myVar: any;

  quizcomp: any = QuizComponent;

  ngOnInit(): void {
  
    if (localStorage.getItem("isvalid") === "passed") {   // display success pop up if passed
  this.myVar = setTimeout(
    this.swal.fire({
    title: '<p style="color: #28C7FA;">Pass</p>',
    text: 'You are still in the game',
    icon: 'success',
    backdrop: 'none',
    showConfirmButton: false,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  )
    }
    else {
      this.myVar = setTimeout(
        this.swal.fire({
        title: '<p style="color: #28C7FA;">Fail</p>',
        text: "Let's part as friends",
        icon: 'error',
        backdrop: 'none',
        showConfirmButton: false,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      )
    }

    localStorage.clear();
  }

  
}
