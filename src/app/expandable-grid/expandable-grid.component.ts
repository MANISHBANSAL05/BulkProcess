// import { Component, OnInit, Input } from '@angular/core';

// @Component({
//   selector: 'app-expandable-grid',
//   templateUrl: './expandable-grid.component.html',
//   styleUrls: ['./expandable-grid.component.scss']
// })
// export class ExpandableGridComponent implements OnInit {

//   @Input() gridData = [];

//   expansionGrid = [];

//   constructor() { }

//   ngOnInit(): void {
//     this.prepareExpansionGrid();
//   }

//   prepareExpansionGrid() {
//     for (const row of this.gridData) {
//       if (row.childList) {
//         this.expansionGrid.push({
//           name: row.name,
//           show: false
//         });
//       }
//     }
//   }

//   toggleExpansion(name) {
//     for (const row of this.expansionGrid) {
//       if (row.name === name) {
//         row.show = !row.show;
//         break;
//       }
//     }
//   }

//   isExpanded(name) {
//     for (const row of this.expansionGrid) {
//       if (row.name === name) {
//         return row.show;
//       }
//     }

//     return false;
//   }
// }
