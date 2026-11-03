import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
// import { ApiService, CartItem, Product } from '../../../core/services/api.service';
// import { AuthService } from '../../../core/services/auth.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: ,//'./cart.page.html',
//   styleUrls: //['./cart.page.scss'],
// })
class CartPage implements OnInit {
  cartItems: any[] = [];
  products: any[] = [];
  loading = false;
  total = 0;

  constructor(
    // private apiService: ApiService,
    // private authService: AuthService
  ) { }

  ngOnInit() {
    this.loadCart();
    this.loadProducts();
  }

  loadCart() {
    this.loading = true;
    const userId = null//= this.authService.getCurrentUserId();
    if (userId) {
      // this.apiService.getCart(userId).subscribe({
      //   next: (items: any) => {
      //     this.cartItems = items;
      //     this.calculateTotal();
      //     this.loading = false;
      //   },
      //   error: (error: HttpErrorResponse) => {
      //     console.error('Error loading cart:', error);
      //     this.loading = false;
      //   }
      // });
    }
  }

  loadProducts() {
    // this.apiService.getProducts().subscribe({
    //   next: (products: any) => {
    //     this.products = products;
    //   },
    //   error: (error: HttpErrorResponse) => {
    //     console.error('Error loading products:', error);
    //   }
    // });
  }

  getProductName(productId: number): string {
    const product = this.products.find(p => p.id === productId);
    return product ? product.name : 'Unknown Product';
  }

  getProductPrice(productId: number): number {
    const product = this.products.find(p => p.id === productId);
    return product ? product.price : 0;
  }

  updateQuantity(item: any, change: number) {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      const userId = null; // this.authService.getCurrentUserId();
      if (userId) {
        // this.apiService.updateCartItem(userId, item.productId, newQuantity).subscribe({
        //   next: () => {
        //     item.quantity = newQuantity;
        //     this.calculateTotal();
        //   },
        //   error: (error: HttpErrorResponse) => {
        //     console.error('Error updating cart item:', error);
        //   }
        // });
      }
    } else {
      this.removeItem(item);
    }
  }

  removeItem(item: any) {
    const userId = null ;// this.authService.getCurrentUserId();
    if (userId) {
      // this.apiService.removeFromCart(userId, item.productId).subscribe({
      //   next: () => {
      //     this.cartItems = this.cartItems.filter(i => i.productId !== item.productId);
      //     this.calculateTotal();
      //   },
      //   error: (error: HttpErrorResponse) => {
      //     console.error('Error removing cart item:', error);
      //   }
      // });
    }
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => {
      const price = this.getProductPrice(item.productId);
      return sum + (price * item.quantity);
    }, 0);
  }

  checkout() {
    // TODO: Implement checkout functionality
    console.log('Checkout');
  }
}
