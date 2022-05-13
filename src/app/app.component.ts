import { Component,  OnInit, Output,EventEmitter, } from '@angular/core';
import { ProductData } from './models/product-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'humber-assignment-1';
  showModal = false;
  
  onCardClick() {
    this.showModal = true;
  }
  
  closeModal() {
    this.showModal = false;
  }

  enterText(event: KeyboardEvent){
    console.log(event.key);
  }

}
