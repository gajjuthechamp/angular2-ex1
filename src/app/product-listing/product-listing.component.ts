import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ListingService } from '../service/product/listing.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
  providers: [ListingService]
})
export class ProductListingComponent implements OnInit {
  public products;

  constructor(private listingService : ListingService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.listingService.getProductListing().subscribe(
      res => {
        this.products = res;
        console.log(this.products)
      }
    );
  }

}
