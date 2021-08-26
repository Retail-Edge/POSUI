import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inventory } from "../Model/Request";

@Injectable({ providedIn: 'root' })
export class RetailStoreServices {

    baseURL : string = "";

    constructor(private http : HttpClient)
    {
        this.baseURL = "http://localhost:9091"
    }


    getAllInventory()
    {
        var url = this.baseURL+"/inventory";
        const headers = {
            'content-type': 'application/json',
            'accept': 'application/json',
            'X-Custom' : "test"
          };
        return this.http.get(url,{ headers });
    }

    updateInventory(inventory : Inventory)
    {
        var url = this.baseURL+"/inventory";
        const headers = {
            'content-type': 'application/json',
            'accept': 'application/json',
            'X-Custom' : "test"
        }
        let data = inventory;
        return this.http.put(url, data, { headers });
    }
}