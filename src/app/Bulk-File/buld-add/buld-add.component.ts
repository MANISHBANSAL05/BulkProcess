import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buld-add',
  templateUrl: './buld-add.component.html',
  styleUrls: ['./buld-add.component.scss']
})
export class BuldAddComponent implements OnInit {

  title="Corporate Bulk Process"
  constructor(private fb:FormBuilder,
    private router: Router,
    private route: ActivatedRoute,) { }
    batchID:any;

  ngOnInit() {
  }

  onNext(){
    console.log("batch id ",this.batchID)
      this.router.navigate(['./batchid',this.batchID], { relativeTo: this.route });
    }

}
