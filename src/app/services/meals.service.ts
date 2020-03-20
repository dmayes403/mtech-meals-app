import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
            map(anything => anything['meals'])
        );
    }

    getMealById(mealId: string): Observable<any> {
        return this.http.get(`${this.mealByIdUrl}${mealId}`).pipe(
            map(meal => meal['meals'][0])
        );
    }
}
