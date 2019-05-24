import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListModule } from 'src/app/product-list/product-list.module';
import { HomeComponent } from 'src/app/home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BillingComponent } from 'src/app/billing/billing.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { ProvisionComponent } from 'src/app/provision/provision.component';
import { TopbarComponent } from 'src/app/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BillingComponent,
    CartComponent,
    ProvisionComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
