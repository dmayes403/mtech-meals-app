import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealDetailGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(next);
      const id: string = next.params.id;
      if (id.indexOf('1') !== -1) {
        console.log('blocked by guard');
        return false;
      } else {
        console.log('not blocked by guard');
        return true;
      }
  }
}
