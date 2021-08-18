import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { InvoiceComponent } from './component/Invoice/Invoice.component';
import { InventoryComponent } from './component/inventory/inventory.component';
import { ProductMasterComponent } from './component/productMaster/productMaster.component';
import { PurchaseorderComponent } from './component/purchaseorder/purchaseorder.component';
import { SupplierComponent } from './component/supplier/supplier.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path : 'dashboard',component : DashboardComponent},
  { path : 'invoice',component:InvoiceComponent},
  { path : 'inventory',component:InventoryComponent},
  { path : 'purchaseorder',component:PurchaseorderComponent},
  { path : 'productmaster',component:ProductMasterComponent},
  { path : 'supplier',component:SupplierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
