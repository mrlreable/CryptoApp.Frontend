import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { StockService } from './services/stock.service';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './components/messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    StocksComponent,
    MessagesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
