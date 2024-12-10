import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  products = [
    { id: 1, name: 'Produit 1', price: 100, image: 'https://www.ubuy.ma/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjF4SWRobmJyZkwuX1NMMTUwMF8uanBn.jpg' },
    { id: 2, name: 'Produit 2', price: 200, image: 'https://via.placeholder.com/15' },
    { id: 3, name: 'Produit 3', price: 300, image: 'https://via.placeholder.com/150' },
  ];
  cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
  }

  removeFromCart(product: any) {
    this.cart = this.cart.filter((item) => item.id !== product.id);
  }

  getCartTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}

