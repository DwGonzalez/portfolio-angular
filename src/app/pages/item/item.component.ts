import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

import { Item } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: Item;
  year: number = new Date().getFullYear();
  month: string = new Date().getMonth().toLocaleString('en-us').toString();
  day: number = new Date().getDay();
  itemid: string;

  constructor(private route: ActivatedRoute,
    public _productService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      this._productService.getProduct(parameters['id'])
        .subscribe((product: Item) => {
          this.itemid = parameters['id'];
          this.item = product;
        });
    });
  }

}
