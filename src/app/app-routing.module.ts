import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '',   redirectTo: '/profile', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
