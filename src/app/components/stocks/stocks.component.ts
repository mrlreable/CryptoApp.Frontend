import { Component, Input } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { Stock } from 'src/app/model/stock.model';
import { StockService } from 'src/app/services/stock.service';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent
{
  @Input() stocks: Stock[] = [];
  fetchStocksSubscription!: Subscription;
  selectedStock: Stock | undefined;

  ngDestroy$ = new Subject();

  constructor(private stockService: StockService)
  {
    this.fetchStocksSubscription = this.stockService.getStocks()
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe(stocks => this.stocks = stocks);
  }

  onSelect(stock: Stock)
  {
    this.selectedStock = stock;
  }

  initStocks(): void
  {
    this.stockService.getStocks()
      .subscribe(stocks => this.stocks = stocks);
  }

  ngOnInit()
  {
    this.initStocks();
  }

  ngOnDestroy()
  {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }
}
