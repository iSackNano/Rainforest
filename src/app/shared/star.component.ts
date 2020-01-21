import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;
  starWidth = 0;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
}
