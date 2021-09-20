import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteComponent } from './complete/complete.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { RoleSelectionComponent } from './role-selection/role-selection.component';

const routes: Routes = [{
  path:'',
  component: PagesComponent,
  children: [
    {path: 'profile', component: ProfileComponent},
    {path: 'role-selection', component: RoleSelectionComponent},
    {path: 'quiz', component: QuizComponent},
    {path: 'complete', component: CompleteComponent},
    {path: 'result-page', component: ResultPageComponent}
  ]
}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
