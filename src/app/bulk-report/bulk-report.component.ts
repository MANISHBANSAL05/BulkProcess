import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bulk-report',
  templateUrl: './bulk-report.component.html',
  styleUrls: ['./bulk-report.component.scss']
})
export class BulkReportComponent implements OnInit {

  title="Corporate Bulk Process Report";
  constructor(private fb:FormBuilder,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit() {
  }

  onTransactionNavigation(){
    // console.log("batch id ",this.batchID)
      this.router.navigate(['./transactionreport'], { relativeTo: this.route });
  }

  onMsisdnNavigation(){
    this.router.navigate(['./msisdnreport'], { relativeTo: this.route });
  }

}
