import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd, RouterState } from '@angular/router';
import { faEdit, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Validator, VALIDATIONS } from 'src/app/data/utils/Validator';
import { BulkTableComponent } from '../bulk-table/bulk-table.component';



@Component({
  selector: 'app-bulk-file-list',
  templateUrl: './bulk-file-list.component.html',
  styleUrls: ['./bulk-file-list.component.scss']
})
export class BulkFileListComponent implements OnInit {
  dropDownText: '';
  @Input() disableMsisdn = false;
  // @ViewChild('focus', { static: false }) input: ElementRef;

  title = 'Corporate Bulk Process';
  form: FormGroup;
  mode = '';
  // bulkProcessList: any=['Bulk KCP/MSSIDN Tagging', 'Sim Replacement(OTP)', 'Sim Replacement(FingerPrint)', 'KCP Transfer', 'Corporate DeRegistration', 'MNP Corporate'];
  bulkProcessList: any = ['Bulk KCP/MSSIDN Tagging', 'Sim Replacement(OTP)', 'Sim Replacement(FingerPrint)', 'KCP Transfer', 'Corporate DeRegistration', 'MNP Corporate'];
  searchBox: any = ['MSISDN', 'BSCODE', 'POSCODE', 'BATCHID'];

  // ExecutionType: any = ['Bulk KCP/MSSIDN Tagging', 'Sim Replacement(OTP)', 'Sim Replacement(FingerPrint)', 'KCP Transfer', 'Corporate DeRegistration', 'MNP Corporate']
  page = 1;
  pageSize = 4;
  maxLengthValue: number;
  // searchString: 'searchString';
  currentRoute: string;

  items = [
    {
      id: 1,
      execution_type: 'yagging',
      msisdn: 1898763212,
      bscode: 9876,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456781,
      batchId: 12345,

    },
    {
      id: 2,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763212,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 67987,
      batchId: 12345,

    },
    {
      id: 3,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763213,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456789,
      batchId: 12345,

    },
    {
      id: 4,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763214,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456789,
      batchId: 12345,

    },
    {
      id: 5,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763215,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456789,
      batchId: 12345,
    },
    {
      id: 6,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763216,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456789,
      batchId: 12345,

    },
    {
      id: 7,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763217,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456789,
      batchId: 12345,

    },
    {
      id: 8,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763218,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456789,
      batchId: 12345,

    },
    {
      id: 9,
      execution_type: 'KCPMSISDN Tagging',
      msisdn: 1798763219,
      bscode: 654367,
      nid: 875456,
      dob: '05/07/1991',
      poscode: 3456789,
      batchId: 12345,

    },
    {
      id: 10,
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
    batchId: any
  }[] = [];

  fa = {
    faEdit,
    faPlus,
    faSearch
  };
  public searchString: string;
  public searchText: string;
  public searchText1: string;



  selectedOption: null;
  selectedOptionFirst: string;
  selectedOptionFirst1: string;
  validateEvent: any;
  customList: any[];

  // currentRow: {
  //   execution_type: string
  //   msisdn: any
  //   bscode: any
  //   nid: any
  //   dob: string
  //   poscode: any
  //   batchId:any
  // }[] = [];


  errors = {
    msisdn: { valid: false, message: [] },
  };
  validateMsisdn() {

    console.log("inside ")
    console.log("selected option ", this.selectedOption);

    // if(this.selectedOption=='MSISDN'){
    this.errors.msisdn = Validator.validate({
      value: this.searchString,
      validations: [VALIDATIONS.CONTACT],
      options: { len: [11] }
    });

  }

  getMessage(item: any): string {
    if (item.message.length === 0) {
      return '';
    }
    return item.message[0];
    // return item.message.join(' ');
  }

  validate() {

    this.validateMsisdn();

    return this.errors.msisdn.valid;

  }
  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,) { }
  @ViewChild('focus', { static: false }) input: ElementRef;

  ngOnInit() {
    this.bulkList = this.items;
    this.checkboxes = new Array(this.bulkList.length);
    this.checkboxes.fill(false);
    this.filterdata = new Array();
    this.customList = new Array();
    this.currentRoute = '';


    console.log("hi", this.checkboxes)
  }
  selectedRow: Number;
  checkboxes: boolean[];
  checks: boolean;
  filterdata: any[];
  getFilteredValue: any;
  getFilterest(getFilteredValue) {
    console.log(this.getFilteredValue);
  }
  columnsAll: Array<any> = [
    { name: 'ExecutionType', label: 'Execution Type' },
    { name: 'MSISDN', label: 'MSISDN' },
    { name: 'POSCODE', label: 'POSCODE' },
    { name: 'BSCODE', label: 'BSCODE' },
    { name: 'NID', label: 'NID' },
    { name: 'DOB', label: 'DOB' },

  ];
  columnsSelected: Array<any> = [
    { name: 'ExecutionType', label: 'Execution Type' },
    { name: 'MSISDN', label: 'MSISDN' },
    { name: 'POSCODE', label: 'POSCODE' },
    // { name: 'BSCODE', label: 'BSCODE' },
    // { name: 'NID', label: 'NID' },
    // { name: 'DOB', label: 'DOB' },

  ];





  routeTo(e) {
    console.log('something change')
    this.router.navigate(['./' + e]);
  }
  onActivate(event) {
    console.log("event is ", event)
    if (event instanceof BulkTableComponent) {
      this.currentRoute = 'kcpmsisdn';
      // this.router.navigate(['./kcpmsisdn'], { relativeTo: this.route }); 
    }

  }

  bulk(e) {
    console.log("inside bulk ", this.customList);
    for (let i = this.checkboxes.length - 1; i >= 0; i--) {
      // If selected, then delete that row.
      if (e.target.checked == true) {
        this.checkboxes[i] = e.target.checked;
      }
      else {
        this.checkboxes[i] = e.target.checked;
      }

    }
    // e.target.checked=false;

  }

  getMaxLength() {


    // console.log(this.selectedOption)
    if (this.selectedOption == 'MSISDN') {
      return this.maxLengthValue = 11;
    }
    else if (this.selectedOption == 'POSCODE')
      return this.maxLengthValue = 7;

    else if (this.selectedOption == 'BSCODE')
      return this.maxLengthValue = 4;

    else
      return this.maxLengthValue = 9;

  }

  createForm() {
    this.form = this.fb.group({
      execution_typ: ['', [Validators.required]],
      msisdn: ['', [Validators.required]],
      bscode: ['', [Validators.required]],
      nid: ['', [Validators.required]],
      dob: [''],
      poscode: [''],
      batchId: [''],
    })
  }

  onCreate() {
    console.log("on create ", this.selectedOptionFirst)
    this.router.navigate(['./create', this.selectedOptionFirst], { relativeTo: this.route });
  }

  onEdit(id) {
    console.log("id ", id)

    this.router.navigate(['./edit', id], { relativeTo: this.route });
  }

  onADD() {
    this.router.navigate(['./add'], { relativeTo: this.route });
  }

  // onSelect(){
  //   // this.bulkProcessList;
  // this.router.navigate(['./',this.bulkProcessList],{relativeTo:this.route});
  // }
  setClickedRow(index) {
    console.log("inside set clicked row")
    console.log(index)
    this.selectedRow = index;
  }
  toggleSelection(event, i, value) {
    console.log("inside toggle ")
    console.log(i);
    console.log("value inside toggle ", value)
    console.log("inside toggle ", event.target.checked, "   index ", i)
    this.checkboxes[i] = event.target.checked;
    console.log("toggle sel", this.checkboxes[i])

    if (this.checkboxes[i] == true) {
      console.log("inside if-true")
      this.filterdata.push(value);
    }
    else {
      console.log("inside if-false", i)

      this.filterdata.splice(this.filterdata.indexOf(value), 1);
    }
    console.log("data ", this.filterdata);
  }
  delete() {

    var atleastOneSelected = this.checkboxes.some(checkbox => checkbox === true);

    if (!atleastOneSelected) {
      alert("No rows selected.")
      return;
    }


    console.log("checkbox length ", this.checkboxes.length)
    console.log("bulklist length ", this.bulkList.length)
    console.log("filter data length ", this.filterdata.length)

    for (let i = 0; i <= this.filterdata.length - 1; i++) {
      console.log("for loop ");
      console.log("this.fil ", this.filterdata[i]);
      const foundIndex = this.bulkList.findIndex(({ msisdn }) => msisdn === this.filterdata[i]);
      console.log("index  -- ", foundIndex);
      this.bulkList.splice(foundIndex, 1);

    }

    console.log("bulklist length ", this.bulkList.length)
    console.log("check boc length ", this.checkboxes.length)
    this.checkboxes = this.checkboxes.filter(checkbox => checkbox === false);

    if (this.filterdata.length == 1) {
      alert("Selected Row Deleted ")

    }
    else
      alert("Selected Rows Deleted ")

    this.searchString = "";
    this.filterdata = new Array();
    let len = this.bulkList.length;
    this.checkboxes = new Array(len).fill(false);

    console.log("check boc length ", this.checkboxes.length)

  }


  deleteAll() {
    // for (let i = this.bulkList.length-1; i >= 0; i--) {
    //   console.log("val ",this.bulkList[i].msisdn)
    // this.checkboxes[i]=true;

    // }




    var atleastOneSelected = this.checkboxes.some(checkbox => checkbox === true);
    if (!atleastOneSelected) {
      alert("No rows selected.")
      return;
    }

    var allSelected = this.checkboxes.every(checkbox => checkbox === true);
    // var allSelected=true
    if (allSelected) {

      for (let i = this.checkboxes.length - 1; i >= 0; i--) {
        // If selected, then delete that row.
        console.log("for loop ", this.checkboxes[i])
        console.log("index ", i)
        // console.log("bulklist val before if ",this.bulkList[i].msisdn)
        if (this.checkboxes[i]) {
          console.log("if cond  ", this.checkboxes[i])
          console.log("bulklist val ", this.bulkList[i].msisdn)
          this.bulkList.splice(i, 1);
        }
      }
      this.checkboxes = this.checkboxes.filter(checkbox => checkbox === false);
      this.checks = false;

      this.searchString = "";

      this.filterdata = new Array();

    }
    else

      alert("All row should be selected.")
  }

  onSelectProcess(e) {
    console.log("on select ", this.selectedOptionFirst)
    this.selectedOptionFirst1 = this.replaceAll(this.selectedOptionFirst, '', '');
    console.log("---", this.selectedOptionFirst1);
    if (this.bulkProcessList == 'Bulk KCP/MSSIDN Tagging') {
      this.selectedOptionFirst = '';
      this.router.navigate(['./kcpmsisdn'], { relativeTo: this.route });
    }
    else if (this.mode == 'SIMOTP') {
      this.router.navigate(['./simotp'], { relativeTo: this.route });
    }

  }

  onNavigate(location) {
    console.log(location);
    this.dropDownText = location;
    console.log("selec ", this.selectedOptionFirst)
    if (location === 'Bulk KCP/MSSIDN Tagging') {
      this.router.navigate(['./kcpmsisdn'], { relativeTo: this.route });
    }

    else if (location === 'Sim Replacement(FingerPrint)') {
      // this.selectedOptionFirst="simfingerprint";
      this.router.navigate(['./simfingerprint'], { relativeTo: this.route });
    }

    else if (location === 'Sim Replacement(OTP)') {
      this.selectedOptionFirst = "simotp";
    }
    else if (location === 'KCP Transfer') {
      this.selectedOptionFirst = "kcptransfer";
    }

    else if (location === 'Corporate DeRegistration') {
      this.selectedOptionFirst = "corporatederegistration";
    }
    else if (location === 'MNP Corporate') {
      this.selectedOptionFirst = "mnpcorporate";
    }
  }

  public replaceAll(input: string, find: string, replace: string): string {
    console.log("--11--inside replace all ", input)
    return input.replace(/\s/g, "");

  }

  // tablefilter(value){
  //   console.log("inside table filter")
  //   console.log("value us ",value)
  // // this.filterdata[0]=value;
  // this.filterdata.push(value);
  // console.log("data ",this.filterdata);
  // }
}


