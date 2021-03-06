import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradientComponent } from './gradient/gradient.component';
import { BoxshadowComponent } from './boxshadow/boxshadow.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'gradient',
    component: GradientComponent
  },
  {
    path: 'box-shadow',
    component: BoxshadowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
