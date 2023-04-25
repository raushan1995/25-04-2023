import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   images=[944,1011,984].map((n)=>`https://picsum.photos/id/$(n)/900/500`);
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data)=>{
      console.warn(data)
    })
  }

}
