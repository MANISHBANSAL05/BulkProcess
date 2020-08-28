import { Component, SimpleChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterState } from '@angular/router';
import { Test2Component } from '../test2/test2.component';
// import { Test2Component } from '../test2/test2.component';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
  // name = 'Angular 5';
  // currentRoute: string;
  // routes = [
    
  //   {
  //     value: 'react',
  //     display: 'React'
  //   },
  //   {
  //     value: 'angular',
  //     display: 'Angular'
  //   },
  //   {
  //     value: 'java',
  //     display: 'Java'
  //   }
  // ]

  constructor(private route: ActivatedRoute, private router: Router) { }
  // onActivate(event) {
  //   console.log("insde activate ")
  //   if (event instanceof Test2Component) {
  //     this.currentRoute = 'react';
  //   } 
  // }
  ngOnInit() {
    // this.currentRoute = '';
  }
  routeTo(e) {
    console.log('something change')
    this.router.navigate(['/' + e]);
  }


}
