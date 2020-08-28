// import { Pipe, PipeTransform, Injectable } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// @Injectable()
// export class FilterPipe implements PipeTransform {
//   transform(items: any[], field: any, value: any): any[] {
//     if (!items) {
//       return [];
//     }
//     if (!field || !value) {
//       return items;
//     }

//     return items.filter(singleItem =>
//       singleItem[field].toLowerCase().includes(value.toLowerCase())
//     );
//   }
// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any, filter: any, defaultFilter: boolean): any {
    if (!filter) {
      // console.log("inside filter ", items);
      return items;
    }

    if (!Array.isArray(items)) {
      // console.log("inside Array filter  ", items);
      return items;
    }

    if (filter && Array.isArray(items)) {
      // console.log("inside araay &&  ", items);
      let filterKeys = Object.keys(filter);

      if (defaultFilter) {
        // console.log("default filters   ", items);
        return items.filter(item =>
          filterKeys.reduce((x, keyName) =>
            (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
      }
      else {
        // console.log("else default filters   ", items);
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
          });
        });
      }
    }
  }
}