import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.scss'],
})
export class ShopSingleComponent implements OnInit {
  id: string | null = '';
  product = '';

  constructor(private route: ActivatedRoute) { };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.product = "Product ID is : " + id;
    })
    this.product = 'Product ID is: ' + this.id;
  }
}
