import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from "../../components/product-card/product-card";
import { MatSidenavContainer , MatSidenavContent , MatSidenav } from "@angular/material/sidenav";
import { MatNavList, MatListItem } from "@angular/material/list";
@Component({
  selector: 'app-products-grid',
  imports: [ProductCard , MatSidenavContainer , MatSidenavContent , MatSidenav , MatNavList , MatListItem],
  template: `

  <mat-sidenav-container>
    <mat-sidenav mode="side" opened="true" >
      <div class="p-6">
        <h2 class="text-lg text-gray-900"> Categories </h2>
        <mat-nav-list>
          @for (category of categories(); track category) {
            <mat-list-item class="my-2">

            </mat-list-item>
          }

        </mat-nav-list>


      </div>
    </mat-sidenav>
    


    <mat-sidenav-content class="bg-gray-100 p-6 h-full">
   <h1 class ="text-2x1 font-bold text-gray-900 mb-6"> {{category()}} </h1>
   <div class="responsive-grid">
    @for (product of fileteredProducts(); track product.id) {
      <app-product-card [product]="product" />
      
    }
    </div>
    </mat-sidenav-content>
  </mat-sidenav-container>
   <div class="bg-gray-100 p-6 h-full">   </div>

 
  `,
  styles: ``,
})
export default class ProductsGrid {
  category = input<string>('All');

  products = signal<Product[]>([
    {
    id: '1',
    name: ' Wireless Noise-Cancelling Headphones ',
    description: ' Premium wireless headphones with active noise cancellation and 30-hour battery life',
    price: 299.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&w=400&q=80',
    rating: 4.7,
    reviewsCount: 112,
    inStock: true,
    category: 'electronics',
  },
  {
    id: '2',
    name: 'Tacos Poulet Curry',
    description: 'Poulet mariné au curry, sauce blanche, frites et fromage fondant.',
    price: 8.00,
    imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&w=400&q=80',
    rating: 4.6,
    reviewsCount: 95,
    inStock: true,
    category: 'electronics',
  },
  {
    id: '3',
    name: 'Professional Camera ',
    description: 'Mirrorless digital camera with 4K video capabilities',
    price: 899.99,
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&w=400&q=80',
    rating: 4.4,
    reviewsCount: 76,
    inStock: true,
    category: 'electronics',
  }

  ]);

  fileteredProducts = computed(() => {
    if (this.category() === 'all')  return this.products();
    return this.products().filter(p=> p.category === this.category().toLowerCase() );
  
  });

  categories = signal<string[]>(['all' , 'electronics' , 'clothing' , 'accessories' , 'home' ]);
}
