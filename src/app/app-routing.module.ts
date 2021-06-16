import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTemplateComponent } from './admin-template/admin-template.component';

import { HomeTemplateModule } from './home-template/home-template.module';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>HomeTemplateModule
  },
  {
    path: 'admin',
    component: AdminTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


// {
//   path: '',
//   component: HomeTemplateComponent,
//   children: [
//     { path: '', component: HomeTemplateComponent },
//     { path: 'about', component: AboutComponent },
//     { path: 'list-movie', component: ListMovieComponent },
//   ],
// },