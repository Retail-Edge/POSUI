import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/Model/Request';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor() { }

  data : Inventory[] = [];
  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
    this.data = [
      {
        sku : "234234-333",
        productDescription : "Product1",
        stockQty : 5,
        orderQty : 0,
        backorderQty : 0,
        unitCost : 12.45,
        unitPrice : 31.45,
        maxPrice : 35.99,
        minimumQty : 3,
        maximumQty : 12
      },
      {
        sku : "83464-333",
        productDescription : "Product2",
        stockQty : 9,
        orderQty : 0,
        backorderQty : 0,
        unitCost : 11.45,
        unitPrice : 21.45,
        maxPrice : 25.99,
        minimumQty : 1,
        maximumQty : 1,
      },
      {
        sku : "970383-333",
        productDescription : "Product3",
        stockQty : 2,
        orderQty : 0,
        backorderQty : 0,
        unitCost : 18.45,
        unitPrice : 21.45,
        maxPrice : 25.99,
        minimumQty : 1,
        maximumQty : 1,
      },
      {
        sku : "33434-763",
        productDescription : "Product 7",
        stockQty : 9,
        orderQty : 0,
        backorderQty : 0,
        unitCost : 11.45,
        unitPrice : 21.45,
        maxPrice : 25.99,
        minimumQty : 1,
        maximumQty : 1,
      },
      {
        sku : "198038-892",
        productDescription : "Product 6",
        stockQty : 9,
        orderQty : 0,
        backorderQty : 0,
        unitCost : 11.45,
        unitPrice : 21.45,
        maxPrice : 25.99,
        minimumQty : 1,
        maximumQty : 1,
      },
      {
        sku : "223403-093",
        productDescription : "Lai324",
        stockQty : 9,
        orderQty : 0,
        backorderQty : 0,
        unitCost : 11.45,
        unitPrice : 21.45,
        maxPrice : 25.99,
        minimumQty : 1,
        maximumQty : 1,
      },
      {
        sku : "673546-433",
        productDescription : "Product232",
        stockQty : 2,
        orderQty : 0,
        backorderQty : 0,
        unitCost : 11.45,
        unitPrice : 21.45,
        maxPrice : 25.99,
        minimumQty : 1,
        maximumQty : 1,
      },
      {
        sku : "993483-333",
        productDescription : "Product08",
        stockQty : 5,
        orderQty : 0,
        backorderQty : 0,
        unitCost : 11.45,
        unitPrice : 21.45,
        maxPrice : 25.99,
        minimumQty : 1,
        maximumQty : 1,
      }
    ]
  }

 

}
