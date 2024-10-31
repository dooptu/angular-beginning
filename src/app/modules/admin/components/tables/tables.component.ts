import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Input() actions: any[] = []; // Accept actions as input

  constructor() {
  }
}
