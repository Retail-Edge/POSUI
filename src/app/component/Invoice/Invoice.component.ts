import { Component, OnInit } from '@angular/core';
import { Inventory, Invoice, InvoiceLine, LineItem } from 'src/app/Model/Request';
import { RetailStoreServices } from 'src/app/service/RetailStoreServices';
import { ToastrService } from 'ngx-toastr';
import { v4 as uuidv4 } from 'uuid';

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
  inventoryList : Inventory[] = [];
  currentProduct : Inventory = {
    productMaster : {

    }
  };

  

  constructor(private service : RetailStoreServices,private toastr: ToastrService) {
    
  }

  
  onSelectProductNewLine(inventory : Inventory,lineItem : LineItem)
  {
      lineItem.isAdding = false;
      lineItem.billedQty = 1;
      lineItem.inStockQty = inventory.inStockQuantity;
      lineItem.sku = inventory.productMaster.skuId;
      lineItem.productDescription = inventory.productMaster.description;
      lineItem.unitPrice = inventory.maxRetailPrice;
      lineItem.extPrice = lineItem.unitPrice ? lineItem.unitPrice : 1 * lineItem.billedQty;
      console.log(this.lineItems);
      this.calculateAll();
  }
  

  onCreateInvoice()
  {
      let invoice : Invoice = {
        invoiceId : uuidv4(),
        invoiceHeader : {
          date : new Date(),
          numberOfLines : this.lineItems.length,
          storeId : "59348383",
          totalDollarAmount : this.totalPrice
        },
        invoiceLines : []
      }

      this.lineItems.forEach((item : LineItem) => {
        let invoiceLine : InvoiceLine = {
          billQuantity : item.billedQty!,
          extendedPrice : item.extPrice!,
          productMaster : {
            skuId : item.sku,
            description : item.productDescription
          },
          unitPrice : item.unitPrice!
        }

        invoice.invoiceLines.push(invoiceLine);
      });

      this.service.createInvoice(invoice).subscribe((data : any) => {
        console.log("Invoice Response : ");
        console.log(data);
        this.toastr.success("Invoice Created Successfully : " + invoice.invoiceId, "New Invoice");
      });
  }

  onDeleteNewItem()
  {
    this.lineItems = this.lineItems.filter( (data : LineItem) => {
        if(data.isAdding)
          return false;
        else
          return true;  
    });
  }

  onAddNewLine()
  {
     this.lineItems.push({
       isAdding : true
     })
  }

  ngOnInit() {
    this.service.getAllInventory().subscribe((data : any) => {
      this.inventoryList = data;
    });


    

   /*  this.lineItems.forEach((data: LineItem) => { 
      data.extPrice = data.billedQty * data.unitPrice;
      this.subtotal+= data.extPrice
    });

    this.tax = (9.3/100) * this.subtotal;
    this.shippingPrice = (2.4/100) * this.subtotal;
    this.totalPrice = this.subtotal + this.tax + this.shippingPrice; */

  }

  onRecalculate(lineItem : LineItem)
  {
      lineItem.extPrice = lineItem.billedQty! * lineItem.unitPrice!;
      this.subtotal = 0;
      this.lineItems.forEach((data: LineItem) => { 
        data.extPrice = data.billedQty! * data.unitPrice!;
        this.subtotal+= data.extPrice
      });
  
      this.tax = (7.0/100) * this.subtotal;
      this.shippingPrice = (1/100) * this.subtotal;
      this.totalPrice = this.subtotal + this.tax + this.shippingPrice;
  }

  calculateAll()
  {
    this.lineItems.forEach((lineItem : LineItem) => {
      this.onRecalculate(lineItem);
    });
  }

}
