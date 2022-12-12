import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Output() datas = [
    {name: "", grade1: 0, grade2: 0}
  ];
}
