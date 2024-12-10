import { Component } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  cart : any[] = [];

  constructor(private dataService: DataService) {}

  removeFromCart(product: any) {
    this.dataService.removeFromCart(product);
  }

  getTotal() {
    return this.dataService.getCartTotal();
  }
}





