import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`<div>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Acme Product Management</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a [routerLink]="['/welcome']">Home</a></li>
      <li><a [routerLink]="['/products']">Product List</a></li>
    </ul>
  </div>
</nav>
<div class="container">
  <router-outlet></router-outlet>
</div>
</div>
`,
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'Acme Product Management';
}
