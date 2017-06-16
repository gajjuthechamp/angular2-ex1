import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ListingService {
  private baseURL = "assets/response/"

  constructor(private http: Http) { }

  getProductListing(): Observable<any> {
    const URL = this.baseURL + "product-listing.json"
    return this.http.get(URL).map(
       res => {
         return res.json();;
       }
    );
  }

}
