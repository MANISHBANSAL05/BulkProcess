import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormArray } from '@angular/forms';
import { faPlus, faTimes, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
// import { API_CONFIG } from 'src/app/shared/config/api.config';
// import { ApiHandlerService } from 'src/app/services/api/api-handler.service';

@Component({
  selector: 'app-bulk-add-view',
  templateUrl: './bulk-add-view.component.html',
  styleUrls: ['./bulk-add-view.component.scss']
})
export class BulkAddViewComponent implements OnInit {

  title="Edit Corporate Bulk Process"
  items = [
    {
      id:1,
      execution_type: 'yagging',
      msisdn: 1898763212,
      bscode: 9876,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456781,
      batchId: 12345,

    },
    {
      id:2,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763212,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 67987,
      batchId: 12345,

    },
    { 
      id:3,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763213,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456789,
      batchId: 12345,

    },
    { 
      id:4,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763214,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456789,
      batchId: 12345,

    },
    {
      id:5,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763215,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456789,
      batchId: 12345,
    },
    { 
      id:6,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763216,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456789,
      batchId: 12345,

    },
    {
      id:7,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763217,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456789,
      batchId: 12345,

    },
    {
      id:8,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763218,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456789,
      batchId: 12345,

    },
    {
      id:9,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763219,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456789,
      batchId: 12345,

    },
    { 
      id:10,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763210,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456789,
      batchId: 12345,
    }
  ];

  bulkList: {
    execution_type: string
    msisdn: any
    bscode: any
    nid: any
    dob: string
    poscode: any
    batchId:any
  }[] = [];


  mode = ''; // EDIT/CREATE/VIEW
  form: FormGroup;
  // myFormGroup : FormGroup 
  actionType: string;
  loading = true;
  id = null;
  public popoverTitle: string = "Advertisement Delete Confirmation";
  public popoverMessage: string = "Do You Really Want to Delete?";
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  filename='';
  errorMessage = "";
  fileData:any=[];
  currentBatchId:number=null;
  batchIdData:any=[];
  isReadOnly: boolean = false;
  currentRow:any;
  processName:string="Sim Replacement(OTP)";
  isEnable:boolean=true;
  page = 1;
  pageSize = 5;
  
  fa = {
    faTimes,
    faPlus,
    faCalendarAlt
  };

  constructor(private location: Location,
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    ) {     }

  ngOnInit(): void {
    this.bulkList = this.items;
    this.loading=true;
    console.log("inside process name if --- ", this.processName)
    if(this.processName=="Bulk KCP/MSSIDN Tagging" || this.processName=="MNP Corporate"){
      console.log("inside process name if ")
      this.isEnable=false;
    }
    this.createForm();
    
    
      console.log("this is add")
      this.route.params.subscribe((val: any) => {
        this.currentBatchId=val.batchID;
        console.log("--- ", this.currentBatchId)
        // needs to be delete later
        this.batchIdData=this.bulkList.filter(x => x.batchId === 12345 );
        console.log("curre dtata ",this.batchIdData)
        //till here 

        //needs to be enable

        //   this.api.get(API_CONFIG.POS_MAP.EDIT_DATA+val.batchID).subscribe(res=>{
        //   console.log("Response from pos data based on batch id",res);
        //   this.populateForm(res);
        // },err=>{
        //   alert("Error while getting data");
        //   this.loading=false;
        // })

        this.populateForm(this.batchIdData[0])

      })
  }

  createForm() {
    this.form = this.fb.group({
      execution_type: ['', [Validators.required]],
      // msisdn: [''],
      bscode: ['', [Validators.required]],
      nid: ['', [Validators.required]],
      dob: [''],
      poscode: [''],
      batchId:[''],
      emailId:[''],
      posArray: this.fb.array([this.createRow()])
  });
}
createRow(): FormGroup {
  console.log(" create row ---- ", this.fb.group({
    msisdn: ['', [Validators.required]],
  }))
  if(this.isEnable==false){
    return this.fb.group({
      msisdn: ['', [Validators.required]],
    });
  }
  else{
    return this.fb.group({
      msisdn: ['', [Validators.required]],
      simkit: ['', [Validators.required]]
    });

  }
  
}

populateForm(batchIdData){
  this.loading=true;
  console.log("batch id data is ",batchIdData);

  let model=
  {
    execution_type:batchIdData['execution_type'],
    msisdn: batchIdData['msisdn'],
    bscode: batchIdData['bscode'],
    nid: batchIdData['nid'],
    dob: batchIdData['dob'],
    poscode: batchIdData['poscode'],
    batchId:batchIdData['batchId'],
  }
  this.form.patchValue(model);
}
get posArray() {
  
  return this.form.get('posArray') as FormArray;
}


addRow() {
  
  this.posArray.push(this.createRow());
}
removeRow(index) {
  if (this.posArray.length === 1) {
    alert('Atleast 1 row is required to proceed.');
    return;
  }
  this.posArray.removeAt(index);
}

getTrueIndex(i) {
  console.log("inside gettrueIndex ",i);
  const idx = (this.page-1)*this.pageSize + i
  // console.log("index ->", idx);
  console.log("inside gettrueIndex after ",idx)
  return idx;
}

  onBack(){
    this.location.back();
  }

  onReset(){
    // this.form.reset();
    const array = this.form.get("posArray") as FormArray;
    
      for(var i=0;i<array.length;i++){
        const control = array.at(i);
        control.get('msisdn').setValue("");
        if(this.isEnable==true){
        control.get('simkit').setValue("");
      }
      }
  }

  // 
  
  onSaveBtn() {
    if (!this.form.valid) {
      Object.keys(this.form.controls).forEach(field => {
        if (field === "posArray") {
          const array = this.form.get(field) as FormArray;
          for(var i=0;i<array.length;i++){
            const control = array.at(i);
            control.get('msisdn').markAsTouched({ onlySelf: true });
            if(this.isEnable==true){
            control.get('simkit').markAsTouched({ onlySelf: true });
          }
        }
        }
        else{
        const control = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
        }
      });

      return;
    }
    console.log("Form",this.form.controls);
    this.loading=true;
    this.router.navigate(['../../../'],{relativeTo:this.activatedRoute});  
    // this.api.put(API_CONFIG.POS_MAP.EDIT+this.id, RequestHelper.getPOSData(this.form.controls)).subscribe((response: any)=>{
    //   console.log("response from edit",response);
    //   if(response.status==="success"){
    //   this.loading = false; 
    //   this.router.navigate(['../../'],{relativeTo:this.activatedRoute});  
    //   }
    //   else{
    //     alert(response.error_message);
    //     this.loading = false;
    //   }
    // }, (err)=>{
    //   this.loading= false;
    //   alert(err.error.errorMessage);
    // })
   
    // this.router.navigate(['../'], { relativeTo: this.route });
  
  }



}
