import { Component } from '@angular/core';
import { RestaurantsComponent } from "../restaurants/restaurants.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styles: `
  body{

    background-image:url("https://img.freepik.com/premium-photo/top-view-table-full-delicious-food-composition_198067-564895.jpg");
  }
  `
})
export class HomeComponent {

}
