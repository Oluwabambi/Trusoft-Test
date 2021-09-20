import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.component.html',
  styleUrls: ['./role-selection.component.css']
})
export class RoleSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // x : any = document.querySelector('#aa');
  // toggle = true;

  // changeCol() {
  //   const x : any = document.querySelector('#aa');
  //   console.log(x.style.backgroundColor);
  //   if (x.style.backgroundColor == "#02044A") {
  //     x.style.backgroundColor = "skyblue";
  //     console.log(x.style.backgroundColor);
  //   } else {
  //     x.style.backgroundColor = "#02044A";
  //   }
  // }
 
  changeCol(e: any) {
    const target: HTMLElement = e.target;
    target.classList.toggle('iselected');
}
// btnColor(btn: any) {
//   var property: any = document.getElementById(btn);
//       if (property.className !== 'roles toggled') {
//           property.className = 'roles toggled'
//       }
//       else {
//           property.className = 'roles';
//       }
//   }

}
