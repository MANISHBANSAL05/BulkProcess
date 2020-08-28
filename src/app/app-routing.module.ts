import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulkFileListComponent } from './Bulk-File/bulk-file-list/bulk-file-list.component';
import { BulkFileViewComponent } from './Bulk-File/bulk-file-view/bulk-file-view.component';
import { BuldAddComponent } from './Bulk-File/buld-add/buld-add.component';
import { BulkAddViewComponent } from './Bulk-File/bulk-add-view/bulk-add-view.component';
import { BulkReportComponent } from './bulk-report/bulk-report.component';
import { TransactionReportComponent } from './bulk-report/transaction-report/transaction-report.component';
import { MSISDNReportComponent } from './bulk-report/msisdnreport/msisdnreport.component';
import { BulkTableComponent } from './Bulk-File/bulk-table/bulk-table.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';


const routes: Routes = [
  { path: '', redirectTo: 'bulkProcess', pathMatch: 'full'},
  { path: 'bulkProcess', component: BulkFileListComponent, pathMatch: 'full' },
  { path: 'bulkProcess/edit/:id', component: BulkFileViewComponent, data: { mode: 'EDIT' } },
  { path: 'bulkProcess/create/:name', component: BulkFileViewComponent, data: { mode: 'CREATE' } },
  { path: 'bulkProcess/add', component: BuldAddComponent, pathMatch: 'full' },
  { path: 'bulkProcess/add/batchid/:batchID', component: BulkAddViewComponent, pathMatch: 'full' },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
