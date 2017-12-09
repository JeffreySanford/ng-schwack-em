import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

products = [
  {
    title: 'shirt-one',
    image: '../../../assets/images/captured-longsleeve.PNG',
    description: 'Long sleve high-quality cotton',
    price: 49.25
  },{
    title: 'shirt-two',
    image: '../../../assets/images/captured-longsleeve.PNG',
    description: 'Long sleve high-quality cotton',
    price: 49.35
  },
  {
    title: 'shirt-three',
    image: '../../../assets/images/captured-longsleeve.PNG',
    description: 'Long sleve high-quality cotton',
    price: 49.55
  }
];
  constructor() { }

  ngOnInit() {


  }


}
