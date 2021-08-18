import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/Model/Request';

@Component({
  selector: 'app-Invoice',
  templateUrl: './Invoice.component.html',
  styleUrls: ['./Invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  subtotal : number = 0;
  tax : number = 0;
  totalPrice : number = 0;
  invoiceDate: Date = new Date();
  shippingPrice: number = 0;

  lineItems: LineItem[] = new Array();

  constructor() { }

  ngOnInit() {
    this.lineItems = [
      {
        sku: "45452-233",
        productDescription: "Dasani Water Bottle",
        unitPrice: 5.67,
        billedQty: 2
      },
      {
        sku: "423112-233",
        productDescription: "Coke 12 Oz",
        unitPrice: 2.67,
        billedQty: 7
      },
      {
        sku: "450932-233",
        productDescription: "Irish Spring",
        unitPrice: 3.67,
        billedQty: 1
      },
      {
        sku: "944367-233",
        productDescription: "Internet Router",
        unitPrice: 256.67,
        billedQty: 1
      }
    ];

    this.lineItems.forEach((data: LineItem) => { 
      data.extPrice = data.billedQty * data.unitPrice;
      this.subtotal+= data.extPrice
    });

    this.tax = (9.3/100) * this.subtotal;
    this.shippingPrice = (2.4/100) * this.subtotal;
    this.totalPrice = this.subtotal + this.tax + this.shippingPrice;

  }

  onRecalculate(lineItem : LineItem)
  {
      lineItem.extPrice = lineItem.billedQty * lineItem.unitPrice;
      this.subtotal = 0;
      this.lineItems.forEach((data: LineItem) => { 
        data.extPrice = data.billedQty * data.unitPrice;
        this.subtotal+= data.extPrice
      });
  
      this.tax = (9.3/100) * this.subtotal;
      this.shippingPrice = (2.4/100) * this.subtotal;
      this.totalPrice = this.subtotal + this.tax + this.shippingPrice;
  }

}
