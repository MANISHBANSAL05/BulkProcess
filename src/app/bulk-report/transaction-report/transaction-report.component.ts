import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-transaction-report',
  templateUrl: './transaction-report.component.html',
  styleUrls: ['./transaction-report.component.scss']
})
export class TransactionReportComponent implements OnInit {

  title="Bacth Id Transaction Report";
  form: FormGroup;
  bulkProcessList: any=['Bulk KCP/MSSIDN Tagging', 'Sim Replacement(OTP)', 'Sim Replacement(FingerPrint)', 'KCP Transfer', 'Corporate DeRegistration', 'MNP Corporate'];
  selectedOptionFirst:null;

  constructor(private location: Location,
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      startdate: ['', [Validators.required]],
      enddate: ['',[Validators.required]],
      batchId:['',[Validators.required]],
      poscode: ['',[Validators.required]],
      processname:['',[Validators.required]],
  });
}

today() {
    
  // return CommonUtils.dateToNgbDate(new Date());
}
todayseven()
  {
   var today=new Date();
   var lastweek=new Date(today.getFullYear(),today.getMonth(),today.getDate()-6)
   var last={
    year:lastweek.getFullYear(),
    month:lastweek.getMonth()+1,
    day:lastweek.getDate()
  }
   return last
  }

  onDownload(){
    
  }

}
