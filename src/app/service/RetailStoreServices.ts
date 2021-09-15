import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inventory, Invoice } from "../Model/Request";

@Injectable({ providedIn: 'root' })
export class RetailStoreServices {

    baseURL : string = "";

    constructor(private http : HttpClient)
    {
        this.baseURL = "http://localhost:9091"
    }


    addInventory(inventory : Inventory)
    {
        var url = this.baseURL+"/inventory";
        const headers = {
            'content-type': 'application/json',
            'accept': 'application/json',
            'X-Custom' : "test"
        }
        let data = inventory;
        return this.http.post(url, data, { headers });
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

    createInvoice(invoice : Invoice)
    {
        var url = this.baseURL+"/invoicing";
        const headers = {
            'content-type': 'application/json',
            'accept': 'application/json',
            'X-Custom' : "test"
        }
        var data = invoice;
        return this.http.post(url, data, { headers });
    }

    getAllProducts()
    {
        var url = this.baseURL+"/products";
        const headers = {
            'content-type': 'application/json',
            'accept': 'application/json',
            'X-Custom' : "test"
        }
       
        return this.http.get(url, { headers });
    }

    addProduct(description : string)
    {
        var url = this.baseURL+"/products";
        const headers = {
            'content-type': 'application/json',
            'accept': 'application/json',
            'X-Custom' : "test"
        }
        let data = {
            description : description
        };
        return this.http.post(url, data, { headers });
    }
}