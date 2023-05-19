import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormProductComponent } from './form-product/form-product.component';

const routes: Routes = [
  {'path':'home', 'component':HomeComponent},
 {'path':'addproduct','component':FormProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
