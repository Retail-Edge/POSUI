import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Inventory } from 'src/app/Model/Request';
import { RetailStoreServices } from 'src/app/service/RetailStoreServices';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit{

  
  inventoryList : Inventory[] = [];
  filter = new FormControl('');
  
  constructor(private service : RetailStoreServices,private toastr: ToastrService) { 
   
  }

  
  ngAfterViewInit(): void {

  }

  ngOnInit() {

    this.getInventory();
  }

  getInventory()
  {
    this.service.getAllInventory().subscribe((data:any) => {
      this.inventoryList = data;
    });
  }

  

  onUpdateInventory(inventory : Inventory)
  {
     this.service.updateInventory(inventory).subscribe((data : any) => {
       console.log(data);
       this.toastr.success("Success",'Inventory Updated');
     });
  }



  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
  }
  
  onAddInventory()
  {
    let array : Inventory[] = [{
      productMaster : {
        skuId : "",
        description : ""
      }
    }];

    this.inventoryList = array.concat(this.inventoryList);
  }
 

}
