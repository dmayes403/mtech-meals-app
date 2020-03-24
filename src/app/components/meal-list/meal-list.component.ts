import { Component, OnInit } from '@angular/core';
import { MealsService } from 'src/app/services/meals.service';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
  desserts: any[];
  americanMeals: any[];
  categories: any[];
  selectedCategory;
  selectedMeals: any[];
  searched = false;

  constructor(
    private mealsService: MealsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.mealsService.getMealsByFirstLetter('b'),
      this.mealsService.getMealsByFirstLetter('c'),
      this.mealsService.getAllCategories()
    ]).subscribe(data => {
      console.log(data);
      this.categories = data[2];
      const meals = [...data[0], ...data[1]];
      this.desserts = meals.filter(meal => meal.strCategory === 'Dessert');
      this.americanMeals = meals.filter(meal => meal.strArea === 'American');
      console.log(this.americanMeals);
    });
  }

  goToMealDetails(mealId: string) {
    console.log(mealId);
    this.router.navigate(['/meal-detail', {id: mealId}]);
  }

  search() {
    console.log('searching...');
    this.mealsService.getMealsByCategory(this.selectedCategory).pipe(
      tap(data => {
        console.log(data);
        this.selectedMeals = data.meals;
        this.searched = true;
        console.log(this.selectedMeals);
      })
    ).subscribe();
  }

  test() {
    console.log(this.selectedCategory);
    this.mealsService.getMealsByCategory(this.selectedCategory).pipe(
      tap(data => {
        console.log(data);
        this.selectedMeals = data.meals;
        console.log(this.selectedMeals);
      })
    ).subscribe();
  }

}
