import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService: ProductService, private _route: ActivatedRoute) {
  }

  product: Product;

  ngOnInit() {
    const productIdString = this._route.snapshot.params['productId'];
    const productId = parseInt(productIdString, 10);
    this.product = this.productService.getProductById(productId);
  }

}
