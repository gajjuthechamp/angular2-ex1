import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class NavItemsService {
  private baseURL = "assets/response/"

  constructor(private http: Http) { }

  getNavItems(): Observable<any> {
    const URL = this.baseURL + "nav-items.json"
    return this.http.get(URL).map(
       res => {
         return res.json();;
       }
    );
  }

}
