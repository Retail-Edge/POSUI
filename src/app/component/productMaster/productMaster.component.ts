import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/Model/Request';
import { RetailStoreServices } from 'src/app/service/RetailStoreServices';

@Component({
  selector: 'app-productMaster',
  templateUrl: './productMaster.component.html',
  styleUrls: ['./productMaster.component.css']
})
export class ProductMasterComponent implements OnInit {

  productList : Product[] = new Array();
  description : string = "";

  constructor(private service : RetailStoreServices,private toastr: ToastrService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts()
  {
    this.service.getAllProducts().subscribe((data:any) => {
      this.productList = data;
    });
  }

  addProduct()
  {
    this.service.addProduct(this.description).subscribe((data : any) => {
      this.toastr.success("Product Successfully Create","New Product");
    })
  }

}
