import { Component,Input,OnInit } from '@angular/core';
import {productData } from 'src/app/models/product-data';

@Component({
  selector: 'cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.scss']
})
export class CardsComponentComponent implements OnInit {

  constructor() { 
   
  }
  data=productData;
  ngOnInit(): void {
  }

}
