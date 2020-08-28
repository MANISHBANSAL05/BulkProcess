import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder,Validators,FormArray,FormControl} from '@angular/forms';
import { Location } from '@angular/common';
import { faPlus, faTimes, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';





@Component({
  selector: 'app-bulk-file-view',
  templateUrl: './bulk-file-view.component.html',
  styleUrls: ['./bulk-file-view.component.scss']
})
export class BulkFileViewComponent implements OnInit {
  @Input() selectedOptionFirst : string;
  
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
      simkit: 9999,

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
      simkit: 8888,

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
      simkit: 7777,

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
      simkit: 9999,

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
      simkit: 9990,
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
      simkit: 9988,

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
      simkit: 9659,

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
      simkit: 9559,

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
      simkit: 9999,

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
      simkit: 2222,
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
    simkit:any
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
  // currentId=null;
  currentId=null;
  
  isReadOnly: boolean = false;
  currentRow:any;
  isEnable:boolean=true;
  
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
    ) {
      // this.route.data.subscribe(data => {
      //   this.mode = data.mode;
      //   this.route.params.subscribe((val: any) => {
      //     this.id = val.id;
      //   })
  
      // });
     }

  ngOnInit(): void {
    this.bulkList = this.items;
    this.loading=true;
    this.createForm();
    this.route.data.subscribe(data => {
      this.mode = data.mode; 
      console.log("text is ",this.selectedOptionFirst);
      if(this.mode=="CREATE"){
        this.loading=true;
        this.isReadOnly=true;
        this.route.params.subscribe((val: any) => {
          this.currentId=val.name
          this.currentId="Bulk KCP/MSSIDN Tagging"
          if(this.currentId=="Bulk KCP/MSSIDN Tagging" || this.currentId=="MNP Corporate"){
            console.log("inside process name if ")
            this.isEnable=false;
          }
          console.log("this.cureent row is ",this.currentId)
          this.populateForm(this.currentId);
        })
  }
      if(this.mode=="EDIT"){
        this.loading=true;
        this.isReadOnly=true;
        this.route.params.subscribe((val: any) => {
          this.currentId=val.id
          this.selectedOptionFirst="Bulk KCP/MSSIDN Tagging";
          if(this.selectedOptionFirst=="Bulk KCP/MSSIDN Tagging" || this.selectedOptionFirst=="MNP Corporate"){
            console.log("inside process name if ")
            this.isEnable=false;
          }
          console.log("this.cureent row is ",this.currentId)
          this.populateForm(this.currentId);
        })
  }
    });
  }

  createForm() {
    this.form = this.fb.group({
      execution_type: ['', [Validators.required]],
      msisdn: [''],
      bscode: ['', [Validators.required]],
      nid: ['', [Validators.required]],
      dob: [''],
      batchId:[''],
      poscode: [''],
      emailId:[''],
      simkit:[''],
  });
}

populateForm(currentId){
  this.loading=true;
  console.log("mode is ",this.mode);
  console.log("id is ",currentId);

  
  if(this.mode=='CREATE'){
    let model=
  {
    execution_type:currentId
  }
  this.form.patchValue(model);
  }
  else{
    console.log(this.bulkList[currentId]);
  this.currentRow=this.bulkList[currentId-1];
  
  console.log("cur row ",this.currentRow);
  let model=
  {
    execution_type:this.currentRow['execution_type'],
    msisdn: this.currentRow['msisdn'],
    bscode: this.currentRow['bscode'],
    nid: this.currentRow['nid'],
    dob: this.currentRow['dob'],
    poscode: this.currentRow['poscode'],
    batchId:this.currentRow['batchId'],
    simkit:this.currentRow['simkit'],
  }
  this.form.patchValue(model);
}
 
  
  // this.currentRow=this.bulkList[curr]
  // this.api.get(API_CONFIG.CHANNEL2.Get_Details+this.currentRow).subscribe(response=>{
  //   console.log("Response for edit",response);
  //   let model={
  //     channel: response.channel,
  //     bypass: response.bypass,
  //   }
  //   this.form.patchValue(model);
  //   this.loading=false;
  // }),err=>{
  //   alert("Error while getting Inventory Bypass Flag details");
  //   this.loading=false;
  // }
}


  getTitle() {
    if (this.mode === 'CREATE') {
      return 'Create Corporate Bulk Process';
    }
    if (this.mode === 'EDIT') {
      return 'Edit Corporate Bulk Process';
    }
    return '';
  }

  onBack(){
    this.location.back();
  }

  onReset(){
    this.form.reset();
  }
  onCreate(){
    console.log("inside create")

    if(!this.form.valid){ 
      console.log("inside if not valid form ?")
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
  
      return;
    }
    const vals =this.form.value;
    let posData={
      execution_type:vals.execution_type,
      msisdn: vals.msisdn,
      bscode: vals.bscode,
      nid: vals.nid,
      dob: vals.dob,
      poscode: vals.poscode,
      batchId:vals.batchId,  
    }
      if(this.form.valid){
        console.log("inside if  valid form ?")
        this.loading=true;
        this.router.navigate(["../../"],{relativeTo:this.activatedRoute})
        console.log("posDate ",posData);
        // this.api.post(API_CONFIG.CHANNEL2.CREATE,posData).subscribe(response=>{
        //   console.log("Response from create Inventory Bypass Flag",response);
        //   this.loading=false;
        //   if(response.status==="Success"){
        //     this.router.navigate(["../"],{relativeTo:this.activateRoute})
        //   }
        //   else{
        //     alert("Error while creating Inventory Bypass Flag")
        //   }
        // },err=>{
        //   if(err.error.status==="BAD_REQUEST"){
        //     alert(err.error.errorMessage);
        //   }
        //   console.log("Error",err);
        //   this.loading=false;
        // })
    }

  }

  onFileSelect(event) {
    this.form.get('file').setValue(event.srcElement.files);
    this.fileData = event.srcElement.files;
    console.log(event);
  }


  downloadEmptyTemplate() {
    if (this.mode === "EDIT") {
      // this.api.getExcel(API_CONFIG.INVENTORY.DOWNLOAD).subscribe((response) => {
      //   let blob = new Blob([response], { type: "application/ms-excel" });
      //   let url = window.URL.createObjectURL(blob);
      //   let anchor = document.createElement("a");
      //   anchor.download = "InventoryTemplate.xlsx";
      //   anchor.href = url;
      //   anchor.click();
      //   anchor.remove();
  
      // })
    }
  }

  onSave() {
    const vals= this.form.value;
    if(!this.form.valid){ 
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
  
      return;
    }

    let saveData={
      execution_type:vals.execution_type,
      msisdn: vals.msisdn,
      bscode: vals.bscode,
      nid: vals.nid,
      dob: vals.dob,
      poscode: vals.poscode,
      batchId:vals.batchId,  
    }

      if(this.form.valid){
        this.loading=true;
        
        console.log("Final request",saveData);
        this.router.navigate(["../../"],{relativeTo:this.activatedRoute})
    //     this.api.post(API_CONFIG.CHANNEL2.EDIT,saveData).subscribe(response=>{
    //       console.log("Response from edit Inventory Bypass Flag",response);
    //       this.loading=false;
    //       if(response.status==="Success"){
    //         this.router.navigate(["../../"],{relativeTo:this.activateRoute})
    //       }
    //       else{
    //         alert("Error while editing Inventory Bypass Flag")
    //       }
    //     },err=>{
    //       console.log("Error",err);
    //       this.loading=false;
    //     })
     }
  }
  



}
