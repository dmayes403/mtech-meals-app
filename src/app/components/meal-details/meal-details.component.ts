import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap, map } from 'rxjs/operators';
import { MealsService } from 'src/app/services/meals.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss']
})
export class MealDetailsComponent implements OnInit {
  selectedMeal: any;

  constructor(
    private mealsService: MealsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot);
    // this.route.params.subscribe(params => {
    //   console.log(params);
    // });

    this.route.params.pipe(
      switchMap(param => {
        return this.mealsService.getMealById(param.id);
      }),
      tap(meal => {
        console.log(meal);
        this.selectedMeal = meal;
      })
    ).subscribe();
  }

}
