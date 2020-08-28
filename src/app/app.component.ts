import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Test2Component } from './test2/test2.component';
import { Test1Component } from './test1/test1.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  name = 'Angular 5';
  currentRoute: string;
  routes = [
    
    {
      value: 'react',
      display: 'React'
    },
    {
          value: 'angular',
          display: 'Angular'
        },
        {
          value: 'java',
          display: 'Java'
        }
  ]

  constructor(private route: ActivatedRoute, private router: Router) { }

  onActivate(event) {
    console.log("insde activate ")
    if (event instanceof Test2Component) {
      this.currentRoute = 'react';
    } 
    if (event instanceof Test1Component) {
      this.currentRoute = 'angular';
    }
  }
  ngOnInit() {
    this.currentRoute = '';
  }
  routeTo(e) {
    console.log('something change')
    this.router.navigate(['/' + e]);
  }


}