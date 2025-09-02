import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Laptop',
      imgUrl:
        'https://i5.walmartimages.com/seo/HP-15-6-Ryzen-5-8GB-256GB-Laptop-Rose-Gold_36809cf3-480b-47a5-94f0-e1d5e70c58c0_3.fcc0d6494b0e279a13c32c80c28abfa3.jpeg',
      price: 60000,
    },
    {
      id: 2,
      name: 'Monitor',
      imgUrl:
        'https://selltech.com.bd/image/cache/catalog/HP%20M22f%2021.5%20Inch%20IPS%20Monitor%20Price%202023%20In%20Bangladesh.jpg-1080x1080.jpg.webp',
      price: 12400,
    },
    {
      id: 3,
      name: 'SSD',
      imgUrl: 'https://media.kingston.com/kingston/product/SNV3S_500GB-sm.jpg',
      price: 2500,
    },
    {
      id: 4,
      name: 'Desktop',
      imgUrl:
        'https://5.imimg.com/data5/SELLER/Default/2020/11/DI/VX/IJ/12559776/desktop-computer.jpg',
      price: 70000,
    },
  ];

  //ngSwitch

  // user = ['admin','user','guest']
  role = 'user';
}
