import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RoleSelectionComponent } from './role-selection/role-selection.component';
import { QuizComponent } from './quiz/quiz.component';
import { CompleteComponent } from './complete/complete.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    RoleSelectionComponent,
    QuizComponent,
    CompleteComponent,
    PagesComponent,
    ResultPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
