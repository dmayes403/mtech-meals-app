import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MealsService {
    mealsByFirstLetterUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
    mealByIdUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

    constructor(
        private http: HttpClient
    ) { }

    getMealsByFirstLetter(firstLetter: string): Observable<any> {
        // return this.http.get(this.mealsByFirstLetterUrl + firstLetter);
        return this.http.get(`${this.mealsByFirstLetterUrl}${firstLetter}`).pipe(
            tap(meals => console.log(meals)),
            map(meals => meals['meals'])
        );
    }

    getMealById(mealId: string): Observable<any> {
        return this.http.get(`${this.mealByIdUrl}${mealId}`).pipe(
            tap(meals => console.log(meals)),
            map((meals: {meals: any[]}) => meals.meals[0])
        );
    }

    getAllCategories(): Observable<any> {
        return this.http.get(`https://www.themealdb.com/api/json/v1/1/categories.php`).pipe(
            map((categories: {categories: any[]}) => categories.categories)
        );
    }

    getMealsByCategory(category: string): Observable<any> {
        return this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    }
}
