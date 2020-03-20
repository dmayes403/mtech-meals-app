import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { MealListComponent } from './components/meal-list/meal-list.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'meals', component: MealListComponent},
  { path: 'meal-detail', component: MealDetailsComponent},
  { path: 'meal-deatils/:id', component: MealDetailsComponent},
  { path: '**', redirectTo: 'meals', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
