import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { ExpandableGridComponent } from './expandable-grid/expandable-grid.component';
// import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
// import { jqxDataTableComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { TruncatePipesModule } from 'angular-truncate-pipes';
import { BulkFileViewComponent } from './Bulk-File/bulk-file-view/bulk-file-view.component';
import { BulkFileListComponent } from './Bulk-File/bulk-file-list/bulk-file-list.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FilterPipe } from './Bulk-File/FilterPiper.component';
import {CommonModule} from '@angular/common';
import { BuldAddComponent } from './Bulk-File/buld-add/buld-add.component';
import { BulkAddViewComponent } from './Bulk-File/bulk-add-view/bulk-add-view.component';

import { ContorlMessageComponent } from './shared/components/contorl-message/contorl-message.component';
import { BulkReportComponent } from './bulk-report/bulk-report.component';
import { TransactionReportComponent } from './bulk-report/transaction-report/transaction-report.component';
import { MSISDNReportComponent } from './bulk-report/msisdnreport/msisdnreport.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BulkTableComponent } from './Bulk-File/bulk-table/bulk-table.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
// import { Test2Component } from './test2.component';
// import { BulkTableComponent } from './Bulk-File/bulk-table/bulk-table.component';




@NgModule({
  declarations: [

    ContorlMessageComponent,
    AppComponent,
    // ExpandableGridComponent,
    BulkFileViewComponent,
    BulkFileListComponent,
    FilterPipe,
    BuldAddComponent,
    BulkAddViewComponent,
    BulkReportComponent,
    TransactionReportComponent,
    MSISDNReportComponent,
    SideNavComponent,
    BulkTableComponent,
    Test1Component,
    Test2Component
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    jqxChartModule,
    TruncatePipesModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
