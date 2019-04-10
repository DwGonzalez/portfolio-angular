import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {

    return new Promise((resolve, reject) => {
      this.http.get('https://urku-app.firebaseio.com/products_idx.json')
        .subscribe((resp: Product[]) => {
          this.products = resp;
          this.loading = false;
          resolve();
        });
    });

  }

  getProduct(id: string) {
    return this.http.get(`https://urku-app.firebaseio.com/products/${id}.json`);
  }

  searchProduct(value: string) {
    if (this.products.length === 0) {
      this.loadProducts().then(() => {
        this.filterProducts(value);
      });
    } else {
      this.filterProducts(value);
    }
  }

  private filterProducts(value: string) {
    value = value.toLocaleLowerCase();

    this.filteredProducts = [];

    this.products.forEach(prod => {

      const titleLower = prod.title.toLocaleLowerCase();

      if (prod.category.indexOf(value) >= 0 || titleLower.indexOf(value) >= 0) {
        this.filteredProducts.push(prod);
      }
    });
  }
}
