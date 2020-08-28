import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() navList: any;

  constructor() { }

  ngOnInit() {
  }

  onRouteSelected(path: string) {

    // console.log('Clearing transaction data...');
    // this.state.clear(STORAGE_KEYS.TRANSACTION).subscribe( (res: any) => {
    //   console.log('Transaction data cleared...');
    // });
    // this.state.clear(STORAGE_KEYS.TCAP).subscribe( (res: any) => {
    //   console.log('Tcap data cleared...');
    // });
    // this.state.clear(STORAGE_KEYS.RESULT).subscribe( (res: any) => {
    //   console.log('Result data cleared...');
    // });
  }


}
