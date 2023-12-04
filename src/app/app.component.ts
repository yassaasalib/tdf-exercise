import { Component } from '@angular/core';
import { SortService } from './sort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numberOfInputs!: number;
  inputValues: any[] = [];
  sortOrder!: string;

  constructor(private sortService: SortService) { }

  generateInputs() {
    this.inputValues = Array.from({ length: this.numberOfInputs }, (_, index) => "");
  }

  sortValues() {
    if (this.sortOrder === 'asc') {
      this.inputValues = this.sortService.sortAscending(this.inputValues);
    } else if (this.sortOrder === 'desc') {
      this.inputValues = this.sortService.sortDescending(this.inputValues);
    }
  }

  trackByFn(index: any): any {
    return index;
  }
}