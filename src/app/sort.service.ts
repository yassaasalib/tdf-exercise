// src/app/sort.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  sortAscending(values: any[]): any[] {
    return values.sort((a, b) => this.compare(a, b));
  }

  sortDescending(values: any[]): any[] {
    return values.sort((a, b) => this.compare(b, a));
  }

  private compare(a: any, b: any): number {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    } else if (typeof a === 'string' && typeof b === 'string') {
      return a.localeCompare(b);
    } else {
      return 0;
    }
  }
}