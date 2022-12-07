import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../model/stock.model';
import { HttpClient} from '@angular/common/http';
import { MessageService } from './message.service';


@Injectable()
export class StockService 
{
    private stockUrl= 'api/stocks';

    constructor(private http: HttpClient, private messageService: MessageService) { }

    getStocks(): Observable<Stock[]>
    {
        const stocks = this.http.get<Stock[]>(this.stockUrl);
        this.messageService.add("StockService: fetched stocks");
        return stocks;
    }
}