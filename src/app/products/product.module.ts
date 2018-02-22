import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertTospacesPipe } from '../../shared/converttospaces.pipe';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { ProductRountingModule } from './product-rounting.module';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    ProductRountingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertTospacesPipe,
  ],
  providers: [ProductGuardService, ProductService]
})
export class ProductModule { }
