import { Component, Input } from '@angular/core';

@Component({
  selector: 'cv-portfolio-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
})
export class NoDataComponent {
  @Input() noDataText = '';
}
