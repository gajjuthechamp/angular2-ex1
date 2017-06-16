import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NavItemsService } from '../service/navigation/nav-items.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [NavItemsService]
})
export class NavigationComponent implements OnInit {
  public navList;

  constructor(private navItemsService : NavItemsService ) { }

  ngOnInit() {
    this.getNavItems();
  }

  getNavItems() {
    this.navItemsService.getNavItems().subscribe(
      res => {
        this.navList = res;
        console.log(this.navList)
      }
    );
  }
}
