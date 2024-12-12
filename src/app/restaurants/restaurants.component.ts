import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './restaurants.component.html',
  styles: `
  
  .row{
    margin:25px;
      }
  .container{
    display:flex;
    border:2px solid lightyellow;
    padding:2px;
    border-radius:1px 10px;
    width:525px;
    margin-left:5px;
    cursor:pointer;}

  .container:hover{
    box-shadow: 5px 5px 5px 5px lightgray;
  }
  
  img{
    border-radius:10px;
    margin:3px;
    margin-left:5px;
    height:110px;
    width:110px;
  }
  .float{
// float:right;
margin-top:20px;

}
li{
  list-style-type:none;
  color:rgb(34,193,195);
}

  `
})
export class RestaurantsComponent {
restaurants =[
  {
    imgUrl:"https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-220,h-220,cm-pad_resize_store_thumbnail/stores/3c48bdee-27aa-446c-8aae-31b580fc87ad-1568101924173-store_image.jpg" ,
    restaurantName:"Food Court - Coffee House",
    area:"Mount Road",
    distance:"3.2km",
  },
  {
    imgUrl:"https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-220,h-220,cm-pad_resize_store_thumbnail/stores/dXpJT1lIbGFva0hObFlKWTdlTzUwZz09-1572941212590-store_image.jpg" ,
    restaurantName:"Lassi Shop",
    area:"Nandhanam",
    distance:"3.2km"
  },
  {
    imgUrl:"https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-220,h-220,cm-pad_resize_store_thumbnail/stores/2b49d3f6-bdb6-460e-b440-27d15c18fd55-1573812422205-store_image.jpg" ,
    restaurantName:"Chicago Pizza",
    area:"T Nagar",
    distance:"3.2km"
  },
  {
    imgUrl:"https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-220,h-220,cm-pad_resize_store_thumbnail/stores/4443306b-c4ac-4e8e-89a4-630193371bd0-1573642009933-store_image.jpg" ,
    restaurantName:"Ajnabee Sweets",
    area:"Mount Road",
    distance:"3.2km"
  },
  {
    imgUrl:"https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-220,h-220,cm-pad_resize_store_thumbnail/stores/10e0423d-267d-4bd5-98c9-ade21b9861c6-1566204054947-store_image.jpg" ,
    restaurantName:"The Mallu Joint",
    area:"T Nagar",
    distance:"3.2km"
  },
  {
    imgUrl:"https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-220,h-220,cm-pad_resize_store_thumbnail/stores/ff8b34f7-93b8-49a6-9fca-ac80afcafbd0-1590991307329-store_image.jpg" ,
    restaurantName:"Sangeetha Veg Restaurant",
    area:"Guindy",
    distance:"3.2km"
  },
  {
    imgUrl:"https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-220,h-220,cm-pad_resize_store_thumbnail/stores/ejdoZWN3OWEwL3ZYcHk2Y3A1ajVmZz09-1627309201961-store_image.jpg",
    restaurantName:"V4 Ambur Biryanis",
    area:"T Nagar",
    distance:"6 km"
  },
  {
    imgUrl:"https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-220,h-220,cm-pad_resize_store_thumbnail/stores/b40b186f-13a9-4b77-b1a8-7b687122774c-1575285214044-store_image.jpg",
    restaurantName:"Shahid Hunger Hub/ FastFood",
    area:"West Mambalam",
    distance:"6 km"
  },
] 
}
